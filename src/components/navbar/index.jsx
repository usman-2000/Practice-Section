import React, { useState } from 'react'
import "./styles.css"
const Navbar = () => {
    const [list1, setList1] = useState([{
        id: 1,
        name: "Usman",
        age: 23
    },
    {
        id: 2,
        name: "Sami",
        age: 23
    }, {
        id: 3,
        name: "Waqar",
        age: 23
    },
    {
        id: 4,
        name: "Zain",
        age: 23
    },
    {
        id: 5,
        name: "Khalid",
        age: 23
    }])
    const [list2, setList2] = useState([
        {
            id: 2,
            worked_hours: 20
        },
        {
            id: 3,
            worked_hours: 2
        },

        {
            id: 5,
            worked_hours: 5
        }
    ])

    const [list3, setList3] = useState(null)

    const newArr = []

    // list1.map((d) => {
    //     list2.map((f) => {
    //         if (d.id === f.id) {
    //             newArr.push({ ...d, hours: f.worked_hours })
    //         }
    //     })
    // })

    // setList3(newArr)

    // list1.map((d) => {
    //     const fil = list2.filter((f) => {
    //         f.id == d.id
    //         setList3({ ...d, hours: f.worked_hours })
    //     })

    //     newArr.push(fil)
    // })

    list1.map((d) => {
        for (let i = 0; i < list2.length; i++) {

        }
    })

    console.log(list3, "listed3")




    return (
        <div className='nav-main-cont'>
            {/* <div className='nav-logo-cont'>
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

            </div> */}
            <h1>Hello</h1>
        </div>
    )
}

export default Navbar