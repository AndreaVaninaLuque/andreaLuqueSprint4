import './style.css'
import image from '../../assets/icon_rosa_fondo_rosaclaro.jpg'
import { Link } from 'react-router-dom'

function Header({title, description}) {
    return(<>
        <header>
        <nav>
            <div className="fav-icon">
                <Link to={ "/" }>
                
                    <img src={image} alt="Company logo" height="80em "/>
                </Link>
            </div>
            <ul>
                <li>
                    
                    <button><Link to={"/"} role='titulo' >Home {title}</Link></button>
                    <p> {description} </p>
                    
                </li>
                <li>
                    <button><Link to={"/upcoming"}>Upcoming Events</Link></button>
                </li>
                <li>
                    <button><Link to={"/past"}>Past Events</Link></button>
                </li>
                <li>
                    <button><Link to={"/contact"}>Contact</Link></button>
                </li>
                <li>
                    <button><Link to={"/stats"}>Stats</Link></button>
                </li>
            </ul>
        </nav>
    </header>
    </>
    )
}

export default Header;