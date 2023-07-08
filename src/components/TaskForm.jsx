import {useState, useContext} from 'react'
import {TaskContext} from '../context/TaskContext'

function TaskForm() {

    const [title, setTitle] = useState('');
    const [description, setdescription] = useState('');
    const {createTask} = useContext(TaskContext)

    const handleSubmit = (e) =>{
       e.preventDefault()
        console.log(title, description)
        createTask({
            title,
            description
        });
       setTitle('')
        setdescription('')
    }

    return (
            <div className='max-w-md mx-auto'>
                <form onSubmit={handleSubmit} className='bg-slate-800 p-10 mb-4'>
                    <h1 className='text-2xl font-bold text-white mb-3'>Crea tu tarea</h1>
                    <input className='bg-slate-300 p-3 w-full mb-2' type="text"
                           onChange={(e) =>setTitle(e.target.value)}
                           placeholder="escribe tu tarea" value={title} autoFocus />

                    <textarea className='bg-slate-300 p-3 w-full mb-2' name=""  value={description} cols="30" rows="10" placeholder='Escribe la descripcion de la tarea'
                              onChange={(e) => setdescription(e.target.value)}></textarea>
                    <button className='bg-indigo-500 p-10'>GUARDAR</button>
                </form>
            </div>
    )
}

export default TaskForm