import React, { useContext } from 'react'
import { DataContext } from '.'

export default function About() {
    const myname = useContext(DataContext);
    return (
        <div>
            <p>Welcome {myname} in About page</p>
        </div>
    )
}
