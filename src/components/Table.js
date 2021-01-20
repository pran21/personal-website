import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';

const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.gray,
      fontSize: 24,
    },
    body: {
      fontSize: 60,
      width: 60,
    },
  }))(TableCell);

function getRow(row) {
    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
    var updated = new Date(row.pushed_at);
    const updatedDateString = monthNames[updated.getMonth()] + " " + updated.getDate() + ", " + updated.getFullYear();
    return(
        <TableRow key={row.id}>
                      <TableCell><a href={row.html_url} target='_blank' rel="noopener noreferrer">{row.name}</a></TableCell>
                      <TableCell>{row.description}</TableCell>
                      <TableCell>{updatedDateString}</TableCell>
        </TableRow>
    );
}

export default class BasicTable extends React.Component {
    render() {
        return (
            <TableContainer component={Paper}>
              <Table aria-label="simple table">
                  <caption>Data updated from Github profile.</caption>
                <TableHead>
                  <TableRow>
                    <StyledTableCell className='column-header'>Project</StyledTableCell>
                    <StyledTableCell className='column-header'>Description</StyledTableCell>
                    <StyledTableCell className='column-header'>Last Updated</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {this.props.data.map(getRow)}
                </TableBody>
              </Table>
            </TableContainer>
        );
    }
}