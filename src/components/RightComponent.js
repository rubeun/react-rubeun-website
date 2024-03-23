import Typography from '@material-ui/core/Typography';
import { List, ListItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

  rightComponent: {
  },


 /** Mobile */
 [theme.breakpoints.down('sm')]: {

 },

}));

const RightComponent = () => {
  const classes = useStyles();
  return (
    <div className={classes.rightComponent}>
      <Typography variant="h4">Skills & Education</Typography>
      <List>
        <ListItem>
          <Typography variant='h5'>Proficient in:</Typography>
        </ListItem>
        <ListItem>
          <Typography variant='body1'>ReactJS, JavaScript, Redux, HTML5, CSS3</Typography>
        </ListItem>
      </List>
    </div>
  )
}
export default RightComponent;