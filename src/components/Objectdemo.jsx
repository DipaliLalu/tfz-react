import React, { useState } from 'react'
import { useImmer } from 'use-immer'

function Objectdemo() {
    const [person, setPerson] = useImmer({
        firstname: 'dipali',
        lastname: 'lalu'
    })
    function handleFirstNameChange(e){
        setPerson(draf=>{
            draf.firstname=e.target.value
        })
    }
    function handleLastNameChange(e){
        setPerson(darf=>{
            darf.lastname=e.target.value
        })
    }
    return (
        <div className='container mt-3'>
            Firstname: <input type="text" value={person.firstname} onChange={handleFirstNameChange}/><br/>
            Lastname: <input type="text" value={person.lastname} onChange={handleLastNameChange}/>
            <p>{person.firstname} {person.lastname}</p>
        </div>
    )
}

export default Objectdemo
