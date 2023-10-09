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

// Create and Save a Record of a Model
const createAndSavePerson = ( done ) => {
    const person = new Person({
        name: "Angelique",
        age: 22,
        favoriteFoods: [ "Taho", "Boba", "Cheesecake"],
    })

    person.save(( error, data ) => {
        if( error ) return console.error( error );

        done( null, data )
    })
}

// Create Many Records with model.create()
const arrayOfPeople = [
    { 
        name: "Wesley",
        age: 13,
        favoriteFoods: [ "Ramen", "Kinder: Bueno", "Takis" ]
    },
    { 
        name: "Kayla",
        age: 18,
        favoriteFoods: [ "Kimchi Fried Rice", "Balut"  ]
    },
    { 
        name: "Chasity",
        age: 22,
        favoriteFoods: [ "Birria Tacos", "Steak", "Queso Quesadilla" ]
    },
]

const createManyPeople = ( arrayOfPeople, done ) => {
    Person.create( arrayOfPeople, ( error, people) => {
        if( error ) return console.log( error );
        
        done( null, people );
    })
}

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