"use client"
export default function Price({money}){
return (
    <div>
        <button onClick={()=>alert(money)}>Price</button>
    </div>
)
}