import Link from 'next/link'
import styles from '../styles/Form.module.css'

const FormDate = () => {
    return ( 
        <div>
            <form className="form-date">
                <h1> Create Your Date! </h1>

                <label>Who:</label>
                <input id="name" type="text" autoComplete="name" required />
                

                <label>What:</label>
                <input  id="name" type="text" autoComplete="name" required />
                

                <label>Where:</label>
                <input id="name" type="text" autoComplete="name" required />
                

                <label>When:</label>
                <input id="name" type="text" autoComplete="name" required />
                

                <label>Notes:</label>
                <input id="note" type="text" autoComplete="note" required />

                <Link href="/Previous Dates">
                    <button className={styles.btn} type="submit">Create Your Date!</button>
                </Link>
            </form>
        </div>
     );
}
 
export default FormDate;