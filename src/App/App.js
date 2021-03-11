import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

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
    margin: theme.spacing(8),
  },
  paper: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    textAlign: 'center',
  },
}));

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography variant="h1">Rubeun's Website</Typography>        
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <Typography variant="h4">Left Content</Typography>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <Typography variant="h4">Right Content</Typography>
          </Paper>
        </Grid>
      </Grid>
      <div className={classes.body}>
      </div>
    </div>
  );
}

export default App;
