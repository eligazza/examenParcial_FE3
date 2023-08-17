import style from './Card.module.css'

const Card = ({student}) => {
  return (
    <div className={style.card}>
      <h3>¡Cargado con éxito!</h3>
      <p className={style.strong}>Datos del estudiante</p>
      <p>Nombre: {student.name}</p>
      <p>Apellido: {student.lastname}</p>
      <p>Carrera: {student.carreer}</p>
    </div>
  )
}

export default Card