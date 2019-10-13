import React from "react";
import  Link from "next/link";

const Home = () => {
    return (
        <div>
            <p> Index Page</p>
            <Link href="/sell">
            <a>Sell Page</a>
            </Link>
        </div>
    );
}

export default Home;