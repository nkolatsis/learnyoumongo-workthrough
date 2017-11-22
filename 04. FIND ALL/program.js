var mongo = require("mongodb").MongoClient

mongo.connect("mongodb://localhost:27017/learnyoumongo", (err, db) => {
    db.collection("parrots")
        .find(
            {age: {$gt: parseInt(process.argv[2])}}, 
            {name: 1, age: 1, _id: 0})
        .toArray((err, documents) => {
            console.log(documents)
        })
    db.close()
})