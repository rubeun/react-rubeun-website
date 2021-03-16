import Particles from "react-tsparticles";
import { makeStyles } from '@material-ui/core/styles';

/**
 * ParticleBackground uses react-tsparticles (https://github.com/matteobruni/tsparticles/tree/main/components/react)
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

const ParticleBackground = () => {
  const classes = useStyles();

  return (
    <Particles 
      id="tsparticles"
      className={classes.particles}
      options={
        {
          fpsLimit: 60,
          particles: {
            number: {
              value: 0,
              density: {
                enable: true,
                value_area: 800
              }
            },
            color: {
              value: "#ffff00"
            },
            shape: {
              type: "circle"
            },
            opacity: {
              value: 1,
              random: false,
              animation: {
                enable: true,
                speed: 0.5,
                minimumValue: 0,
                sync: false
              }
            },
            size: {
              value: 8,
              random: { enable: true, minimumValue: 4 },
              animation: {
                enable: false,
                speed: 20,
                minimumValue: 4,
                sync: false
              }
            },
            move: {
              enable: true,
              gravity: {
                enable: true,
                acceleration: -0.5
              },
              speed: 5,
              direction: "up",
              random: false,
              straight: false,
              outModes: {
                default: "destroy",
                bottom: "none"
              },
              attract: {
                enable: true,
                distance: 300,
                rotate: {
                  x: 600,
                  y: 1200
                }
              }
            }
          },
          interactivity: {
            detectsOn: "canvas",
            events: {
              resize: true
            }
          },
          detectRetina: true,
          background: {
            color: "#000000"
          },
          emitters: [
            {
              direction: "up",
              particles: {
                color: "#9723ff"
              },
              rate: {
                quantity: 1,
                delay: 0.1
              },
              size: {
                width: 100,
                height: 10
              },
              position: {
                x: 50,
                y: 100
              }
            },
            {
              direction: "up",
              particles: {
                color: "#bd74ff"
              },
              rate: {
                quantity: 1,
                delay: 0.1
              },
              size: {
                width: 100,
                height: 10
              },
              position: {
                x: 100,
                y: 100
              }
            }
          ]          
        }
      }
    />
  );
};

export default ParticleBackground;