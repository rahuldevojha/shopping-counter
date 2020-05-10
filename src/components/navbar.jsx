import React from 'react';

//Stateless Functional Component
const NavBar = ({totalCounters}) =>
{
    return (
        <div>
            <nav className="navbar navbar-light bg-light">
                <h3>
                    You have total {" "}
                    <span 
                        className="badge badge-pill badge-secondary bg-info"
                    > {totalCounters} </span>
                    {" "} items in your cart
                </h3>
            </nav>
        </div>
    );
};


export default NavBar;