import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  headerText: {
    color: theme.palette.primary.contrastText,
    paddingLeft: 16,
    textShadow: '#8fd8c5 1px 0 10px',
  },
  rubeunIcon: {
    width: 80,
    borderRadius: '50%',
    paddingLeft: 16,
    paddingTop: 16,
  },

  /** Mobile */
  [theme.breakpoints.down('sm')]: {

  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <>
      <Typography variant="h1" className={classes.headerText}>Rubeun's Website</Typography>        
      <Typography variant="h5" className={classes.headerText}>Front End Engineer</Typography>        
      <Typography variant="h5" className={classes.headerText}>San Francisco, CA</Typography>        
      <img src="http://portfolio.rubeun.com/img/favicon-96x96.png" className={classes.rubeunIcon} alt="Icon of Rubeun" />    
    </>
  );
}
 
export default Header;