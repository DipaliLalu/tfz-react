import React from 'react';
import {data} from './data'

function Lists(props) {
    const chemist=data.filter((person)=>person.profession==='chemist')
    const lists=chemist.map((list)=>{
    return <li key={list.id} className='list-unstyled border mb-2'>
        <h3>{list.name}</h3>
        <h5>{list.profession}</h5>
        <p>{list.accomplishment}</p>
    </li>});
    console.log(lists);
    return (
        <div className='container'>
            <ul>{lists}</ul>
        </div>
    );
}

export default Lists;