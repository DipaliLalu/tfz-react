import React, { useContext } from 'react'
import { DataContext } from '.'

export default function Home() {
    const myname = useContext(DataContext);
    return (
        <div>
            <p>Welcome {myname}</p>
        </div>
    )
}
