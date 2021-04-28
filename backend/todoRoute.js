import { addNewTodo, getItem, getTodo, getTodoWithID, updateTodo, deleteTodo, updateStar } from './todoController';

const routes = (app) => {
    app.route('/todo')

    // GET endpoint
    .get(getTodo)

    // POST endpoint
    .post(addNewTodo)

    app.route('/todo/:TodoID')

    // GET specific Todo
    .get(getTodoWithID)

    // Update specific Todo
    .put(updateTodo)

    // DELETE specific Todo
    .delete(deleteTodo)

    app.route('/todo/:TodoID/toggleStar')

    .post(updateStar);

    /*app.post('/todo/:TodoID/toggleStar', (req, res)=>{

    })*/
}

export default routes;