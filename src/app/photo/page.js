import Image from "next/image";
import img from '../../../public/vercel.svg'

export default function Photo(){
    return(
        <div>
            {/* <Image
            src={img}
            /> */}
            <Image
            src="https://images.pexels.com/photos/618833/pexels-photo-618833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            width={500}
            height={500}
            />
        </div>
    )
}