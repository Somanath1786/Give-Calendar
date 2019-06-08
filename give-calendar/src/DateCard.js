import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import IconButton from '@material-ui/core/IconButton'
import { CardHeader } from '@material-ui/core';
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
    render() {
        const {classes, date, onShowForm} = this.props; 
      return (
        <div>
          <Card className={classes.card}>
          <CardHeader size= "small"
              action= {
                  <IconButton
                  onClick={onShowForm}>
                  <AddCircleOutline />
                  </IconButton>
              }
              title = {date}
          />        
          </Card>          
          </div>
      )};   
}

function mapDispatchToProps(dispatch) {
  return{
    onShowForm: () => dispatch(showForm())    
  };
}

let styleCard = withStyles(styles)(DateCard);
export default connect(
  null,
  mapDispatchToProps
)(styleCard);
