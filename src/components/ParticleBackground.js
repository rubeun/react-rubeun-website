import Particles from "react-tsparticles";
import { makeStyles } from '@material-ui/core/styles';
/**
 * ParticleBackground uses react-tsparticles (https://github.com/matteobruni/tsparticles/tree/main/components/react)
 * @param particleOptions options for particles in json object format
 * 
 */

const useStyles = makeStyles((theme) => ({
  particles: {
    position: 'fixed',
    width: '100%',
    height: '100%',
    zIndex: 0,
  },
}));

const ParticleBackground = ({ particleOptions }) => {
  const classes = useStyles();

  return (
    <Particles 
      id="tsparticles"
      className={classes.particles}
      options={particleOptions}
    />
  );
};

export default ParticleBackground;