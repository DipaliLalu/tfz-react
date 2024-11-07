import React, { useContext } from 'react'
import { DataContext, LevelContext } from '.';

export default function Heading({ children }) {
    const level = useContext(LevelContext);
    const myname = useContext(DataContext);
    switch (level) {
        case 1:
            return <h1>{children} {myname}</h1>;
        case 2:
            return <h2>{children} {myname}</h2>;
        case 3:
            return <h3>{children} {myname}</h3>;
        case 4:
            return <h4>{children} {myname}</h4>;
        case 5:
            return <h5>{children} {myname}</h5>;
        case 6:
            return <h6>{children} {myname}</h6>;
        default:
            throw Error('Unknown level: ' + level);
    }

}
