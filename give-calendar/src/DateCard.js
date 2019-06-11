import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import IconButton from '@material-ui/core/IconButton'
import { CardHeader, CardContent } from '@material-ui/core';
import AddCircleOutline from '@material-ui/icons/AddCircleOutline';

import { showForm} from './store';
import { connect } from 'react-redux';
import SingleDayEvents from './SingleDayEvents';

const styles = {
  card: {
    minWidth: 100,
    minHeight : 150
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

class DateCard extends React.Component {
  getTodaysEvents(date, events)
  {
    let todaysEvents = [];
    events.forEach(function(event){
      if (event.selectedDate === date)
      {
        todaysEvents.push(event);
      }
    })

    return todaysEvents;
  }
    render() {
      const {classes, date, events} = this.props;
      let todaysEvents = this.getTodaysEvents(date, events);  
      return (
        <div>
          <Card className={classes.card}>
            <CardHeader size= "small"
                action= {
                    <IconButton
                    onClick={() => this.props.dispatch(showForm(date))}>
                    <AddCircleOutline />
                    </IconButton>
                }
                title = {date}
            />
            <CardContent>
              <SingleDayEvents date={date} todaysEvents = {todaysEvents}/>              
            </CardContent>        
          </Card>
        
          </div>
      )};   
}

function mapStateToProps(state) {
    return {
      events : state.calendar.events
    };
}

let styleCard = withStyles(styles)(DateCard);
export default connect(
  mapStateToProps,
  null
)(styleCard);
