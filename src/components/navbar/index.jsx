import React, { useState } from 'react'
import "./styles.css"
const Navbar = () => {
    const [list1, setList1] = useState([])
    const [list2, setList2] = useState([])


    return (
        <div className='nav-main-cont'>
            <div className='nav-logo-cont'>
                <h1>Logo</h1>
            </div>
            <div className='nav-list-cont'>
                <ul className='nav-u-list'>
                    <li>Home</li>
                    <li>Projects</li>
                    <li>Report</li>
                </ul>
            </div>
            <div className='nav-logout-cont'>
                <h1>Logout</h1>
            </div>
            <div>

            </div>
        </div>
    )
}

export default Navbar