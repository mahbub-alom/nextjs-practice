"use client"
import practice from '@/styles/practice.module.css'
import { useState } from 'react'
export default function Practice(){
    const [color,setColor]=useState("red");
    const {orange}=practice;
    return(
        <div>
            <h1 className={color=="red"?practice.red:practice.green}>Condition with style</h1>
            <button onClick={()=>setColor("green")}>Make green</button>
            <button onClick={()=>setColor("red")}>Make red</button>
            <h1 style={{backgroundColor:color=="red"?"red":"green"}} >Condition</h1>
             <h3 className={orange}>Towsif</h3>
             <h3 className={orange}>Towsif</h3>
             <h3 className={orange}>Towsif</h3>
             <h3 className={orange}>Towsif</h3>
             <h3 className={orange}>Towsif</h3>
            
        </div>
    )
}