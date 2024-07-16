import Typography from '@material-ui/core/Typography';
import { List, ListItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import VideoPlayer from './VideoPlayer';
import earnupVid from '../App/media/new-earnup-site1.mp4';

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
      <Typography variant="h4">Previous Work</Typography>
      <List>
        <ListItem>
          <Typography variant='h5'>EarnUp Consumer Website</Typography>
        </ListItem>
        <ListItem>
          <Typography variant='body1'>Built the company's new consumer website from the ground up in ReactJS, ES6, Gatsby, HTML5, CSS3 wih animation, MaterialUI. 
            I was the primary front-end developer that planned and coded the entire site working closely with the Design and Marketing teams.</Typography>
        </ListItem>
        <ListItem>
          <VideoPlayer videoFile={earnupVid} />
        </ListItem>
      </List>
    </div>
  )
}
export default RightComponent;