import React from 'react';
import gql from 'graphql-tag';

import { useQuery } from '@apollo/react-hooks';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginTop: 20,
    marginBottom: 20
  },
  paper: {
    padding: theme.spacing(2),
    color: 'white',
    backgroundColor: 'blue',
    marginBottom: 20
  },
  papernd: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    marginBottom: 20
  }
}));
const COUNTRY = gql`
  query countryQuery($code: ID!) {
    country(code: $code) {
      name
      emoji
      native
      phone
      currency
    }
  }
`;
const CountryDetails = props => {
  const classes = useStyles();
  const countryCode = props.match.params.id;

  const { loading, data } = useQuery(COUNTRY, {
    variables: { code: countryCode }
  });
  return (
    <div className='parent'>
      {loading ? (
        <p>Loading ...</p>
      ) : (
        <div>
          <Paper className={classes.paper}>Country {countryCode}</Paper>
          <Paper className={classes.papernd}>
            <div className='country-details'>
              <div className='item'>
                <Paper className={classes.papernd}>{data.country.name}</Paper>
              </div>
              <div className='item'>
                <Paper className={classes.papernd}>{data.country.emoji}</Paper>
              </div>
              <div className='item'>
                <Paper className={classes.papernd}>{data.country.native}</Paper>
              </div>
              <div className='item'>
                <Paper className={classes.papernd}>{data.country.phone}</Paper>
              </div>
              <div className='item'>
                <Paper className={classes.papernd}>
                  {data.country.currency}
                </Paper>
              </div>
            </div>
          </Paper>
        </div>
      )}
    </div>
  );
};

export default CountryDetails;
