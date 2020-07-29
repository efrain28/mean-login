const mongoose = require ('mongoose');
const dbURL = require('./properties').DB;

module.exports = () => 
{
    mongoose.connect(dbURL, {useNewUrlParser: true })
        .then(()=> console.log(`Mongo Connected on ${dbURL}`))
        .catch(err => console.log(`Connection error ${err}`))

    process.on('SIGINT', () =>{
        mongoose.connection.close(() =>{
            console.log(`Mongo is discoonnected `);
            process.exit(0);
        });
    });
}