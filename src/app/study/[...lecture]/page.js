"use client"
export default function Lecture({params}){
    return(
        <div>
            {
                params.lecture.map((data,index)=>{
                   return <h1 key={index}>{data}</h1>
                })
            }
        </div>
    )
}