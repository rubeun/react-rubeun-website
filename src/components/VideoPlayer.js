import React, { useEffect, useRef } from "react";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

  videoContainer: {
    position: 'relative',
    width: '100%',
    height: 0,
    paddingBottom: '56.25%',
  },

  videoPlayer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',  
  },

 /** Mobile */
 [theme.breakpoints.down('sm')]: {

 },

}));



const VideoPlayer = ({ videoFile }) => {
  const classes = useStyles();
  const videoElement = useRef(null);

  const handlePlay = () => {
    videoElement && 
    videoElement.current.play().catch(err => {
      console.log("Error playing video: ", err);
    })
  };

  useEffect(() => {
    handlePlay();
  }, [])

  return (
    <div className={classes.videoContainer}>
      <video
        className={classes.videoPlayer}
        src={videoFile}
        ref={videoElement}
        controls
        autoPlay
        muted
        loop
      />
    </div>
  );
};

export default VideoPlayer;