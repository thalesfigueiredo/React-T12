import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <React.Fragment>
            <header>
                <nav className="navbar navbar-expand-lg navbar-light bg-info">
                    <p className="navbar-brand text-white">React TW12</p>
                    
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link text-white" to="/">
                                Home {/* <span class="sr-only">(current)</span> */}
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/postagem/create">
                                Nova Postagem
                            </Link>
                        </li>
                        </ul>
                    </div>
                    </nav>
            </header>
        </React.Fragment>
    );
}