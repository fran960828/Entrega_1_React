import classes from './dashboard.module.css'
import { Outlet } from 'react-router-dom'

export default function Dashboard(){
  return (
      <main className={classes.dashboard}>
        <header className={classes.dashHeader}>
          <h1>Modulo React</h1>
          <p>Primera Entrega</p>
        </header>
        <section className={classes.content}>
          <Outlet /> 
        </section>
      </main>
  )
}


