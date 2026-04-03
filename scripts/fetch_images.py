import os
import re
import requests
from io import BytesIO
from PIL import Image

# Setup paths
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
TS_FILE = os.path.join(BASE_DIR, "lib", "locations.ts")
CREDITS_FILE = os.path.join(BASE_DIR, "lib", "imageCredits.ts")
IMG_DIR = os.path.join(BASE_DIR, "public", "stadiums")

HEADERS = {"User-Agent": "GridGuessr/1.0 (https://gridguessr.com) python-requests/2.x"}
MAX_WIDTH = 1000

def parse_stadiums():
    stadiums = []
    with open(TS_FILE, "r", encoding="utf-8") as f:
        content = f.read()
    
    # Match id, name, team
    pattern = re.compile(r'\{\s*id:\s*(\d+),\s*name:\s*"([^"]+)",\s*team:\s*"([^"]+)"')
    for match in pattern.finditer(content):
        stadiums.append({
            "id": int(match.group(1)),
            "name": match.group(2),
            "team": match.group(3)
        })
    return stadiums

def get_wikimedia_file(name, team):
    # Remove parens like (IL) or (KS) for better search
    clean_name = re.sub(r'\(.*?\)', '', name).strip()
    query = f"{clean_name} {team} stadium"
    url = "https://en.wikipedia.org/w/api.php"
    params = {
        "action": "query",
        "list": "search",
        "srsearch": query,
        "format": "json",
    }
    res = requests.get(url, params=params, headers=HEADERS).json()
    if not res.get("query", {}).get("search"):
        return None
    page_title = res["query"]["search"][0]["title"]
    
    params2 = {
        "action": "query",
        "titles": page_title,
        "prop": "pageprops|pageimages",
        "piprop": "name",
        "format": "json"
    }
    res2 = requests.get(url, params=params2, headers=HEADERS).json()
    pages = res2["query"]["pages"]
    page = list(pages.values())[0]
    
    file_title = None
    if "pageimage" in page:
        file_title = "File:" + page["pageimage"]
    else:
        if "pageprops" in page and "wikibase_item" in page["pageprops"]:
            wb_id = page["pageprops"]["wikibase_item"]
            params3 = {
                "action": "wbgetentities",
                "ids": wb_id,
                "props": "claims",
                "format": "json"
            }
            res3 = requests.get("https://www.wikidata.org/w/api.php", params=params3, headers=HEADERS).json()
            claims = res3["entities"][wb_id].get("claims", {})
            if "P18" in claims:
                filename = claims["P18"][0]["mainsnak"]["datavalue"]["value"]
                file_title = "File:" + filename
                
    if file_title:
        params4 = {
            "action": "query",
            "titles": file_title,
            "prop": "imageinfo",
            "iiprop": "url|extmetadata",
            "format": "json"
        }
        res4 = requests.get("https://commons.wikimedia.org/w/api.php", params=params4, headers=HEADERS).json()
        pages4 = res4["query"]["pages"]
        page4 = list(pages4.values())[0]
        if "imageinfo" in page4:
            info = page4["imageinfo"][0]
            descUrl = info.get("descriptionurl", "")
            url = info.get("url", "")
            ext = info.get("extmetadata", {})
            artist = ext.get("Artist", {}).get("value", "Unknown")
            artist = re.sub('<[^<]+>', '', artist) # strip HTML
            license = ext.get("LicenseShortName", {}).get("value", "Unknown")
            attr = f"{artist}, {license}, via Wikimedia Commons"
            return {"url": url, "attr": attr, "link": descUrl}
    return None

def resize_and_save_image(img_data, save_path):
    try:
        img = Image.open(BytesIO(img_data))
        if img.mode != 'RGB':
            img = img.convert('RGB')
        # Resize if width > MAX_WIDTH
        if img.width > MAX_WIDTH:
            ratio = MAX_WIDTH / img.width
            new_height = int(img.height * ratio)
            img = img.resize((MAX_WIDTH, new_height), Image.Resampling.LANCZOS)
            img.save(save_path, "JPEG", quality=85)
            return True, "resized"
        else:
            img.save(save_path, "JPEG", quality=85)
            return True, "saved"
    except Exception as e:
        print(f"Error saving image: {e}")
        return False, str(e)

def process_existing_images():
    print("Shrinking existing images...")
    processed = 0
    for filename in os.listdir(IMG_DIR):
        if filename.lower().endswith(('.jpg', '.jpeg', '.png')):
            filepath = os.path.join(IMG_DIR, filename)
            # check size BEFORE opening
            if os.path.getsize(filepath) < 500 * 1024:
                # If less than 500KB, likely fine, but let's check width just in case
                pass
            
            try:
                img = Image.open(filepath)
                if img.width > MAX_WIDTH:
                    print(f"  Shrinking {filename} (width: {img.width}px)")
                    if img.mode != 'RGB':
                        img = img.convert('RGB')
                    ratio = MAX_WIDTH / img.width
                    new_height = int(img.height * ratio)
                    img = img.resize((MAX_WIDTH, new_height), Image.Resampling.LANCZOS)
                    # For existing files, if it's .png, resave it over the original or as .jpg? 
                    # Let's keep original filename but save as JPEG data if it's .jpg
                    if filename.lower().endswith(('.jpg', '.jpeg')):
                        img.save(filepath, "JPEG", quality=85)
                    else:
                        new_filepath = os.path.splitext(filepath)[0] + ".jpg"
                        img.save(new_filepath, "JPEG", quality=85)
                        os.remove(filepath)
                    processed += 1
            except Exception as e:
                print(f"  Failed on {filename}: {e}")
    print(f"Processed {processed} existing images.")

def main():
    if not os.path.exists(IMG_DIR):
        os.makedirs(IMG_DIR)
        
    process_existing_images()
    
    stadiums = parse_stadiums()
    print(f"Loaded {len(stadiums)} stadiums.")
    
    # Read existing credits file to preserve / see what's there
    with open(CREDITS_FILE, "r", encoding="utf-8") as f:
        credits_content = f.read()
    
    new_credits = []
    
    for s in stadiums:
        s_id = s["id"]
        # Check if {id}.jpg or {id}.jpeg exists
        if os.path.exists(os.path.join(IMG_DIR, f"{s_id}.jpg")) or os.path.exists(os.path.join(IMG_DIR, f"{s_id}.jpeg")):
            # Already exists
            continue
            
        print(f"Fetching image for ID {s_id}: {s['name']} ({s['team']})")
        info = get_wikimedia_file(s["name"], s["team"])
        if info:
            print(f"  Found: {info['url']}")
            # Download image
            try:
                img_res = requests.get(info["url"], headers=HEADERS, timeout=15)
                if img_res.status_code == 200:
                    save_path = os.path.join(IMG_DIR, f"{s_id}.jpg")
                    success, msg = resize_and_save_image(img_res.content, save_path)
                    if success:
                        print(f"  -> Saved to {s_id}.jpg ({msg})")
                        # Add to new_credits
                        credit_str = f'  {s_id}: {{\n    text: "{info["attr"]}",\n    link: "{info["link"]}"\n  }},'
                        new_credits.append(credit_str)
                    else:
                        print(f"  -> Failed to save: {msg}")
            except Exception as e:
                print(f"  -> Failed downloading: {e}")
        else:
            print("  -> Could not find image info.")
            
    if new_credits:
        # We need to append these newly generated credits to the ts file
        print(f"Adding {len(new_credits)} new credits...")
        
        # We look for the ending "};" and insert before it
        if "};" in credits_content:
            idx = credits_content.rfind("};")
            updated = credits_content[:idx] + "\n".join(new_credits) + "\n" + credits_content[idx:]
            with open(CREDITS_FILE, "w", encoding="utf-8") as f:
                f.write(updated)
            print("Credits file updated.")
        else:
            print("Could not find ending of IMAGE_CREDITS in file.")

if __name__ == "__main__":
    main()
