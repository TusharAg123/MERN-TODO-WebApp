import mongoose from 'mongoose';
import {TodoSchema} from './todoModel';

const Todo = mongoose.model('Todo', TodoSchema);

export const addNewTodo = (req, res) => {
    let newTodo = new Todo(req.body);

    newTodo.save((err, Todo) => {
        if (err) {
            res.end(err);
        }
        res.json(Todo);
    });
}; 

export const getTodo = (req, res) => {

    Todo.find({}, (err, Todo) => {
        if (err) {
            res.end(err);
        }
        res.json(Todo);
    });
}; 

export const getTodoWithID = (req, res) => {

    Todo.findById(req.params.TodoID, (err, Todo) => {
        if (err) {
            res.end(err);
        }
        res.json(Todo);
    });
}; 

export const updateStar = (req, res) => {
 
    Todo.findById({ _id: req.params.TodoID }, (err, todo) => {
        
            todo.starred = !todo.starred;
    
            todo.save().then(todo => {
                res.json(todo.starred);
            })
    });
}

export const updateTodo = (req, res) => {

    const editName = req.body.editName;
    const editTodoItem = req.body.editTodoItem;

    Todo.findByIdAndUpdate({ _id: req.params.TodoID }, req.body, {new: true}, (err, todo) => {

        if (!todo)
            res.status(404).send('Data not found');
        else
            todo.name = editName;
            todo.todoItem = editTodoItem;

            todo.save().then(todo => {
                res.json('Todo Updated');
            })
            .catch(res => {
                res.status(400).send("Update not possible");
            });
    });
}; 

export const deleteTodo = (req, res) => {

    Todo.findByIdAndDelete({ _id: req.params.TodoID }, (err, Todo) => {
        if (err) {
            res.end(err);
        }
        res.json({ message: 'Successfully deleted todo' });
    });
}; 