"use client"
import Link from "next/link";
import "./layout.css";
import { usePathname } from "next/navigation";

export default function Layout({ children }) {
  const pathName = usePathname();
  return (
    <div>
      {pathName !== "/about/aboutcollege" ? (
        <ul className="about-menu">
          <h4>About Navbar</h4>
          <li>
            <Link href="/about">About Main</Link>
          </li>
           <li>
            <Link href="/about/aboutstudent">About student</Link>
          </li> 
         <li>
            <Link href="/about/aboutcollege">About college</Link>
          </li>
        </ul>
       ) : null}
      {/* {pathName == "/about/aboutstudent" &&
          <li>
          <Link href="/about/aboutstudent">About student</Link>
        </li>
      }
      {pathName == "/about/aboutcollege" &&
          <li>
          <Link href="/about/aboutstudent">About college</Link>
        </li>
      } */}
      {children}
    </div>
  );
}
