import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import { LinkedIn, GitHub, Web } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  footerLinks: {
    marginBottom: 20,
  },

  /** Mobile */
  [theme.breakpoints.down('sm')]: {

  },
}));


const Footer = ({ isPortrait, particle, setParticle }) => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.footerLinks}>
        <Typography variant="body1">Links</Typography>
        <ButtonGroup orientation={isPortrait ? "vertical" : "horizontal"}>
          <Button
            href='https://www.linkedin.com/in/rubeun'
            target='_blank' 
            startIcon={<LinkedIn />}
          >LinkedIn</Button>
          <Button
            href='https://github.com/rubeun'
            target='_blank' 
            startIcon={<GitHub />}
          >GitHub</Button>
          <Button
            href='https://web.rubeun.com'
            target='_blank' 
            startIcon={<Web />}
          >HomePage</Button>
        </ButtonGroup>
      </div>

      <Typography variant="body1">Background Animations</Typography>
      <ButtonGroup orientation={isPortrait ? "vertical" : "horizontal"} variant="contained" color="primary" aria-label="contained primary button group">
        <Button 
          disabled={particle === "geometricShapes"}
          onClick={() => setParticle("geometricShapes")}
        >Geometric Shapes</Button>
        <Button 
          disabled={particle === "purpleBubbles"}
          onClick={() => setParticle("purpleBubbles")}
        >Purple Bubbles</Button>
        <Button 
          disabled={particle === "rainfallEffect"}
          onClick={() => setParticle("rainfallEffect")}
        >Rainfall</Button>
        <Button 
          disabled={particle === "flameEffect"}
          onClick={() => setParticle("flameEffect")}
        >Flames</Button>
      </ButtonGroup>
    </>
  );
}
 
export default Footer;