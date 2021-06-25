
printjson(db.nbd.aggregate([{ $addFields: { bmi: {$multiply: [10000,{$divide: [{ $toDouble: "$weight" }, { $multiply: [{ $toDouble: "$height" }, { $toDouble: "$height" }] }]}]}}},
{$group: { _id: "$nationality", bmi_min: { $min: "$bmi" }, bmi_avg: { $avg: "$bmi" }, bmi_max: { $max: "$bmi" },}}]));
