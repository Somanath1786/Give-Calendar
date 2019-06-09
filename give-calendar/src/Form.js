import React from 'react'
import { Field, reduxForm } from 'redux-form'

let ContactForm = props => {
  const { handleSubmit, onCancelForm, date} = props  
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="Event Name">Event Name</label>
        <Field name="Event Name" component="input" type="text" />
      </div>      
      <div>
        <label htmlFor="Date">Date</label>
        <input type="text" value={date} readOnly></input>       
      </div>
      <div>
        <label htmlFor="Time">Time</label>
        <Field name="Time" component="input" type="text" />
      </div>      
      <div>
        <label htmlFor="Designated Charity">Designated Charity</label>
        <Field name="Designated Charity" component="input" type="text" />
      </div>
      <button type="submit">Submit</button>
      <button type="button" onClick={onCancelForm}> Cancel</button>
    </form>
  )
}

ContactForm = reduxForm({
  // a unique name for the form
  form: 'contact'
})(ContactForm)

export default ContactForm