var mongo = require("mongodb").MongoClient

mongo.connect("mongodb://localhost:27017/learnyoumongo", (err, db) => {
    db.collection("prices").aggregate([
        { $match: { size: process.argv[2] }},
        { $group: { _id: "average", average: { $avg: "$price" }}}
    ]).toArray((err, results) => {
        console.log(results[0]["average"].toFixed(2))
    })
    db.close()
})