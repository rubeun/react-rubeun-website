import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ParticleBackground from '../components/ParticleBackground';

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
    marginLeft: theme.spacing(12),
    marginRight: theme.spacing(12),
    zIndex: 1,
  },
  paper: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    textAlign: 'center',
    minHeight: 300,
  },
}));

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ParticleBackground />
      <div className={classes.mainContent}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Typography variant="h1">Rubeun's Website</Typography>        
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              <Typography variant="h4">Left Content</Typography>
              <Typography variant="body1">
                Ph'nglui mglw'nafh Cthulhu R'lyeh wgah'nagl fhtagn. Nog shugg R'lyeh, s'uhn ee kn'a vulgtm phlegeth geb y-gnaiih cDagon syha'hoth, s'uhn ph'Azathoth k'yarnak ah orr'e ep n'ghft. Vulgtlagln gotha uln f'vulgtlagln gotha shagg na'ai cbug ehye r'luh, ch' uln li'hee gnaiih uaaahagl hai tharanak mnahn' sgn'wahl, na'ai Azathoth ah f'shagg Cthulhu throdoth nnnchtenff nnnlloig. Chtenff cShub-Niggurath grah'nyar nilgh'ri nog li'hee k'yarnaknyth wgah'n ee nafm'latgh, orr'e y-ah shtunggliyar r'luh stell'bsna uh'eog Shub-Niggurath ron, shtunggli uaaah y-orr'e ron f'Shub-Niggurath naflAzathoth gotha uh'eagl. 'fhalma h'Dagon gotha vulgtm lw'nafh uaaah y-fhtagn wgah'n ron n'gha nafluh'e k'yarnaknyth Chaugnar Faugn, geb 'bthnk Dagon vulgtm wgah'n Azathoth li'hee Hasturor kn'a throd stell'bsnayar.                
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              <Typography variant="h4">Right Content</Typography>
              <Typography variant="body1">
                Nog nglui gnaiih uaaah uh'e ilyaa stell'bsna throdor chtenff nilgh'riagl k'yarnak shugg, ah cch' goka h'bug nog ron R'lyeh n'gha hai R'lyeh, nw ebunma y-lloig kadishtu cgrah'n ch' clloig gotha f'ilyaa naR'lyeh. Ph'llll chupadgh shugg stell'bsna zhro naflshogg ron 'ai geb n'gha, Cthulhu vulgtm ee hai Nyarlathotep vulgtm y-Azathoth throd, ee y-uaaah gnaiihoth ftaghu n'ghft zhro nnnwgah'n gotha. Shub-Niggurath wgah'n h'Cthulhu naflsyha'h nglui 'fhalma yaog ron n'ghanyth uln, grah'n athg 'fhalma geb gof'nn y-hrii lw'nafhagl naflshogg shagg, tharanak li'hee stell'bsna n'ghft gotha uh'e Chaugnar Faugn h'nilgh'ri. Nnnchtenff ph'Hastur lw'nafh Dagon h'chtenff h'mg Yoggothyar n'ghft ph'gotha Cthulhu shogg, hlirgh ee mg lloig phlegeth naftaghu shagg Tsathoggua s'uhn ph'Dagon, nagotha nog nafllw'nafh uaaah s'uhn y-phlegeth ilyaaoth uln athg.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </div>
      {/* <div className={classes.body}>
      </div> */}
    </div>
  );
}

export default App;
