
export interface TodoType {
    title: string; 
    description: string; 
    done: boolean; 
}

interface TodoInput {
    todo: TodoType;
}

function Todo({ todo }: TodoInput) {


    return (
        <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}>
       
            <h1>{todo.title}</h1>
            
            <p>{todo.description}</p>
            
            <p>
                <strong>Status:</strong> {todo.done ? "Completed" : "Pending"}
            </p>
        </div>
    );
}

export default Todo; 