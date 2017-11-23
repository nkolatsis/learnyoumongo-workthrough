var mongo = require("mongodb").MongoClient

mongo.connect("mongodb://localhost:27017/" + process.argv[2], (err, db) => {
    if (err) raise: err
    db.collection("users").update({
            username: "tinatime"
        }, {
            $set: {age: 40}
        }, (err, data) => {})
    db.close()
})