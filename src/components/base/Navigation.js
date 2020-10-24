import React from "react";
import logo from "../../images/logo.svg";
import { Link } from "gatsby";

function Navigation() {
    return (
        <header className="w-full fixed bg-white z-10">
            <nav className="w-11/12 md:w-9/12 md:container mx-auto flex justify-between items-center py-4 md:pt-6 ">
                <Link
                    className="hidden md:inline-block text-xl md:text-xl leading-normal hover:text-black"
                    to="/"
                >
                    Home
                </Link>
                <Link
                    className="inline-block text-xl md:text-xl leading-normal hover:text-black"
                    to="/nasa"
                >
                    Nasa
                </Link>
                <Link className="order-first md:order-none" to="/">
                    <img className="w-8 md:w-12 " src={logo} alt="nasa-logo" />
                </Link>
                <Link
                    className="inline-block text-xl md:text-xl leading-normal hover:text-black"
                    to="/spacex"
                >
                    SpaceX
                </Link>
                <Link
                    className="inline-block text-xl md:text-xl leading-normal hover:text-black"
                    to="/photos"
                >
                    Photos
                </Link>
            </nav>
        </header>
    );
}

export default Navigation;
