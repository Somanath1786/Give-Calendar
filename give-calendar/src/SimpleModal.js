import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: '#37474F',
    color: 'white',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(4),
    outline: 'none',
  },
}));

const SimpleModal = (props) => {
  const {eventName, date, time, charity} = props;  
  const [open, setOpen] = React.useState(false);
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const classes = useStyles();

  return (
    <div>      
      <Button style= {{backgroundColor : '#455A64', color: 'white'}} onClick={handleOpen}>{eventName}</Button>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}        
      >
        <div style={modalStyle} className={classes.paper}>
          <Typography variant="h6" id="modal-title">
            {eventName}
          </Typography>
          <Typography variant="subtitle1" id="simple-modal-description">
              Date    : {date} October <br/>
              Time    : {time} <br/>
              Charity : {charity}               
          </Typography>
        </div>
      </Modal>
    </div>
  );
}

export default SimpleModal;