import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {

    super(props);
    this.state = { 
        todos: []
     }
}

componentDidMount() {
    this.getAll();
}

getAll = () => {
    axios.get('http://localhost:4000/todo')

        .then((res) => {

            let star, unstar;

            for (let i = 0; i < res.data.length; i++) {
                star = res.data.filter(t => t.starred === true);
                unstar = res.data.filter(t => t.starred === false);
            }

            let final = [...star, ...unstar];

            this.setState({
                todos: final
            })
        })

        .catch((error) => {
            console.log(error)
        })
}

todoSubmit(e) {
    e.preventDefault();

    axios.post('http://localhost:4000/todo', {
        name: this.refs.name.value,
        todoItem: this.refs.todoItem.value,
    })

    .then((res) => {
        this.getAll();
        console.log(res);
    })

    .catch((error) => {
        this.getAll();
        console.log(error);
    })
}

todoDelete(id, e) {
    e.preventDefault();

    axios.delete(`http://localhost:4000/todo/${id}`)
      
    .then(res => {
        console.log(res.data);
        this.getAll();
    })

    .catch((error) => {
        console.log(error);
        this.getAll();
    })
}

todoEdit(id, e) {
    e.preventDefault();

    axios.put(`http://localhost:4000/todo/${id}`, {
        editName: this.refs.editName.value,
        editTodoItem: this.refs.editTodoItem.value
    })

    .then((res) => {
        console.log(res);
        this.getAll();
    })

    .catch((error) => {
        console.log(error);
        this.getAll();
    });
}

todoStar(id, e) {
    e.preventDefault();

    axios.post(`http://localhost:4000/todo/${id}/toggleStar`,{
        starred: this.state.starred
    })

    .then((res) => {
        console.log(res);
        this.getAll();
    })

    .catch((error) => {
        console.log(error);
        this.getAll();
    });
}

render() { 
    return ( 
        <div className="container">
            <h1 className="center card-panel teal lighten-2">ToDo Web App</h1>
            <div className="col s12 m4">
                <div className="row">
                    <form className="col s12" onSubmit={this.todoSubmit.bind(this)}>
                        <div className="row">
                        <div className="input-field col s6">
                            <input id="name" ref="name" type="text"/>
                            <label htmlFor="name">Name</label>
                        </div>
                        </div>
                        <div className="row">
                        <div className="input-field col s12">
                            <input id="todoItem" ref="todoItem" type="text"/>
                            <label htmlFor="todoItem">Add New Todo</label>
                        </div>
                        </div>
                        <button className="btn-floating material-icons btn-danger" type="submit" name="action">+</button>
                    </form>
                </div>
            </div>
            <div className="col s3">
                <ul className="collection with-header">
                    <li className="collection-header"><h5>Todos</h5></li>

                    {this.state.todos.map((item) => (

                        <div className="collection-item" key={item._id}>
                            Name: {item.name} <br/> 
                            Todo: {item.todoItem} <br/> 
                            Date: {new Date(item.date).toLocaleDateString()} <br/>

                            <button className="btn-floating material-icons btn-danger" onClick={(e) => this.todoDelete(item._id, e)}>delete</button> &nbsp;
                            <button className="btn-floating  material-icons btn-danger" onClick={(e) => this.todoStar(item._id, e)}>{item.starred ? 'star' : 'star_border'}</button> <br/>

                                <div className="input-field">
                                    <input id="editName" ref="editName" type="text"/>
                                    <label htmlFor="editName">Edit Name</label>
                                </div>
                                
                                <div className="input-field">
                                    <input id="editTodoItem" ref="editTodoItem" type="text"/>
                                    <label htmlFor="editTodoItem">Edit Todo</label>
                                </div>
                                
                            <button className="btn-floating material-icons btn-danger right" onClick={(e) => this.todoEdit(item._id, e)}>edit</button> 
                            <br/>
                            <br/>
                        </div>
                    ))}
                </ul>
            </div>
        </div>
     );
  }
}

export default App;
