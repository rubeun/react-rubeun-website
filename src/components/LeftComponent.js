import Typography from '@material-ui/core/Typography';
import { List, ListItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

  leftComponent: {
  },


 /** Mobile */
 [theme.breakpoints.down('sm')]: {

 },

}));

const LeftComponent = () => {
  const classes = useStyles();
  return (
    <div className={classes.leftComponent}>
      <Typography variant="h4">Work Experience</Typography>
      <List>
        <ListItem>
          <Typography variant='h5'>EarnUp</Typography>
        </ListItem>
        <ListItem>
          <Typography variant='body1'>Front End Engineer</Typography>
        </ListItem>
      </List>
    </div>
  )
}
export default LeftComponent;