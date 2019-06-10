import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import IconButton from '@material-ui/core/IconButton'
import { CardHeader, CardContent } from '@material-ui/core';
import AddCircleOutline from '@material-ui/icons/AddCircleOutline';

import { showForm} from './store';
import { connect } from 'react-redux';

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
    
    getCardContent(events, date)
    {
      let cardContent = ""
      events.forEach(function(event, index, array)
      {
        if(event.selectedDate === date)
        cardContent = <button>{event.EventName}</button>;
      })
      return cardContent;
    }

    render() {
        const {classes, date, events} = this.props;
        let cardContent = this.getCardContent(events, date); 
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
              {cardContent}
            </CardContent>        
          </Card>
        
          </div>
      )};   
}

function mapStateToProps(state) {
  return {
    events : state.calendar.events,    
  };
}

let styleCard = withStyles(styles)(DateCard);
export default connect(
  mapStateToProps,
  null
)(styleCard);
