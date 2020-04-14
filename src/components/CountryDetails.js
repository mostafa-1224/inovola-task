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
    backgroundColor: theme.palette.text.hint,
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
    <div className='country-details'>
      {loading ? (
        <p>Loading ...</p>
      ) : (
        <div>
          <div className={classes.root}>
            <Paper className={classes.paper}>Country {countryCode}</Paper>
            {console.log(data)}
            <Paper className={classes.papernd}>
              <Paper className={classes.papernd}>
                Name {data.country.name}{' '}
              </Paper>
              <Paper className={classes.papernd}>
                Emoji {data.country.emoji}
              </Paper>
              <Paper className={classes.papernd}>
                Native {data.country.native}{' '}
              </Paper>
              <Paper className={classes.papernd}>
                Phone {data.country.phone}{' '}
              </Paper>
              <Paper className={classes.papernd}>
                Currency {data.country.currency}
              </Paper>
            </Paper>
          </div>
        </div>
      )}
    </div>
  );
};

export default CountryDetails;
