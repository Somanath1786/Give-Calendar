import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DateCard from './DateCard';

const styles ={
  root: {
    width: '100%',
    marginTop: 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 100,
  },
};

class Calendar extends React.Component {
    render(){
    const classes = this.props;
   
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        {/* Add the header row here. This row contains the days of the week */}
        <TableHead>          
          <TableRow>
            <TableCell>Sunday</TableCell>
            <TableCell>Monday</TableCell>
            <TableCell>Tuesday</TableCell>
            <TableCell>Wednesday</TableCell>
            <TableCell>Thursday</TableCell>
            <TableCell>Friday</TableCell>
            <TableCell>Saturday</TableCell>
          </TableRow>
        </TableHead>

      {/* Add the body here. Each Element in the tableRow should be a card item
          Oct 1st is a Tuesday, so the first row sunday and monday columns should be 
          empty
          Oct 31st is a Thursday, so the last row Friday and Saturday Colums should be
          empty */}
        <TableBody>
          <TableRow>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell> <DateCard date={1}/> </TableCell>
              <TableCell> <DateCard date={2}/> </TableCell>
              <TableCell> <DateCard date={3}/> </TableCell>
              <TableCell> <DateCard date={4}/> </TableCell>
              <TableCell> <DateCard date={5}/> </TableCell>
            </TableRow>
          
          <TableRow>
            <TableCell> <DateCard date={6}/> </TableCell>
            <TableCell> <DateCard date={7}/> </TableCell>
            <TableCell> <DateCard date={8}/> </TableCell>
            <TableCell> <DateCard date={9}/> </TableCell>
            <TableCell> <DateCard date={10}/> </TableCell>
            <TableCell> <DateCard date={11}/> </TableCell>
            <TableCell> <DateCard date={12}/> </TableCell>
          </TableRow>

          <TableRow>
            <TableCell> <DateCard date={13}/> </TableCell>
            <TableCell> <DateCard date={14}/> </TableCell>
            <TableCell> <DateCard date={15}/> </TableCell>
            <TableCell> <DateCard date={16}/> </TableCell>
            <TableCell> <DateCard date={17}/> </TableCell>
            <TableCell> <DateCard date={18}/> </TableCell>
            <TableCell> <DateCard date={19}/> </TableCell>
          </TableRow>

          <TableRow>
            <TableCell> <DateCard date={20}/> </TableCell>
            <TableCell> <DateCard date={21}/> </TableCell>
            <TableCell> <DateCard date={22}/> </TableCell>
            <TableCell> <DateCard date={23}/> </TableCell>
            <TableCell> <DateCard date={24}/> </TableCell>
            <TableCell> <DateCard date={25}/> </TableCell>
            <TableCell> <DateCard date={26}/> </TableCell>
          </TableRow>

          <TableRow>
            <TableCell> <DateCard date={27}/> </TableCell>
            <TableCell> <DateCard date={28}/> </TableCell>
            <TableCell> <DateCard date={29}/> </TableCell>
            <TableCell> <DateCard date={30}/> </TableCell>
            <TableCell> <DateCard date={31}/> </TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableRow>

        </TableBody>
      </Table>
    </Paper>
  );
}
}

export default withStyles(styles)(Calendar);
