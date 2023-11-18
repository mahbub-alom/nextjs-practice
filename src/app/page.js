'use client'
import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation';


export default function Home() {
  const router = useRouter();
  const navigate=(name)=>{
    router.push(name)
  }
  const [name,setName]=useState("towsif")
  const apple=()=>{
    setName("mahbub")
  }
  const oldName =()=>{
    setName("towsif")
  }
  return (
    <main>
      <h1>{name} home page</h1>
      <button onClick={()=>oldName()}>click me</button>
      <button onClick={()=>apple()}>Click me</button>
      <Link href="/login">go to login page</Link>

      <br/>
      <br/>
      <br/>
      <button onClick={()=>navigate('/login')}>login</button>
      <button onClick={()=>navigate('/about')}>about</button>
      <br/>
      <br/> 
      <Link href="/productlist">Go to Product list</Link>
    </main>
  )
}
