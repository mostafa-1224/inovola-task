import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

import Country from './Country';
import UserInfo from './UserInfo';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650
  }
});

const COUNTRIES = gql`
  query CountriesQuery {
    countries {
      code
      name
      emoji
    }
  }
`;

const Countries = () => {
  const classes = useStyles();
  const { loading, data } = useQuery(COUNTRIES);
  return (
    <div className='country-table'>
      <UserInfo />
      {loading ? (
        <p>Loading ...</p>
      ) : (
        <TableContainer component={Paper}>
          <Table
            className={classes.table}
            size='small'
            aria-label='a dense table'
          >
            <TableHead>
              <TableRow>
                <TableCell>code</TableCell>
                <TableCell>name</TableCell>
                <TableCell align='right'>emoji</TableCell>
                <TableCell align='right'>action</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {data.countries.map(country => (
                <Country key={country.code} country={country} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
};

export default Countries;
