import Link from "next/link";

function Navbar(){
    return(
       <div id="logo">
        <h1>Naina's Website</h1>
        <div>
            <ul className="navitems">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/contact">Contact</Link></li>
            </ul>
        </div>
        </div> 
    )
}
export default Navbar;