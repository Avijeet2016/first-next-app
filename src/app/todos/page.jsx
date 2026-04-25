import React, { Suspense } from 'react';


const TodosPage = async () => {
    const todos = await fetch(
      "https://jsonplaceholder.typicode.com/todos",
    ).then(res => res.json()); 
    console.log('todos promise', todos);
    return (
        <div>
            <h2>Todos Length: {todos.length}</h2>
        </div>
    );
    
};

export default TodosPage;