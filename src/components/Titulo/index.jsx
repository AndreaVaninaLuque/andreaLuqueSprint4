import { Children } from 'react';
import './style.css'
import { Link } from 'react-router-dom';

function Titulo({ children, leftLink, rightLink }) {
    return (
      <section className="container">
        <div>
          <Link to={leftLink} aria-label="left-link">
            <i className="fa-solid fa-angle-left fa-beat fa-2xl"></i>
          </Link>
        </div>
  
        <div>
          <h1 className="center">{children}</h1>
        </div>
  
        <div>
          <Link to={rightLink} aria-label="right-link">
            <i className="fa-solid fa-angle-right fa-beat fa-2xl"></i>
          </Link>
        </div>
      </section>
    );
  }

export default Titulo;