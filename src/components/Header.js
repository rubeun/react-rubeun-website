import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  rubeunIcon: {
    width: 80,
    borderRadius: '50%',
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <>
      <Typography variant="h1">Rubeun's Website</Typography>        
      <Typography variant="h5">Front End Engineer</Typography>        
      <Typography variant="h5">San Francisco, CA</Typography>        
      <img src="http://portfolio.rubeun.com/img/favicon-96x96.png" className={classes.rubeunIcon} alt="Icon of Rubeun" />    
    </>
  );
}
 
export default Header;