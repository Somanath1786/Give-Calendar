import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton'
import { CardHeader } from '@material-ui/core';
import AddCircleOutline from '@material-ui/icons/AddCircleOutline';

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

function handleAddEvent(date)
{
    console.log(date);
}

class DateCard extends React.Component {

    
    
    render() {
        const {classes, date} = this.props;        

    return (
        <Card className={classes.card}>
        <CardHeader size= "small"
            action= {
                <IconButton
                onClick={() => handleAddEvent(this.props.date)}                >
                <AddCircleOutline />
                </IconButton>
            }

            title = {date}
        />        
        </Card>
    )};
}

export default withStyles(styles)(DateCard);
