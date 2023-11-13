import './style.css'

function Footer() {
    return (
        <footer>
            <div className="left">
                <nav>
                    <ul>
                        <li>
                            <a href="https://www.instagram.com/" target="_blank">
                                <i className="fa-brands fa-instagram fa-xl"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com/" target="_blank">
                                <i className="fa-brands fa-square-facebook fa-xl"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://web.whatsapp.com/" target="_blank">
                                <i className="fa-brands fa-square-whatsapp fa-xl"></i>
                            </a>
                        </li>
                    </ul>
                </nav>
                <div className="right">
                    <p>All rights reserved 2023 - Amazing Events - &copy;</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;