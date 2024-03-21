import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo } from '../REDUX/store';

const TodoList = () => {
    const [count, setCount] = useState(0)
    const dispatch = useDispatch();
    const todos = useSelector(state => state.todos);


    const handleAddTodo = () => {
        const todo = prompt('Enter new todo:');
        if (todo) {
            dispatch(addTodo({ id: Date.now(), text: todo }));
        }
    };

    const handleDeleteTodo = id => {
        dispatch(deleteTodo(id));
    };
    const handleCheckboxChange = (event) => {
        if (event.target.checked) {
            setCount(count => count + 1);
        } else {
            setCount(count => count - 1);
        }
    };

    return (
        <div>
            <div className='mt-5 text-center'>
                <h2 className='text-warning'>My Todo List</h2>
                <button onClick={handleAddTodo} className='btn btn-info mt-2'>Add Todo<i className="fa-solid fa-plus ms-2" /></button>
            </div>
            <div className='container mt-5 d-flex justify-content-between'>

                <div className='container'>
                    <table className='table table-striped p-2 border'>
                        <tbody>
                            {todos.map(todo => (
                                <tr key={todo.id}>
                                    <td><input type="checkbox" onChange={handleCheckboxChange} /></td>
                                    <td>{todo.text}</td>
                                    <td><button onClick={() => handleDeleteTodo(todo.id)} className='btn'> <i className="fa-solid fa-trash text-danger"></i></button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <h4 className='text-danger'>Total Completed Items: {count}</h4>
                </div>

            </div>
        </div>
    );
};

export default TodoList;