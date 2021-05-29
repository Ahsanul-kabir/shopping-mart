import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container">
                    <a class="navbar-brand" href="/">Shopping Mart</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/">Features</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/">Pricing</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/login" tabindex="-1" >Login</a>
                            </li>
                            <FontAwesomeIcon className="text-light" icon={faCartPlus} />
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;