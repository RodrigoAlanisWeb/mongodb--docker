const mongoose = require("mongoose");

mongoose.connect('mongodb://database/mydatabase',{
    useUnifiedTopology: true,
    useNewUrlParser: true
})
    .then(db => console.log("Db is conected to", db.connection.host))
    .catch(err => console.log(err));