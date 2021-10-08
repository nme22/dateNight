import styles from '../../styles/Dates.module.css'
import Link from 'next/link'

export const getStaticProps = async () => {

    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    /* Where we will pull all the previous dates from*/
    const data = await res.json();

    return {
        props: { dates: data}
    }
}
const getDates = ({ dates }) => {
    return ( 
        <div>
            <h1> All Dates</h1>
            {dates.map(dates => (
                <Link href={'/Dates/' + dates.id} key={dates.id}>
                    <a className={styles.single}>
                        <h3>{ dates.name }</h3>
                    </a>
                </Link>
            ))}
        </div>
     );
}
 
export default getDates;