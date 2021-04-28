import express from 'express';
import mongoose from 'mongoose';
import bodyparser from 'body-parser';
import cors from 'cors';
import routes from './todoRoute';

const app = express();
const PORT = 4000;

// mongo connection

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/todo', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// body-parser setup

app.use(bodyparser.urlencoded({ extended: true}));
app.use(bodyparser.json());

// CORS setup

app.use(cors());

routes(app);

app.get('/', (req, res) => 
res.send(`Todo application is running on port ${PORT}`)
);

app.listen(PORT, () => 
console.log(`Todo application is running on ${PORT}`)
);