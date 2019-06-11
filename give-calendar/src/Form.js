import React from 'react'
import { Field, reduxForm } from 'redux-form'


import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import { CardHeader, CardContent } from '@material-ui/core';

const styles = {
  card: {
    width: 400,
    height : 400,
    backgroundColor : '#9E9E9E'    
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {    
    marginBottom: 12,
  },
};

let ContactForm = props => {
  const { classes, handleSubmit, onCancelForm, date} = props  
  return (
    <div style={{position:"absolute", left: "38%", top: "15%"}}>
      <Card className={classes.card}>
      <CardHeader size= "small" title = "Please fill up Event Details"/>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="Event Name">Event Name</label>
          <Field name="EventName" component="input" type="text" />
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
          <Field name="DesignatedCharity" component="input" type="text" />
        </div>
        <button type="submit">Submit</button>
        <button type="button" onClick={onCancelForm}> Cancel</button>
      </form>
      </Card>
    </div>
  )
}

ContactForm = reduxForm({
  // a unique name for the form
  form: 'contact'
})(ContactForm)

export default withStyles(styles)(ContactForm)