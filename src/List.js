import React from 'react'
import style from "./List.module.css"




export default function List({data}) {
  console.log(data)
  return (
    <>
      
      {data.map((item,index)=>(
         <>
         <ul>
        
         <li>
          <div className={style.flex}>
            <img className={style.img} src={item.img} alt="img"/>
            <div className={style.title}>
            <h3 className={style.name}>{item.name}</h3>

            <h5 className={style.age}>{item.birthday}</h5>
            </div>
          </div>
        </li>
      </ul>
     
        </>
      ))}
       
    </>
  )
}
