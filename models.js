/*This file creates the BlogPost model that we export to server.js */

const mongoose = require('mongoose');//require and add es6 promises like server.js
mongoose.Promise = global.Promise;  //make mongoose use ES6 promises

//Below model schema defines how every document in this collection should look
const BlogPostSchema = mongoose.Schema({
  author: {
    firstName: String,
    lastName: String,
  },
  title: {
    type: String, 
    required: true},
  content: {
    type: String,
    required: true},
  created: {
    type: Date,
     default: Date.now}
});

//Using virtuals to create a property on the model
BlogPostSchema.virtual('authorString').get(function() {
  return `${this.author.firstName} ${this.author.lastName}`.trim();
});

//Declare an instance method of serialize which lets me specify how posts are represented from the api
BlogPostSchema.methods.serialize = function() {
  return {
    id: this._id,
    author: this.authorName,
    content: this.content,
    title: this.title,
    created: this.created
  };
};

//Now create the new mongoose model BlogPost that uses BlogPostSchema that is defined above
//The model('BlogPost, ) argument determines the collection
const BlogPost = mongoose.model('BlogPost', BlogPostSchema);

module.exports = { BlogPost };
