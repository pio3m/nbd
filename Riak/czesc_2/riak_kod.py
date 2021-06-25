import json
import requests

url = "http://localhost:8098/buckets/python/keys/docs";
doc_1 = { "name":"one", "import": 1};

respons = requests.put(url, doc_1);

respons.text;

get_respons = requests.get(url);
get_respons.text;

# modyfikacja
doc_2 = { "name":"one", "import": 0}
requests.put(url, doc_2);

mod_respons = requests.get(url);
mod_respons.text;

# usuniecie 
requests.delete(url);

del_respons = requests.get(url);
del_respons.text;
print(del_respons);