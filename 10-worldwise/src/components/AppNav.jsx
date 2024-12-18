import { NavLink } from "react-router-dom";
import styles from "./AppNav.module.css";

function AppNav() {
  return (
    <nav className={styles.nav}>
      <ul>
        <il>
          <NavLink to="cities">Cites</NavLink>
        </il>
        <il>
          <NavLink to="countries">Countries</NavLink>
        </il>
        <il></il>
      </ul>
    </nav>
  );
}

export default AppNav;
