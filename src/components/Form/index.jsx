import './style.css'

function Form() {

    return(
        <>
        <form id="contact-form">
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" className="form-control" required/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">E-mail:</label>
                    <input type="email" id="email" name="email" className="form-control" required/>
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" className="form-control" rows="4" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

        </>
    )
    
}

export default Form;