import React from 'react'
import List from './List'

export default function Birthday() {
  return (
    <div>
      <section className='section'>
       <h2>{Data.length} birthday today</h2>
       <List people={data}/>
      </section>
    </div>
  )
}
