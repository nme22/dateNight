import Link from 'next/link'

const Navbar = () => {
    return ( 
        <nav>
            <div className='logo'>
                <h1>DateNight</h1>
            </div>
            <Link href="/"><a>Home</a></Link>
            <Link href="/About"><a>About</a></Link>
            <Link href="/FormDate"><a>Create A Date</a></Link>
            <Link href="/Dates"><a>Previous Dates</a></Link>
        </nav>
     );
}
 
export default Navbar;