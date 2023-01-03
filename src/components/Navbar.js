import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const items = useSelector((state) => state.cart);
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
            <div className="container-fluid">
                <Link className="navbar-brand mx-4" to="/"><h3> <b>Add To Cart</b></h3></Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>
            <div className="collapse navbar-collapse" id="navbarNav">
                <div>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/"><h4>Home</h4></Link>
                        </li>
                        <li className="nav-item mx-4  position-relative">
                            <Link className="nav-link" to="/cart"><i className="fas fa-cart-plus fa-2x"></i>
                                <span className="position-absolute top-1 start-100 translate-middle badge rounded-pill bg-danger">
                                    {items.length}
                                    <span className="visually-hidden">unread messages</span>
                                </span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
