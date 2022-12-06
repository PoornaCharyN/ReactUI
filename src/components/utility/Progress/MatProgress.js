import React, { useState, useEffect } from 'react';
import MatCircularProgressWithLabel from './MatCircularProgressWithLabel';
import LinearDeterminate from './MatLinearDeterminateProgress';
import MatLinearWithValueLabel from './MatLinearProgressWithLabel';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import LinearProgress from '@material-ui/core/LinearProgress';
import Prism from "prismjs";
import '../../prism.css';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(2)
    },
  },
  linearSpinner: {
    width: '80%',
    marginTop: '15px',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  }
}));

function MatProgress() {
  const classes = useStyles();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
    }, 800);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className='demo-wrapper'>
      <div><strong>Circular Progresses</strong></div>
      <div className={classes.root} style={{marginTop: '20px'}}>
        <CircularProgress variant="static" value={25} />
        <CircularProgress variant="static" value={50} />
        <CircularProgress variant="static" value={75} />
        <CircularProgress variant="static" value={100} />
        <CircularProgress variant="static" value={progress} />
      </div>
      <div style={{marginBottom: '20px'}}><strong>Circular Progress with Label</strong></div>
      <MatCircularProgressWithLabel/>
      <div><strong>Linear Intermediate Progress</strong></div>
      <div className={classes.linearSpinner}>
        <LinearProgress />
        <LinearProgress color="secondary" />
      </div>
      <div style={{marginTop:'10px'}}><strong>Linear determinate Progress</strong></div>
      <LinearDeterminate/>
      <div style={{marginTop:'10px'}}><strong>Linear Progress with Label</strong></div>
      <MatLinearWithValueLabel/>
      <div className='compo-description'>
        <h4>Description</h4>
        <p>Progress bars, Provide up-to-date feedback on the progress of a workflow or action with simple yet flexible progress bars.</p>
        <h5>Steps</h5>
        <ul>
          <li><strong>Step 1 :</strong> Install Dependency to your project root folder : <code>npm install @material-ui/core --save-dev</code></li>
          <li><strong>Step 2 :</strong> Import components, CircularProgress: <code>import CircularProgress from '@material-ui/core/CircularProgress';</code><br/>
          For LinearProgress: <code>import LinearProgress from '@material-ui/core/LinearProgress';</code></li>
          <li><strong>Step 3 :</strong> Refer JSX code under the 'Code' tab, to understand the usage of component.</li>
        </ul>
      </div>
    </div>
  );
}

function MatProgressCode() {
  useEffect(() => Prism.highlightAll(), []);
  
  return (
    <div className='jsx-code-wrapper'>
    <h4>JSX</h4>
    <pre style={{marginRight: '20px', background: '#fff'}}>
      <code className='language-javascript'>{`function MaterialProgressBars() {
  return (`}</code><code className='language-markup'>{`
    <>
      <label>Circular Progresses</label>
      <CircularProgress variant="static" value={25} />
      <CircularProgress variant="static" value={50} />
      <CircularProgress variant="static" value={75} />
      <CircularProgress variant="static" value={100} />
      <CircularProgress variant="static" value={progress} />

      <label>Linear Progresses</label>
      <div style={{width: '100%'}}>
        <LinearProgress />
        <LinearProgress color="secondary" />
      </div>
    </>`}</code><code className='language-javascript'>{`
  );
}
  
//Linear Progress with Label
function LinearProgressWithLabel(props) {
  return (`}</code><code className='language-markup'>{`
    <Box display="flex" alignItems="center">
      <Box width="100%" mr={1}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box minWidth={35}>
        <Typography variant="body2" color="textSecondary">{Math.round(props.value)%}</Typography>
      </Box>
    </Box>`}</code><code className='language-javascript'>{`
  );
}

function MatLinearWithValueLabel() {
  const classes = useStyles();
  const [progress, setProgress] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 10 : prevProgress + 10));
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (`}</code><code className='language-markup'>{`
    <div style={{width: '100%'}}>
      <LinearProgressWithLabel value={progress} />
    </div>`}</code><code className='language-javascript'>{`
  );
}
  `}
  </code>
</pre>
</div>
  );
}

export { MatProgress, MatProgressCode }; 