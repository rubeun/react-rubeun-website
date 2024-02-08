import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ParticleBackground from '../components/ParticleBackground';
import useInterval from '../utils/useInterval';
import useLocalStorage from '../utils/useLocalStorage';
import Slide from '@material-ui/core/Slide';
import { List, ListItem } from '@material-ui/core';
import Footer from '../components/Footer';
import Header from '../components/Header';

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
    display: 'flex',
    flexGrow: 1,
  },
  paperBackground: {
    background: 'url("http://portfolio.rubeun.com/img/Rubeun-Riomaggiore-Pano1a.jpg")',
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
    '& h2': {
      fontSize: theme.typography.h3.fontSize,
      letterSpacing: theme.typography.h3.letterSpacing,
      lineHeight: theme.typography.h3.lineHeight,
    },
    '& h4': {
      fontSize: theme.typography.h5.fontSize,
      letterSpacing: theme.typography.h5.letterSpacing,
      lineHeight: theme.typography.h5.lineHeight,
    }
  },
  paperBackground: {
    background: 'white',
    height: 'unset',
    textAlign: 'center',
  },
  rubeunIcon: {},
 },

}));

const App = () => {
  const classes = useStyles();
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' });  
  const particleOptions = require('../data/particle-options.json');
  const [particle, setParticle] = useLocalStorage("particle", "purpleBubbles");
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
                <Typography variant="h4">Work Experience</Typography>
                <Typography variant="body1">
                  <List>
                    <ListItem>
                      <Typography variant='h5'>EarnUp</Typography>
                      <Typography variant='body1'>Front End Engineer</Typography>
                      <Typography variant='body1'></Typography>
                    </ListItem>
                  </List>
                </Typography>
              </Paper>
            </Slide>
          </Grid>
          <Grid item xs={12} sm={6} className={classes.contentContainer}>
            <Slide direction="up" in={pageSectionSlide.rightContent} mountOnEnter unmountOnExit>
              <Paper className={classes.paper}>
                <Typography variant="h4">Education</Typography>
                <Typography variant="body1">
                  Nog nglui gnaiih uaaah uh'e ilyaa stell'bsna throdor chtenff nilgh'riagl k'yarnak shugg, ah cch' goka h'bug nog ron R'lyeh n'gha hai R'lyeh, nw ebunma y-lloig kadishtu cgrah'n ch' clloig gotha f'ilyaa naR'lyeh. Ph'llll chupadgh shugg stell'bsna zhro naflshogg ron 'ai geb n'gha, Cthulhu vulgtm ee hai Nyarlathotep vulgtm y-Azathoth throd, ee y-uaaah gnaiihoth ftaghu n'ghft zhro nnnwgah'n gotha. Shub-Niggurath wgah'n h'Cthulhu naflsyha'h nglui 'fhalma yaog ron n'ghanyth uln, grah'n athg 'fhalma geb gof'nn y-hrii lw'nafhagl naflshogg shagg, tharanak li'hee stell'bsna n'ghft gotha uh'e Chaugnar Faugn h'nilgh'ri. Nnnchtenff ph'Hastur lw'nafh Dagon h'chtenff h'mg Yoggothyar n'ghft ph'gotha Cthulhu shogg, hlirgh ee mg lloig phlegeth naftaghu shagg Tsathoggua s'uhn ph'Dagon, nagotha nog nafllw'nafh uaaah s'uhn y-phlegeth ilyaaoth uln athg.
                </Typography>
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
