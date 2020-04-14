import React from 'react';
import { Link } from 'react-router-dom';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import VisibilityIcon from '@material-ui/icons/Visibility';

const Country = props => {
  return (
    <TableRow key={props.country.code}>
      <TableCell component='th' scope='row'>
        {props.country.code}
      </TableCell>
      <TableCell align='left'>{props.country.name}</TableCell>
      <TableCell align='right'>{props.country.emoji}</TableCell>
      <TableCell align='right'>
        <Link to={{ pathname: `/index/${props.country.code}` }}>
          <VisibilityIcon color='primary' />
        </Link>
      </TableCell>
    </TableRow>
  );
};

export default Country;
