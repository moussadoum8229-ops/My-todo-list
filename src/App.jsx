import { useState, useEffect } from "react";
import { nanoid } from "nanoid"
import Listitem from "./assets/Components/Listitem"
function App() {
  const [todosList, setTodosList] = useState([
    { content: "item1", id: nanoid(2) },
    { content: "item2", id: nanoid(2) },
    { content: "item3", id: nanoid(2) },
    { content: "item4", id: nanoid(2) },
    { content: "item5", id: nanoid(2) },
   
   
  ]);

function deleteTodo(id){
  setTodosList(todosList => todosList.filter(item => item.id !== id))

}


  return (
    <div className=" h-screen bg-slate-900">
      <div className="max-w-4xl mx-auto pt-20 px-6 ">
        <h1 className="text-3xl text-slate-100 mb-4"> la Todo List</h1>
        <form className="mb-10" >
          <label htmlFor="todo-item" className="text-slate-50"> Ajouter une chose a faire</label>
          <input type="text" className="mt-1 bg-white text-black   block w-full rounded" />
          <button className="mt-4 py-2 px-2 bg-slate-50 rounded min-[115px]:">Ajouter</button>
        </form>
        <ul>
          
          {todosList.map(item => (
            <Listitem key={item.id} itemData={item} deleteTodo={deleteTodo}  />
          ) 
          
          )}
          


          
        </ul>
      </div>
    </div>

  )
}


export default App
