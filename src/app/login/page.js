'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";

const Login =()=>{
const route = useRouter();
const navigate =(name)=>{
    route.push("/login"+name)
}
    return(
        <div>
            <h1>Login page</h1>
            <Link href="/about">Go to About Page</Link>
            <button onClick={()=>route.push('/')}>Go to home page</button>
            <br/>
            <button onClick={()=>navigate("/loginstudent")}>Go to student login page</button>
            <br/>
            <br/>
            <br/>
            <br/>
            <button onClick={()=>navigate("/loginteacher")}>Go to Teacher login page</button>
        </div>
    )
}
export default Login;