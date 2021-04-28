import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const TodoSchema = new Schema({
    name: {
        type: String,
        required: true
    },

    todoItem: {
        type: String,
        required: true
    },
    
    date: {
        type: Date,
        default: Date.now
    },

    starred: {
        type: Boolean,
        default: false
    }
});