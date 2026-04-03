import requests

def get_wikimedia_file(name, team):
    query = f"{name}"
    url = "https://en.wikipedia.org/w/api.php"
    headers = {"User-Agent": "GridGuessr/1.0 (https://gridguessr.com) python-requests/2.x"}
    params = {
        "action": "query",
        "list": "search",
        "srsearch": query,
        "format": "json",
    }
    res = requests.get(url, params=params, headers=headers).json()
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
    res2 = requests.get(url, params=params2, headers=headers).json()
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
            res3 = requests.get("https://www.wikidata.org/w/api.php", params=params3, headers=headers).json()
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
        res4 = requests.get("https://commons.wikimedia.org/w/api.php", params=params4, headers=headers).json()
        pages4 = res4["query"]["pages"]
        page4 = list(pages4.values())[0]
        if "imageinfo" in page4:
            info = page4["imageinfo"][0]
            descUrl = info.get("descriptionurl", "")
            url = info.get("url", "")
            ext = info.get("extmetadata", {})
            artist = ext.get("Artist", {}).get("value", "Unknown")
            import re
            artist = re.sub('<[^<]+>', '', artist)
            license = ext.get("LicenseShortName", {}).get("value", "Unknown")
            attr = f"{artist}, {license}, via Wikimedia Commons"
            return {"url": url, "attr": attr, "link": descUrl}
    return None

print(get_wikimedia_file("NRG Stadium", ""))
print(get_wikimedia_file("Memorial Stadium", "Illinois"))
print(get_wikimedia_file("Ohio Stadium", ""))
