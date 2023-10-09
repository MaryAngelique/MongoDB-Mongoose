require("dotenv").config();

// Install and Setup Mongoose
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

// Create a Model
const Schema = mongoose.Schema;
const personSchema = new Schema({
    name: { type: String, required: true },
    age: Number,
    favoriteFoods: [ String ],
})

const Person = mongoose.model( "Person", personSchema );

/** **Well Done !!**
/* You completed these challenges, let"s go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;