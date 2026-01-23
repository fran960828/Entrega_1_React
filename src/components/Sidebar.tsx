import { NavLink } from "react-router-dom";
import classes from './sidebar.module.css'


export default function Sidebar(){
const exercises = Array.from({ length: 9 }, (_, i) => i + 1)
    return (
      <nav className={classes.sidebar}>
        <div className={classes.logo}>
          <span className={classes.reactIcon}>⚛</span> React Master
        </div>
        <ul className={classes.menu}>
          {exercises.map((num) => (
            <li key={num}>
              <NavLink 
                to={`/exercise/${num}`} 
                className={({ isActive }) => isActive ? classes.activeLink : classes.link}
              >
                Ejercicio {num}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    
    )
}