import React, { useState } from 'react';
import AddTasks from '../AddTasks';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const handleModal = () => {
        setIsOpen(true)
    }
    return (
        <div>
        <AddTasks isOpen={isOpen} setIsOpen={setIsOpen}/>
            <div className="navbar bg-slate-300">
                <div className="flex-1">
                    <Link to={'/'} className="btn btn-ghost normal-case text-xl">ChainTech Network</Link>
                </div>
                <div className="flex-none gap-4">
                    <div>
                        <button onClick={handleModal} className='btn bg-base-200'>Add Tasks
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>

                        </button>
                    </div>
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;