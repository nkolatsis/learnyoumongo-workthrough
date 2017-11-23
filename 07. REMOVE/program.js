var mongo = require("mongodb").MongoClient

mongo.connect("mongodb://localhost:27017/" + process.argv[2], (err, db) => {
    db.collection(process.argv[3])
        .remove({
            _id: process.argv[4]
        }, (err, data) => {})
    db.close()
})