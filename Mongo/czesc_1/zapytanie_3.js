printjson(
db.nbd.find({"nationality": "Germany"}, {"sex":"Male"}).projection()
.toArray());
