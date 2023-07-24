import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";

const Nabar = () => {
    const { user, logOut } = useContext(AuthContext)

    const navItems = (
        <>
            <li><NavLink to="/" exact="true"
                className="text-body-color hover:text-success  inline-block font-bold leading-loose">Home</NavLink></li>
            <li><NavLink to="/Colleges" exact="true"
                className="text-body-color hover:text-success  inline-block  leading-loose">Colleges</NavLink></li>
            <li><NavLink to="/admission" exact="true"
                className="text-body-color hover:text-success  inline-block  leading-loose">Admission</NavLink></li>
            <li><NavLink to="/Mycollege" exact="true"
                className="text-body-color hover:text-success  inline-block  leading-loose">My college</NavLink></li>
        </>
    );

    const handleLogout = () => {
        logOut()
            .then()
            .catch(error => console.log(error))
    }
    return (
        <div className="navbar  bg-base-100 shadow-sm shadow-primary h-10 z-0">
            <div className="navbar-start ">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact  dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 z-10">
                        {navItems}
                    </ul>
                </div>

                <div className='ml-5'><img className='w-16' src="" alt="" /></div>
                <div><a className='text-body-color cursor-pointer mb-2 text-2xl inline-block font-bold leading-loose'
                >BookHub<span className='text-4xl text-green-500'>.</span></a></div>

            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal items-center px-1">
                    {navItems}
                </ul>
            </div>

            <div className="md:mx-10 ml-auto mr-1">


                {user ? (
                    <>
                        {user?.photoURL && (
                            <>
                                <Link><h1 className="w-24 font-bold cursor-pointer hidden lg:flex ">{user?.displayName}</h1></Link>
                                {/* <img title={user?.displayName}
                                    className="h-12 w-12 rounded-full border-2 border-primary"
                                    src={user?.photoURL}
                                /> */}
                            </>
                        )}
                        <button onClick={handleLogout} className="ml-3 md:ml-5 btn btn-primary text-white md:text-md text-xs">
                            Logout
                        </button>
                    </>
                ) : (
                    <Link to="/login">
                        <button className="btn btn-primary text-white">Login</button>
                    </Link>
                )}


            </div>
        </div>
    );
};

export default Nabar;