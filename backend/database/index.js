const mongoose = require('mongoose');
const schema=mongoose.schema;
const ObjectId=mongoose.ObjectId;

mongoose.connect('');

/* let newUser={
    username: username,
    name: req.body.name,
    password: req.body.password,
    profileImg: profilePictures[Math.floor(Math.random()*profilePictures.length)],
    todos: []
}*/

const UserSchema = new schema({
    username: {type: String, unique: true, trim: true},
    name: String,
    password: String,
    profileImg: String
},{timestamps: true});

/*     let newTask= {
    // id: taskId,
    id: receivedPayload.id,
    name: receivedPayload.name,
    description: receivedPayload.description,
    due: receivedPayload.due,
    category: receivedPayload.category,
    completed: receivedPayload.completed || false,
    status: receivedPayload.status || 'pending',
    priority: receivedPayload.priority || 'medium'
}; */

const TodoSchema = new schema({
    name: {type: String, trim: true},
    description: {type: String, trim: true},
    due: Date,
    category: {type: String, trim: true},
    completed: Boolean,
    status: String,
    priority: String,
    userId: ObjectId,
    username: String
});

const User = mongoose.model('Users', UserSchema);
const Todo = mongoose.model('Todos', TodoSchema);

module.exports = {
    User,
    Todo
}