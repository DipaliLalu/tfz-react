import React from 'react'
import { LevelContext } from '.'

export default function Section({children,level}) {
  return (
    <section className='container mb-3 p-3'>
        <LevelContext.Provider value={level}> {children}</LevelContext.Provider>
    </section>
  )
}
