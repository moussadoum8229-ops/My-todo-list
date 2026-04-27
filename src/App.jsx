import React from 'react'
import { useState } from 'react'
import { nanoid } from 'nanoid'
import Listitem from './assets/Components/Listitem'


export default function App() {
const [inputValue, setInputValue] = useState("")

  const [todos, setTodos] = useState([
{ content : "item 1", id : nanoid()},
{ content : "item 2", id : nanoid()},
{ content : "item 3", id : nanoid()},
{ content : "item 4", id : nanoid()}, ])

{/*1. Fontion pour supprimer un item de la liste */}

function deleteItem(id){
  setTodos(todos.filter((item) => item.id !== id))
}

{/* Fontion pour supprimer un item de la liste */}


{/* 2. Fontion pour ajouter un item à la liste */}

const handleSubmit = (e) => {
  e.preventDefault()
  setTodos([...todos, {id : nanoid(), content : inputValue}])
  setInputValue("")



}
{/* Fontion pour ajouter un item à la liste */}



  return (
    <div className='h-screen w-screen bg-slate-900 '>
      <div className='max-w-4xl mx-auto pt-20 px-6'>
        <h1 className='text-3xl text-slate-100'>La to-do liste</h1>


        <form onSubmit={handleSubmit} className='mb-10' >
          <label htmlFor="todo-item" className='text-slate-50'>Ajouter une chose a faire</label>

          <input type="text" onChange={e => setInputValue(e.target.value)} value={inputValue} className='mt-1 bg-white block w-full rounded' placeholder='Ajouter un item' />

          <button  className='bg-white rounded mt-4 py-2 px-2 min-w-28.75'> Ajouter</button>

          <ul className='p-0 mt-10'>
            {todos.length === 0 ? <p className='text-red-500'>Aucun item dans la liste</p> : <p className='text-green-500'>Voici les elements de la liste</p>}
           
            { todos.length > 0 && todos.map((item) => (
              < Listitem key={item.id} itemData={item} deleteItem={deleteItem} />
            ))}
          </ul>
          

        </form>

      </div>
    </div>
  )
}
