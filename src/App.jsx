import React, { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')

  const [task, setTask] = useState([])

  const submitHandeler = (e) =>{
    e.preventDefault()

    const copyTask = [...task]

    copyTask.push({title,details})

    setTask(copyTask)

    setTitle('')
    setDetails('')
  }

  const deleteTask = (idx) => {
    const copyTask = [...task]

    copyTask.splice(idx,1)

    setTask(copyTask)
  }

  return (
    <div className='bg-black h-screen text-white lg:flex'>

      <form 
        onSubmit={(e)=>{
        submitHandeler(e)
        }}
        className='flex items-start lg:w-1/2 gap-10 p-10 flex-col'
        >

          <h1 className='text-4xl font-bold'>Add Notes</h1>

          <input 
          type="text" 
          placeholder='Enter Notes Heading'
          className='h-10 bg-gray-800 border-2 font-medium rounded border-box px-4 py-2 outline-0 w-full'
          value={title}
          onChange={(e)=>{
            setTitle(e.target.value)
          }}
        />
        <textarea 
          placeholder='Write Details' 
          className='h-50 bg-gray-800 border-2 font-medium rounded px-4 py-2 outline-0 w-full'
          value={details}
          onChange={(e)=>{
            setDetails(e.target.value)
          }}
        >
        </textarea>
        
        <button className='h-10 bg-white text-black active:scale-95 font-medium rounded-xl py-2 w-full'>Add Note</button>
      </form>
      <div className='bg-gray-900 p-10 lg:w-1/2 overflow-auto lg:border-l'>
        <h1 className='text-4xl font-bold mb-9'>Recent Notes</h1>
        <div className='flex items-start gap-4 flex-wrap h-full overflow-auto mt-5'>
          {task.map(function(elem,idx){

            return <div key={idx} className='flex flex-col justify-between items-start rounded-2xl bg-cover h-60 w-45 text-black p-4 bg-[url("data:image/jpeg;base64,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")]'>
              <div>
                <h3 className='text-xl font-bold leading-tight'>{elem.title}</h3>
                <p className='leading-tight font-medium text-neutral-700'>{elem.details}</p>
              </div>
              <div className='flex flex-col-reverse justify-center mb-3 pl-1'>
                <button onClick={(idx)=>{
                  deleteTask(idx)
                }} className='w-35 bg-red-600 rounded active:scale-95 text-xs text-white font-bold absolute py-1 px-2 '>Delete</button>
              </div>
            </div>
          })}  
        </div>
      </div>
    </div>
  )
}

export default App
