var mapFunction = function () {
    emit(this.job,1);
};

var reduceFunction = function (id, job)
{
	return 1;
};


printjson(
    db.nbd.mapReduce(
        mapFunction,
        reduceFunction,
        {
            out: { inline: 1 },
        })
);