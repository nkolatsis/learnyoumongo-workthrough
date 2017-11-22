var mongo = require("mongodb").MongoClient

var name = {"firstName": process.argv[2], "lastName": process.argv[3]}

mongo.connect("mongodb://localhost:27017/learnyoumongo", (err, db) => {
    db.collection("docs")
        .insertOne(name, (err, data) => {
            if (err) raise: err
            console.log(JSON.stringify(name))
            console.log(typeOf(data))
        })
    db.close()
})