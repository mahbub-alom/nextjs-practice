import { Roboto } from "next/font/google"

const roboto=Roboto({
    weight:'100',
    subsets:["latin"],
    display:"swap"
})
export default function Font(){
    return(
        <div>
            <h1 style={{fontFamily:'Roboto',fontWeight:"100"}}>Font with google</h1>
            <h2 className={roboto.className}>Font with nextjs</h2>
        </div>
    )
}