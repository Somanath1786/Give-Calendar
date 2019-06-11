import React from 'react'
import Calendar from './Calendar';
import ContactForm from './Form';
import { hideForm, addEvent } from './store';
import { connect } from 'react-redux';

class MainPage extends React.Component{

    handleSubmit(values, dispatch)
    {
        dispatch(addEvent(values));        
    }

    render(){
        const {show, date, onHideForm} = this.props;

        // Decide whether you are showing the calendar or the form based on state
        var displayItem;
        if (show === true)
        {
            displayItem = <ContactForm onSubmit={this.handleSubmit} onCancelForm = {onHideForm} date={date}/>
        }
        else
        {
            displayItem = <Calendar />
        }

        return(
            <div>
                <h1> Give Campaign Calendar</h1>                
                {displayItem}
            </div>    
        )
    }
}

function mapStateToProps(state) {
    return {
      show : state.calendar.display,
      date : state.calendar.selectedDate
    };
}

function mapDispatchToProps(dispatch) {
    return{
      onHideForm: () => dispatch(hideForm())    
    };
  }

export default connect(
    mapStateToProps,
    mapDispatchToProps    
)(MainPage);