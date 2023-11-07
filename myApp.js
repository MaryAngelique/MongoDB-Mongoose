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

// Use model.find() to Search Your Database
const findPeopleByName = ( personName, done) => {
    Person.find({ name: personName }, ( error, personFound ) => {
        if( error ) return console.log( error );

        done( null, personFound );
    })
}

// Use model.findOne() to Return a Single Matching Document from Your Database
const findOneByFood = ( food, done ) => {
    Person.findOne({ favoriteFoods: food }, ( error, singleFood ) => {
        if( error ) return console.log( error );

        done( null, singleFood );
    })
}

// Use model.findById() to Search Your Database By _id
const findPersonById = ( personId, done ) => {
    Person.findById( personId, ( error, data ) => {
        if( error ) return console.log( error );

        done( null, data );
    })
}

// Perform Classic Updates by Running Find, Edit, then Save
const findEditThenSave = ( personId, done ) => {
    const foodToAdd = "Adobo";

    Person.findById( personId, ( error, person ) => {
        if( error ) return console.log( error );

        person.favoriteFoods.push( foodToAdd );
        person.save( ( error, updatedPerson ) => {
            if( error ) return console.log( error );

            done( null, updatedPerson );
        })
    }) 
}

// Perform New Updates on a Document Using model.findOneAndUpdate()
const findAndUpdate = ( personName, done ) => {
    const ageToSet = 20;

    Person.findOneAndUpdate(
        { name: personName },
        { age: ageToSet },
        { new: true },
        ( error, updateDb ) => {
            if( error ) return console.log( error );
            
            done( null, updateDb)
        }
    )
}

// Delete One Document Using model.findByIdAndRemove
const removeById = ( personId, done ) => {
    Person.findByIdAndRemove( personId, ( error, data ) => {
        if( error ) return console.log( error );

        done( null, data );
    })
}

// Delete Many Documents with model.remove()
const removeManyPeople = ( done ) => {
    const nameToRemove = "Chasity"

    Person.remove({ name: nameToRemove }, ( error, dataToRemove ) => {
        if( error ) return console.log( error );

        done( null, dataToRemove );
    })
}

// Chain Search Query Helpers to Narrow Search Results
const queryChain = ( done ) => {
    const foodToSearch = "Ramen";

    Person.find({ favoriteFoods: foodToSearch})
        .sort( "name" )
        .limit( 2 )
        .select([ "name", "favoriteFoods" ])
        .exec(( error, data ) => {
            if( error ) return console.log( error );

            done( error, data );
    })
} 

// Chain Search Query Helpers to Narrow Search Results
const queryChain = ( done ) => {
    const foodToSearch = "Taki";

    Person.find({ favoriteFoods: foodToSearch })
        .sort("name")
        .limit(2)
        .select([ "name", "favoriteFoods" ])
        .exec(( error, data ) => {
            if( error ) return console.log( error );
            done( error, data );
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