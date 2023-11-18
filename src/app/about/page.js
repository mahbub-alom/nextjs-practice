'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";

const About =()=>{
  const router = useRouter();
  const navigate =(name)=>{
    router.push('/about'+name)
  }
  return(
    <div>
      <h1 className="heading">About page</h1>
      <Link href="/">Go to home page</Link>
      <br/>
      <button onClick={()=>navigate("/aboutcollege")}>Go to about of college</button>
      <br/>
      <br/>
      <br/>
      <button onClick={()=>navigate("/aboutstudent")}>Go to about of student</button>
    </div>
  )
}
export default About;