# MongoDB and Mongoose

## Install and Set Up Mongoose
Working on these challenges will involve you writing your code using one of the following methods:

Clone this GitHub repo and complete these challenges locally.
Use our Replit starter project to complete these challenges.
Use a site builder of your choice to complete the project. Be sure to incorporate all the files from our GitHub repo.
If you use Replit, follow these steps to set up the project:

Start by importing the project on Replit.
Next, you will see a .replit window.
Select Use run command and click the Done button.
When you are done, make sure a working demo of your project is hosted somewhere public. Then submit the URL to it in the Solution Link field.

In this challenge, you will set up a MongoDB Atlas database and import the required packages to connect to it.

Follow this tutorial to set up a hosted database on MongoDB Atlas.

mongoose@^5.11.15 has been added to your project’s package.json file. First, require mongoose as mongoose in myApp.js. Next, create a .env file and add a MONGO_URI variable to it. Its value should be your MongoDB Atlas database URI. Be sure to surround the URI with single or double quotes, and remember that you can't use spaces around the = in environment variables. For example, MONGO_URI='VALUE'.

Note: If you are using Replit, you cannot create a .env file. Instead, use the built-in SECRETS tab to add the variable. Do not surround the values with quotes when using the SECRETS tab.

When you are done, connect to the database by calling the connect method within your myApp.js file by using the following syntax:

```mongoose.connect(<Your URI>, { useNewUrlParser: true, useUnifiedTopology: true });```

***

## Create a Model
CRUD Part I - CREATE

First of all, we need a Schema. Each schema maps to a MongoDB collection. It defines the shape of the documents within that collection. Schemas are building blocks for Models. They can be nested to create complex models, but in this case, we'll keep things simple. A model allows you to create instances of your objects, called documents.

Replit is a real server, and in real servers, the interactions with the database happen in handler functions. These functions are executed when some event happens (e.g. someone hits an endpoint on your API). We’ll follow the same approach in these exercises. The done() function is a callback that tells us that we can proceed after completing an asynchronous operation such as inserting, searching, updating, or deleting. It's following the Node convention, and should be called as done(null, data) on success, or done(err) on error.

Warning - When interacting with remote services, errors may occur!

```
const someFunc = function(done) {
  //... do something (risky) ...
  if (error) return done(error);
  done(null, result);
};
```
Create a person schema called personSchema with the following shape:

A required name field of type String
An age field of type Number
A favoriteFoods field of type [String]
Use the Mongoose basic schema types. If you want you can also add more fields, use simple validators like required or unique, and set default values. See our Mongoose article.

Now, create a model from the personSchema and assign it to the existing variable Person.

***

## Create and Save a Record of a Model
In this challenge you will have to create and save a record of a model.

Within the createAndSavePerson function, create a document instance using the Person model constructor you built before. Pass to the constructor an object having the fields name, age, and favoriteFoods. Their types must conform to the ones in the personSchema. Then, call the method document.save() on the returned document instance. Pass to it a callback using the Node convention. This is a common pattern; all the following CRUD methods take a callback function like this as the last argument.

```
// ...
person.save(function(err, data) {
  //   ...do your stuff here...
});
```

***

## Create Many Records with model.create()
Sometimes you need to create many instances of your models, e.g. when seeding a database with initial data. Model.create() takes an array of objects like [{name: 'John', ...}, {...}, ...] as the first argument, and saves them all in the db.

Modify the createManyPeople function to create many people using Model.create() with the argument arrayOfPeople.

Note: You can reuse the model you instantiated in the previous exercise.

***

## Use model.find() to Search Your Database
In its simplest usage, Model.find() accepts a query document (a JSON object) as the first argument, then a callback. It returns an array of matches. It supports an extremely wide range of search options. Read more in the docs.

Modify the findPeopleByName function to find all the people having a given name, using Model.find() -> [Person]

Use the function argument personName as the search key.

***

## Use model.findOne() to Return a Single Matching Document from Your Database
Model.findOne() behaves like Model.find(), but it returns only one document (not an array), even if there are multiple items. It is especially useful when searching by properties that you have declared as unique.

***

## Use model.findById() to Search Your Database By _id
When saving a document, MongoDB automatically adds the field _id, and set it to a unique alphanumeric key. Searching by _id is an extremely frequent operation, so Mongoose provides a dedicated method for it.

Modify the findPersonById to find the only person having a given _id, using Model.findById() -> Person. Use the function argument personId as the search key.


Modify the findOneByFood function to find just one person which has a certain food in the person's favorites, using Model.findOne() -> Person. Use the function argument food as search key.

***

## 
