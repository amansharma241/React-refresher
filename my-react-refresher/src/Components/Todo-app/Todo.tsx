import { useState } from "react";

export interface Todo {
    id: string;
    title: string;
    isCompleted: boolean;
}

const Todo = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [newTodo, setNewTodo] = useState('');
    const handleAddNewTodo = () => {
        if (!newTodo.trim()) alert('Please add a todo!');
        const newItem: Todo = {
            id: Math.random() + '',
            title: newTodo.trim(),
            isCompleted: false
        }
        setTodos(prev => [...prev, newItem]);
        setNewTodo('')
    }
    const handleComplete = (id:string) => {
        setTodos(prev => prev.map((todo)=>todo.id===id ? {...todo,isCompleted:!todo.isCompleted} : todo))
    }
    const handleDelete = (id:string) => {
        setTodos(prev=>prev.filter((todo)=>todo.id!== id))
    }

    return (
        <>
            <div>Todo</div>
            <input
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                placeholder="Add todo"
            />
            <button onClick={handleAddNewTodo}>Add new Todo</button>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        <input
                            type="checkbox"
                            checked={todo.isCompleted}
                            onChange={() => handleComplete(todo.id)}
                        />
                        {todo.title}
                        <button onClick={()=>handleDelete(todo.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Todo