import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
    return ( 
        <nav>
            <div className='logo'>
                <Image src="/datingIMG.png" width={128} height={77}/>
            </div>
            <Link href="/"><a>Home</a></Link>
            <Link href="/About"><a>About</a></Link>
            <Link href="/createDateForm"><a>Create A Date</a></Link>
            <Link href="/Dates"><a>Previous Dates</a></Link>
        </nav>
     );
}
 
export default Navbar;