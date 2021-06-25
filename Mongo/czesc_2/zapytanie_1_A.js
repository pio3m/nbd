printjson(db.nbd.aggregate([
{$group:{"_id":"$sex", avg_weight:{$avg:{$toDouble: "$weight"}},avg_height:{$avg:{$toDouble: "$height"}}}}
]))
