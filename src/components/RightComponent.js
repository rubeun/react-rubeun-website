import Typography from '@material-ui/core/Typography';
import { List, ListItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import VideoPlayer from './VideoPlayer';
import earnupVid from '../App/media/new-earnup-site1.mp4';
import wordleVid from '../App/media/rubeun-wordle-demo1.mp4';
import eliteVid from '../App/media/rubeun-elite-assistant-demo1.mp4';

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
          <Typography variant='body1'>
            Examples of the code I wrote for the homepage:{' '}
            <a href='https://gist.github.com/rubeun/eb2fdb4c0f7d31a10d89311f0d65cc13' target='_blank' rel='noreferrer'>HeroSection.js</a>{' '}
            <a href='https://gist.github.com/rubeun/0e6f167513f6f929c42d321ea5cf66a7' target='_blank' rel='noreferrer'>AnimatedPhone.js</a>
          </Typography>
        </ListItem>
        <ListItem>
          <VideoPlayer videoFile={earnupVid} />
        </ListItem>

        <hr />

        <ListItem>
          <Typography variant='h5'>Personal Projects</Typography>        
        </ListItem>
        <ListItem>
          <Typography variant='body1'>
            <strong>Wordle Game</strong> &mdash; I recreated NYT's Wordle Game minus the one annoying limitation, only one word per 24 hours.
            Built with React & TypeScript.{'  '} 
            <a href='https://rubeun.github.io/wordle/' target='_blank' rel='noreferrer'>Play Here</a>
          </Typography>
        </ListItem>
        <ListItem>
          <VideoPlayer videoFile={wordleVid} />
        </ListItem>
        <ListItem>
          <Typography variant='body1'>
            <strong>Elite Assistant</strong> &mdash; I built this colonisation utility app to help me build colonies in the game{' '} 
            <a href='https://www.elitedangerous.com/en-US' target='_blank' rel='noreferrer'>Elite Dangerous</a>.{' '}
            It keeps track of needed resources to build any particular facility as well as what resources I already had in storage. Built with React & TypeScript.{'  '}
            <a href='https://rubeun.github.io/elite-assistant/' target='_blank' rel='noreferrer'>Use Here</a>
          </Typography>
        </ListItem>
        <ListItem>
          <VideoPlayer videoFile={eliteVid} />
        </ListItem>

      </List>
    </div>
  )
}
export default RightComponent;