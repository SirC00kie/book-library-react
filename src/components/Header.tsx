import './Header.css'
import {Navbar} from "./Navbar";

export const Header = () => {
  return(
      <header className="page-header">
          <h1>Book Library</h1>
          <Navbar/>
      </header>
  )
}