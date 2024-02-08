import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

const Footer = ({ isPortrait, particle, setParticle }) => {
  return (
    <>
      <Typography variant="h6">Background Animations</Typography>
      <ButtonGroup orientation={isPortrait ? "vertical" : "horizontal"} variant="contained" color="primary" aria-label="contained primary button group">
        <Button 
          disabled={particle === "purpleBubbles"}
          onClick={() => setParticle("purpleBubbles")}
        >Purple Bubbles</Button>
        <Button 
          disabled={particle === "geometricShapes"}
          onClick={() => setParticle("geometricShapes")}
        >Geometric Shapes</Button>
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