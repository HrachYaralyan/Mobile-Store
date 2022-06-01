import React from "react";

import './foot.css'

export default function Foot() {
    return (
        <>
            <div className="container-fluid navbar-dark bg-dark ">
                <footer className="" >
                    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                        <li className="nav-item"><a href="#" className="nav-link px-2  w">Home</a></li>
                        <li className="nav-item"><a href="#" className="nav-link px-2 w ">Features</a></li>
                        <li className="nav-item"><a href="#" className="nav-link px-2 w">Pricing</a></li>
                        <li className="nav-item"><a href="#" className="nav-link px-2 w">FAQs</a></li>
                        <li className="nav-item"><a href="#" className="nav-link px-2 w">About</a></li>
                    </ul>
                    <p className="text-center w">© 2021 Company, Inc</p>
                </footer>
            </div>
        </>
    )
}