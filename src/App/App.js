import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ParticleBackground from '../components/ParticleBackground';
import useInterval from '../utils/useInterval';
import useLocalStorage from '../utils/useLocalStorage';
import Slide from '@material-ui/core/Slide';
import Footer from '../components/Footer';
import Header from '../components/Header';
import LeftComponent from '../components/LeftComponent';
import RightComponent from '../components/RightComponent';
import backgroundImage from './media/SanFrancisco-Aerial-Mission1-cropped.jpg';
import backgroundImageSquare from './media/SanFrancisco-Aerial-Mission1a-square.jpg';

const useStyles = makeStyles((theme) => ({
  '@global': {
    '#root': {
      position: 'relative',
      height: '100%',
      minHeight: '100%',
    },
  },
  root: {
    flexGrow: 1,
    height: '100%',
    minHeight: '100%',
    backgroundColor: theme.palette.background.default,
    color: theme.palette.primary.main,
    '& a': {
      color: theme.link.color,
      textDecoration: theme.link.textDecoration,
      '&:hover': {
        color: theme.link.colorHover,
      },
      '&:active': {
        color: theme.link.colorActive,
      }  
    },
  },
  mainContent: {
    marginTop: theme.spacing(4),
    marginLeft: theme.spacing(12),
    marginRight: theme.spacing(12),
    zIndex: -1,
    '& .MuiGrid-item': {
      zIndex: 0,
    }
  },
  contentContainer: {
  },
  paperBackground: {
    background: `url("${backgroundImage}")`,
    backgroundSize: 'cover',
    height: 300,
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    opacity: 0.9,
  },
  paper: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    textAlign: 'center',
    opacity: 0.9,
  },

 /** Mobile */
 [theme.breakpoints.down('sm')]: {
    mainContent: {
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
      '& h1': {
        fontSize: theme.typography.h4.fontSize,
        letterSpacing: theme.typography.h4.letterSpacing,
        lineHeight: theme.typography.h4.lineHeight,
      },
      '& h5': {
        fontSize: theme.typography.h6.fontSize,
        letterSpacing: theme.typography.h6.letterSpacing,
        lineHeight: theme.typography.h6.lineHeight,
      },
      '& body1': {
        fontSize: theme.typography.body2.fontSize,
        letterSpacing: theme.typography.body2.letterSpacing,
        lineHeight: theme.typography.body2.lineHeight,
      }
    },
    paperBackground: {
      background: `url("${backgroundImageSquare}")`,
      height: 200,
      textAlign: 'center',
    },
    rubeunIcon: {},
 },

}));

const App = () => {
  const classes = useStyles();
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' });  
  const particleOptions = require('../data/particle-options.json');
  const [particle, setParticle] = useLocalStorage("particle", "geometricShapes");
  const [pageSectionSlide, setPageSectionSlide] = useState({
    header: false,
    leftContent: false,
    rightContent: false,
    footer: false,
  });
    
  // Delay slide in animation by 1, 2 & 3 seconds
  useInterval(() => {
    setPageSectionSlide(prev => ({
      ...prev,
      header: true,
    }))
  }, 1000);
  useInterval(() => {
    setPageSectionSlide(prev => ({
      ...prev,
      leftContent: true,
      rightContent: true,
      }))
  }, 2000);
  useInterval(() => {
    setPageSectionSlide(prev => ({
      ...prev,
      footer: true,
    }))
  }, 3000);

  return (
    <div className={classes.root}>
      <ParticleBackground particleOptions={particleOptions[particle]} />
      <div className={classes.mainContent}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Slide direction="up" in={pageSectionSlide.header} mountOnEnter unmountOnExit>
              <Paper className={classes.paperBackground}>
                <Header />
              </Paper>
            </Slide>
          </Grid>
        </Grid>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} className={classes.contentContainer}>
            <Slide direction="up" in={pageSectionSlide.leftContent} mountOnEnter unmountOnExit>
              <Paper className={classes.paper}>
                <LeftComponent />
              </Paper>
            </Slide>
          </Grid>
          <Grid item xs={12} sm={6} className={classes.contentContainer}>
            <Slide direction="up" in={pageSectionSlide.rightContent} mountOnEnter unmountOnExit>
              <Paper className={classes.paper}>
                <RightComponent />
              </Paper>
            </Slide>
          </Grid>
        </Grid>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Slide direction="up" in={pageSectionSlide.footer} mountOnEnter unmountOnExit>
              <Paper className={classes.paper}>
                <Footer isPortrait={isPortrait} particle={particle} setParticle={setParticle} />
              </Paper>
            </Slide>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default App;
