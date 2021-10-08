import Link from 'next/link'
import styles from '../styles/Form.module.css'

const FormDate = () => {
    return ( 
        <div className="form">
            <h1> Create Your Date! </h1>
            <form >
                

                <label>Who:</label>
                <p className="form-field"><input id="name" type="text" autoComplete="name" required  placeholder="Who are you going with?"/></p>
                
                <label>Phone number:</label>
                <p className="form-field"><input id="when" type="number"  required placeholder="Phone Number"/></p>
                
                <label>What:</label>
                <p className="form-field"><input  id="what" type="text"  required placeholder="What are we doing?"/></p>
                

                <label>Where:</label>
                <p className="form-field"><input id="where" type="text"  required placeholder="Where we going?"/></p>
                
                
                <label>When:</label>
                <p className="form-field"><input id="when" type="text"  required placeholder="When is this?"/></p>
                
                <label>Go again?:</label>
                <select id="repeat" type="boolean"  required placeholder="Do this date again?">
                    <option value="Yes">Yes</option>
                    <option value="No">No Shot</option>
                </select>

                
            </form>

            <label>Notes:</label>
                <textarea className="form-field-textarea" id="note" type="text" placeholder="Noteable things that happened during the date"></textarea>

            <Link href="/Previous Dates">
                    <button className={styles.btn} >
                        <h3>Create Your Date!</h3>
                    </button>
            </Link>
        </div>
     );
}
 
export default FormDate;