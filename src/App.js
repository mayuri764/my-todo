import React,{useState} from 'react'
import TodoList from './TodoList';


const App = () => {
  const [task,setTask] = useState("");
  const [todos,setTodos] = useState([]);

  const changeHandler = e =>{
    setTask(e.target.value)
  }
  const submitHandler = e =>{
    e.preventDefault();
    const newTodos = [...todos,task];
    setTodos(newTodos);
    setTask("");
  }
  const deleteHandler = (indexValue) =>{
    const newTodos = todos.filter((todo,index) => index !== indexValue);
    setTodos(newTodos);
  }
  return (
    <div>
      <center>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">MYTODO</h5>
            <table border-radius="12px 12px" bgcolor='lavender'>
            <td>
            <form onSubmit={submitHandler}>
              <input size="30" type="text" name="task" value={task} onChange={changeHandler} /> &nbsp;&nbsp;
              <button >add</button>
            </form></td>
           <tr align="center"> <TodoList todolist={todos} deleteHandler={deleteHandler}/></tr> 
            
            </table>
            
           
          </div>
        </div>
      </center>
    </div>
  )
}

export default App