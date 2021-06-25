printjson(db.nbd.find({"nationality": "China"}, {"sex":"Female"}).limit(1).toArray());
