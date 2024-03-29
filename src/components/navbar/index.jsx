import React, { useEffect, useRef, useState } from 'react'
import "./styles.css"
const Navbar = () => {
    // const [list1, setList1] = useState([{
    //     id: 1,
    //     name: "Usman",
    //     age: 23
    // },
    // {
    //     id: 2,
    //     name: "Sami",
    //     age: 23
    // }, {
    //     id: 3,
    //     name: "Waqar",
    //     age: 23
    // },
    // {
    //     id: 4,
    //     name: "Zain",
    //     age: 23
    // },
    // {
    //     id: 5,
    //     name: "Khalid",
    //     age: 23
    // }])
    // const [list2, setList2] = useState([
    //     {
    //         id: 2,
    //         worked_hours: 20
    //     },
    //     {
    //         id: 3,
    //         worked_hours: 2
    //     },

    //     {
    //         id: 5,
    //         worked_hours: 5
    //     }
    // ])

    // const [list3, setList3] = useState(null)

    // const newArr = []

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

    // list1.map((d) => {
    //     for (let i = 0; i < list2.length; i++) {

    //     }
    // })

    // console.log(list3, "listed3")


    // FIZZBUZZ SCENARIO HACKERRANK
    // function fizzBuzz(n) {
    //     // Write your code here
    //     for (let i = 1; i <= n; i++) {
    //         if (i % 3 == 0 && i % 5 == 0) {
    //             console.log("FizzBuzz")
    //         } else if (i % 3 == 0 && i % 5 != 0) {
    //             console.log("Fizz")
    //         } else if (i % 3 != 0 && i % 5 == 0) {
    //             console.log("Buzz")
    //         } else if (i % 3 != 0 && i % 5 != 0) {
    //             console.log(i)
    //         }
    //     }


    // }


    //////////////////////////////////////////////////////////////////
    //////////////////////// USE REF /////////////////////////////////
    //////////////////////////////////////////////////////////////////

    // use ref is somthing like states in react but it doesn't re reder the component. It is not used in the return value of the component. ref doesn't need to rerender for updating states as it updates its state instantly when it called. So when if you need to rerender the state , then you can use useState, otherwise use ref is the best option.

    const [count, setCount] = useState(0)
    const countRef = useRef(0)

    const inputRef = useRef(null)

    const handleCount = () => {
        setCount(count + 1)
        countRef.current++;

        console.log("Count : ", count);
        console.log("Ref : ", countRef.current);
    }


    console.log("Count : ", count);
    console.log("Ref : ", countRef.current);

    useEffect(() => {
        inputRef.current.focus()
    }, [])


    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



    var library = [
        {
            title: 'Bill Gates',
            author: 'The Road Ahead',
            readingStatus: true
        },
        {
            title: 'Steve Jobs',
            author: 'Walter Isaacson',
            readingStatus: true
        },
        {
            title: 'Mockingjay: The Final Book of The Hunger Games',
            author: 'Suzanne Collins',
            readingStatus: false
        }
    ];


    const [newArr, setNewArr] = useState([])
    const read = () => {
        for (let i = 0; i < library.length; i++) {
            if (library[i].readingStatus === true) {
                console.log(`Already Read ${library[i].title} by ${library[i].author}`)
                setNewArr({ ...newArr, title: library[i], author: library[i] })
            }
        }
    }

    console.log(newArr, "New Arr")
    // read()

    useEffect(() => {
        read()
    }, [])



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
            {/* <ul>
                {newArr.map((i) => {
                    return <li>Already Read {i.title} by {i.author}</li>
                })}
            </ul> */}
            <button className='text-[1.1rem] p-2 mt-5 bg-green-200 text-green-600' onClick={read}>Click</button>

            {/* Use Ref Section */}

            <div>
                <h1>Count : {count}</h1>
                <h1>Count Ref : {countRef.current}</h1>

                <button className='text-[1.1rem] p-2 mt-5 bg-green-200 text-green-600' onClick={handleCount}>Increment</button>
            </div>

            <div className='mt-4'>
                <h1 className='text-[1.5rem] text-pink-800'>Use Ref For Input</h1>
                <input ref={inputRef} type="text" className='text-[1.3rem] border-2 p-3 ' placeholder='Type something...' />
            </div>

            {/* Use Ref Section Ended */}


        </div>
    )
}

export default Navbar