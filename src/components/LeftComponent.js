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
          <Typography variant='h5'>Rubeun Tan Web Services</Typography>
        </ListItem>
        <ListItem>
          <Typography variant='body1'><strong>Proprietor/Developer - Feb 2021 to Current</strong></Typography>
        </ListItem>
        <ListItem>
          <Typography variant='body1'>Various contract work building/revamping websites using HTML5, CSS3, Javascript, ReactJS.</Typography>
        </ListItem>

        <hr />

        <ListItem>
          <Typography variant='h5'>EarnUp</Typography>
        </ListItem>
        <ListItem>
          <Typography variant='body1'><strong>Front End Engineer - Aug 2019 to Feb 2021</strong></Typography>
        </ListItem>
        <ListItem>
          <Typography variant='body1'>Primary engineer who coded and deployed both the consumer and enterprise websites. 
            Worked with designers to design and build the customer-facing websites for the company with code reviews by a lead front end engineer. 
            Developed in ReactJS, ES6, Gatsby, HTML5, CSS3, MaterialUI.
          </Typography>
        </ListItem>
        <ListItem>
          <Typography variant='body1'>Part of the team that built various marketing pages & dashboards. Developed primarily in ReactJS, Redux, ES6, TypeScript, GraphQL.</Typography>
        </ListItem>
        <ListItem>
          <Typography variant='body1'>Expanded various internal customer service dashboards. Developed in ReactJS, Redux.</Typography>
        </ListItem>

        <hr />
        
        <ListItem>
          <Typography variant='h5'>Rubeun Tan Web Services</Typography>
        </ListItem>
        <ListItem>
          <Typography variant='body1'><strong>Proprietor/Developer - Aug 2014 to Aug 2019</strong></Typography>
        </ListItem>
        <ListItem>
          <Typography variant='body1'>Various contract work building/revamping websites using HTML5, CSS3, Javascript.</Typography>
        </ListItem>
        <ListItem>
          <Typography variant='body1'>Providing live video streams for various client’s Live Music & Performing Arts events.</Typography>
        </ListItem>

        <hr />

        <ListItem>
          <Typography variant='h5'>CCS Design (Clorox)</Typography>
        </ListItem>
        <ListItem>
          <Typography variant='body1'><strong>Web Developer - Aug 2008 to Aug 2014</strong></Typography>
        </ListItem>
        <ListItem>
          <Typography variant='body1'>Part of the team that designed, built and deployed the majority of websites for Clorox’s
brands (Clorox, Brita, Pinesol, Hidden Valley Ranch, etc). Developed in HTML, CSS, JQuery.</Typography>
        </ListItem>
        <ListItem>
          <Typography variant='body1'>Led a small team that built a CSR (Corporate Social Responsibility) website for Clorox that
listed each product's ingredients and their corresponding definitions for consumers.</Typography>
        </ListItem>
        <ListItem>
          <Typography variant='body1'>Developed in HTML, CSS, JQuery, PHP, MySQL.</Typography>
        </ListItem>
        <ListItem>
          <Typography variant='body1'>Developer in charge of implementing analytics & custom tags for all Clorox brand websites.</Typography>
        </ListItem>
      </List>

      <hr />

      <Typography variant="h4">Skills & Education</Typography>
      <List>
        <ListItem>
          <Typography variant='h5'>Skills:</Typography>
        </ListItem>
        <ListItem>
          <Typography variant='body1'><strong>Proficient in: </strong> ReactJS, JavaScript, Redux, HTML5, CSS3, Git</Typography>
        </ListItem>
        <ListItem>
          <Typography variant='body1'><strong>Experienced in: </strong> TypeScript, GraphQL, Jest, React Testing Library</Typography>
        </ListItem>
        <ListItem>
          <Typography variant='h5'>Education:</Typography>
        </ListItem>
        <ListItem>
          <Typography variant='body1'>B.S. in Computer Science from San Jose State University (Graduated May 2007)</Typography>
        </ListItem>
        <ListItem>
          <Typography variant='body1'>Javascript Development from General Assembly (Completed Aug 2018)</Typography>
        </ListItem>
        <ListItem>
          <Typography variant='body1'>React Nanodegree from Udacity (Completed Dec 2018)</Typography>
        </ListItem>
        <ListItem>
          <Typography variant='body1'>Front-End Nanodegree from Udacity (Completed May 2019)</Typography>
        </ListItem>
      </List>      
    </div>
  )
}
export default LeftComponent; 