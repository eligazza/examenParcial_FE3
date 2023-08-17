import { useState } from 'react'
import './App.css'
import Card from './Components/Card'


function App() {

  // Creo un estado con un objeto que guardará los datos
  const [student, setStudent] = useState({
    name: '',
    lastname: '',
    carreer: ''
  })

  //Capturo los datos del formulario y los cargo en el objeto anterior (sin espacios)
  const handleName = (e) => {setStudent({...student, name: e.target.value.trim()})}
  const handleLastname = (e) => {setStudent({...student, lastname:e.target.value.trim()})}
  const handleCarreer = (e) => {setStudent({...student, carreer: e.target.value.trim()})}

  // creo las flags para el mensaje de error o de confirmación
  const [error, setError] = useState(false)
  const [success, setSuccess] = useState(false)
  
  //valido el envío
  const handleSubmit = (e) => {
    e.preventDefault();
    if (student.name.length < 3 || student.lastname.length < 6 || student.carreer.length < 3) {
      setError(true);
      setSuccess(false)
    }
    else {
      setError(false)
      setSuccess(true)
    }
  }

  return (
    <div className='container'>
      
      <h2>Carga de estudiantes</h2>
      
      <form onSubmit={handleSubmit} className='form'>
        <label>Nombre</label>
        <input type="text" name='name' value={student.name} onChange={handleName}/>
        <label>Apellido</label>
        <input type="text" name='lastname' value={student.lastname} onChange={handleLastname}/>
        <label>Carrera</label>
        <input type="text" name='carreer' value={student.carreer} onChange={handleCarreer}/>
        <button>Agregar</button>
      </form>
      
      {error && <p className='error'>Por favor chequea que la información sea correcta</p>}
      {success && <Card student={student}/>}
    
    </div>
  )
}

export default App
