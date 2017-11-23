var mongo = require("mongodb").MongoClient

mongo.connect("mongodb://localhost:27017/learnyoumongo", (err, db) => {
    db.collection("parrots").count({
        age: {$gt: parseInt(process.argv[2])}
    }, (err, count) => {
        if (err) raise: err
        console.log(count)
    })
    db.close()
})