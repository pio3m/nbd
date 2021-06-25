printjson(db.nbd.aggregate([
{$unwind:"$credit"},
{$group:{"_id":"$credit.currency", odds:{$sum:{$toDouble: "$credit.balance"}}}}
]))
