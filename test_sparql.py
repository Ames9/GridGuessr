import requests
def get_image_by_coords(lat, lng):
    query = f"""
    SELECT ?itemLabel ?image WHERE {{
      SERVICE wikibase:around {{
        ?item wdt:P625 ?location.
        bd:serviceParam wikibase:center "Point({lng} {lat})"^^geo:wktLiteral.
        bd:serviceParam wikibase:radius "1". 
      }}
      ?item wdt:P18 ?image.
      SERVICE wikibase:label {{ bd:serviceParam wikibase:language "en". }}
    }}
    LIMIT 1
    """
    url = "https://query.wikidata.org/sparql"
    res = requests.get(url, params={"query": query, "format": "json"}, headers={"User-Agent": "GridGuessr/1.0"}).json()
    results = res["results"]["bindings"]
    if results:
        img_url = results[0]["image"]["value"]
        title = results[0]["itemLabel"]["value"]
        return {"title": title, "image": img_url}
    return None

print(get_image_by_coords(40.09931, -88.23599)) # Memorial Stadium (IL)
