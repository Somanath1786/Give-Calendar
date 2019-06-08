import React from 'react'
import Calendar from './Calendar';
import ContactForm from './Form';
import { connect } from 'react-redux';

class MainPage extends React.Component{
    render(){
        const {show} = this.props;

        // Decide whether you are showing the calendar or the form based on state
        var displayItem;
        if(show.display === true)
        {
            displayItem = <ContactForm />
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

function mapStateToProps(show) {
    return {
      show: show,
    };
}

export default connect(
    mapStateToProps,    
)(MainPage);