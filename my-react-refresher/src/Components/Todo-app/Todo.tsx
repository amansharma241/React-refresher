import { useState } from "react";

export interface Todo {
    id: string;
    title: string;
    isCompleted: boolean;
}

const Todo = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [newTodo, setNewTodo] = useState('');
    const [editingID,setEditingID] = useState<String | null>(null);
    const [editedTitle,setEditedTitle] = useState('');

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
    const handleEdit = (todo:Todo) => {
        setEditingID(todo.id);
        setEditedTitle(todo.title);
    }
    const handleSaveEdit = (id:string) => {

        if(!editedTitle.trim()) return;
        setTodos(prev => prev.map((todo)=> todo.id===id ? {...todo, title:editedTitle.trim()} : todo));
        setEditingID(null);
        setEditedTitle('');
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
                        {todo.id===editingID ? (
                            <>
                            <input type="text" value={editedTitle} onChange={e=>setEditedTitle(e.target.value)}/>
                            <button onClick={()=> handleSaveEdit(todo.id)}>Save</button>
                            <button onClick={()=>setEditingID(null)}>Cancel</button>
                            </>
                        ) : (
                           <>
                           {todo.title}
                           <button onClick={()=>handleEdit(todo)}>Edit</button>
                           </>
                            

                        )}
                        
                        <button onClick={()=>handleDelete(todo.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Todo