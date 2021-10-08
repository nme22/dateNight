import Link from 'next/link'
import styles from '../styles/Form.module.css'

const FormDate = () => {
    return ( 
        <div >
            <h1> Create Your Date! </h1>
            <form className="form-date">
                

                <label>Who:</label>
                <input id="name" type="text" autoComplete="name" required />
                
                
                <label>What:</label>
                <input  id="what" type="text" autoComplete="name" required />
                

                <label>Where:</label>
                <input id="where" type="text" autoComplete="name" required />
                
                
                <label>When:</label>
                <input id="when" type="text" autoComplete="name" required />
                

                <label>Notes:</label>
                <input id="note" type="text" autoComplete="note" required />

                
            </form>

            <Link href="/Previous Dates">
                    <button className={styles.btn} type="submit">Create Your Date!</button>
            </Link>
        </div>
     );
}
 
export default FormDate;