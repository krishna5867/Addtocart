import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const items = useSelector((state) => state.cart);
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark d-flex">
            <div className="container-fluid">
                <div>
                <Link className="navbar-brand" to="/"><b>Store</b></Link>
                </div>
                <div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item mx-5">
                            <Link className="nav-link" to="/cart">Cart ({items.length})</Link>
                        </li>
                        
                    </ul>
                </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
