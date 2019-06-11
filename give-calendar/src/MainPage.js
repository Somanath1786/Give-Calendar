import React from 'react'
import Calendar from './Calendar';
import ContactForm from './Form';
import { hideForm, addEvent } from './store';
import { connect } from 'react-redux';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const styles = {
    root: {
        flexGrow: 1,      
    },
    appbar: {
        alignItems: 'center',
      } 
  };

class MainPage extends React.Component{    
    // Event handler for onSubmit. Values is the Json representation of all the Fied components of the redux-form
    // The redux form also provides a dispatch object which can then be used to dispatch events
    handleSubmit(values, dispatch)
    {
        dispatch(addEvent(values));        
    }

    render(){
        const {classes, show, date, onHideForm} = this.props;

        // Conditionally display either the calendar surface or the form based on the state
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
            <div className ={classes.root}>
                <AppBar className={classes.appbar} position="static" color="primary">
                    <Toolbar>
                        <Typography variant="h6" color="inherit">
                            Give Campaign Calendar
                        </Typography>
                    </Toolbar>
                </AppBar>               
                {displayItem}
            </div>    
        )
    }
}

// Connect the redux store to react and map State and Dispatch as props
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

const styledMainPage = withStyles(styles)(MainPage)  
export default connect(
    mapStateToProps,
    mapDispatchToProps    
)(styledMainPage);