import React, { useState, useEffect } from 'react';
import Prism from "prismjs";
import '../../prism.css';
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { withStyles } from '@material-ui/core/styles';
import { purple } from '@material-ui/core/colors';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


const PurpleSwitch = withStyles({
  switchBase: {
    color: purple[300],
    '&$checked': {
      color: purple[500],
    },
    '&$checked + $track': {
      backgroundColor: purple[500],
    },
  },
  checked: {},
  track: {},
})(Switch);

const IOSSwitch = withStyles((theme) => ({
  root: {
    width: 42,
    height: 26,
    padding: 0,
    margin: theme.spacing(1),
  },
  switchBase: {
    padding: 1,
    '&$checked': {
      transform: 'translateX(16px)',
      color: theme.palette.common.white,
      '& + $track': {
        backgroundColor: '#52d869',
        opacity: 1,
        border: 'none',
      },
    },
    '&$focusVisible $thumb': {
      color: '#52d869',
      border: '6px solid #fff',
    },
  },
  thumb: {
    width: 24,
    height: 24,
  },
  track: {
    borderRadius: 26 / 2,
    border: `1px solid ${theme.palette.grey[400]}`,
    backgroundColor: theme.palette.grey[50],
    opacity: 1,
    transition: theme.transitions.create(['background-color', 'border']),
  },
  checked: {},
  focusVisible: {},
}))(({ classes, ...props }) => {
  return (
    <Switch
      focusVisibleClassName={classes.focusVisible}
      disableRipple
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked,
      }}
      {...props}
    />
  );
});

const AntSwitch = withStyles((theme) => ({
  root: {
    width: 28,
    height: 16,
    padding: 0,
    display: 'flex',
  },
  switchBase: {
    padding: 2,
    color: theme.palette.grey[500],
    '&$checked': {
      transform: 'translateX(12px)',
      color: theme.palette.common.white,
      '& + $track': {
        opacity: 1,
        backgroundColor: theme.palette.primary.main,
        borderColor: theme.palette.primary.main,
      },
    },
  },
  thumb: {
    width: 12,
    height: 12,
    boxShadow: 'none',
  },
  track: {
    border: `1px solid ${theme.palette.grey[500]}`,
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor: theme.palette.common.white,
  },
  checked: {},
}))(Switch);

function MatToggle() {
  const [state, setState] = useState({
    checkedA: true,
    checkedB: true,
    checkedC: true,
    checkedD: true,
    checkedE: true,
    checkedF: true,
    checkedG: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  return (
    <div className='demo-wrapper'>
      <div><strong>Basic Toggles</strong></div>
      <>
        <Switch
          checked={state.checkedA}
          onChange={handleChange}
          name="checkedA"
          inputProps={{ 'aria-label': 'secondary checkbox' }}
        />
        <Switch
          checked={state.checkedB}
          onChange={handleChange}
          color="primary"
          name="checkedB"
          inputProps={{ 'aria-label': 'primary checkbox' }}
        />
        <Switch inputProps={{ 'aria-label': 'primary checkbox' }} />
        <Switch disabled inputProps={{ 'aria-label': 'disabled checkbox' }} />
        <Switch disabled checked inputProps={{ 'aria-label': 'primary checkbox' }} />
        <Switch
          defaultChecked
          color="default"
          inputProps={{ 'aria-label': 'checkbox with default color' }}
        />
      </>
      <div><strong>Toggles with FormControlLabel </strong></div>
      <>
        <FormGroup row style={{marginLeft: '10px'}}>
          <FormControlLabel
            control={<Switch checked={state.checkedC} onChange={handleChange} name="checkedC" />}
            label="Secondary"
          />
          <FormControlLabel
            control={
              <Switch
                checked={state.checkedD}
                onChange={handleChange}
                name="checkedD"
                color="primary"
              />
            }
            label="Primary"
          />
          <FormControlLabel control={<Switch />} label="Uncontrolled" />
          <FormControlLabel disabled control={<Switch />} label="Disabled" />
          <FormControlLabel disabled control={<Switch checked />} label="Disabled" />
        </FormGroup>
      </>
      <div><strong>Customized Toggles</strong></div>
      <>
        <FormGroup>
        <FormControlLabel
          control={<PurpleSwitch checked={state.checkedE} onChange={handleChange} name="checkedE" />}
          label="Custom color"
        />
        <FormControlLabel
          control={<IOSSwitch checked={state.checkedF} onChange={handleChange} name="checkedF" />}
          label="iOS style"
        />
        <Typography component="div">
          <Grid component="label" container alignItems="center" spacing={1}>
            <Grid item>Off</Grid>
            <Grid item>
              <AntSwitch checked={state.checkedG} onChange={handleChange} name="checkedG" />
            </Grid>
            <Grid item>On</Grid>
          </Grid>
        </Typography>
      </FormGroup>
      </>
      <div className='compo-description'>
        <h4>Description</h4>
        <p>Toggle Button is a component, Switches toggle the state of a single setting on or off.</p>
        <h5>Steps</h5>
        <ul>
          <li><strong>Step 1 :</strong> Install Dependency to your project root folder : <code>npm install @material-ui/core --save-dev</code></li>
          <li><strong>Step 2 :</strong> Import component, for switch type toggle: <code>import Switch from '@material-ui/core/Switch';</code><br/> 
          For FormGroup and FormControlLabel: <code>import FormGroup from '@material-ui/core/FormGroup';</code> <br/>
          <code>import FormControlLabel from '@material-ui/core/FormControlLabel';</code></li>
          <li><strong>Step 3 :</strong> Refer JSX code under the 'Code' tab, to understand the usage of component.</li>
      </ul>
      </div>
    </div>
  )
}

function MatToggleCode(){
  useEffect(()=> Prism.highlightAll(), [])
  return(
    <div className='jsx-code-wrapper'>
      <h4>JSX</h4>
      <pre style={{marginRight: '20px',  background:'#fff'}}>
        <code className='language-javascript'>{`function ToggleButtons(){
    const [state, setState] = useState({
      checkedA: true,
      checkedB: true,
      checkedC: true,
      checkedD: true,
    });
    const handleChange = (event) => {
      setState({ ...state, [event.target.name]: event.target.checked });
    };
    
    return (`}</code>
    <code className='language-markup'>
    {`
    <>
      <Switch
        checked={state.checkedA}
        onChange={handleChange}
        name="checkedA"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
      <Switch
        checked={state.checkedB}
        onChange={handleChange}
        color="primary"
        name="checkedB"
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />
      <FormGroup row style={{marginLeft: '10px'}}>
        <FormControlLabel
          control={<Switch checked={state.checkedC} onChange={handleChange} name="checkedC" />}
          label="Secondary"
        />
        <FormControlLabel
          control={
            <Switch
              checked={state.checkedD}
              onChange={handleChange}
              name="checkedD"
              color="primary"
            />
          }
          label="Primary"
        />
        <FormControlLabel control={<Switch />} label="Uncontrolled" />
        <FormControlLabel disabled control={<Switch />} label="Disabled" />
        <FormControlLabel disabled control={<Switch checked />} label="Disabled" />
      </FormGroup>
    </>`}
    </code>
    <code className='language-javascript'>
      {`
    );
  }`}
    </code>
      </pre>
    </div>
  )
}

export { MatToggle, MatToggleCode};