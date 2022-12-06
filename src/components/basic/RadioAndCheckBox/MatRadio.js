import React, { useState, useEffect } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Checkbox from '@material-ui/core/Checkbox';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import Prism from "prismjs";
import '../../prism.css';
import { flushSync } from 'react-dom';


const GreenRadio = withStyles({
  root: {
    color: green[400],
    '&$checked': {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);

const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    '&$checked': {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

function MatRadio(){
  const [value, setValue] = useState('male');
  const [selectedValue, setSelectedValue] = useState('a');
  const [checked, setChecked] = useState(true);
  const [state, setState] = useState({
    checkedA: true,
    checkedB: true,
    checkedF: true,
    checkedG: true,
  });

  // const handleChecked2Change = (event) => {
  //   setState({ ...state, [event.target.name]: event.target.checked });
  // };

  // const handleCheckboxChange = (event) => {
  //   setChecked(event.target.checked);
  // };
  // const handleChange = (event) => {
  //   setValue(event.target.value);
  // };

  // const handleChangeTwo = (event) => {
  //   setSelectedValue(event.target.value);
  // };

  // Automatic batching

  const handleChangeAll = (event) =>{
    flushSync(() => {
      setState({ ...state, [event.target.name]: event.target.checked });
    });
    flushSync(() => {
      setChecked(event.target.checked);
    });
    flushSync(() => {
      setValue(event.target.value);
    });
    flushSync(() => {
      setSelectedValue(event.target.value);
    });
  }
  return(
    <div className='demo-wrapper'>  
      <div><strong>Radio Buttons wrapped with in the RadioGroup</strong></div><br/>
      <FormControl component="fieldset" style={{marginRight:'50px'}}>
        <FormLabel component="legend">Gender</FormLabel>
        <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChangeAll}>
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          <FormControlLabel value="other" control={<Radio />} label="Other" />
          <FormControlLabel value="disabled" disabled control={<Radio />} label="(Disabled option)" />
        </RadioGroup>
      </FormControl>
      <div><strong>Standalone Radio Buttons</strong></div><br/>
      <>
        <Radio
          checked={selectedValue === 'a'}
          onChange={handleChangeAll}
          value="a"
          name="radio-button-demo"
          inputProps={{ 'aria-label': 'A' }}
        />
        <Radio
          checked={selectedValue === 'b'}
          onChange={handleChangeAll}
          value="b"
          name="radio-button-demo"
          inputProps={{ 'aria-label': 'B' }}
        />
        <GreenRadio
          checked={selectedValue === 'c'}
          onChange={handleChangeAll}
          value="c"
          name="radio-button-demo"
          inputProps={{ 'aria-label': 'C' }}
        />
        <Radio
          checked={selectedValue === 'd'}
          onChange={handleChangeAll}
          value="d"
          color="default"
          name="radio-button-demo"
          inputProps={{ 'aria-label': 'D' }}
        />
        <Radio
          checked={selectedValue === 'e'}
          onChange={handleChangeAll}
          value="e"
          color="default"
          name="radio-button-demo"
          inputProps={{ 'aria-label': 'E' }}
          size="small"
        />
      </>
      <div><strong>Radio Buttons with label placement</strong></div><br/>
      <FormControl component="fieldset">
        <RadioGroup row aria-label="position" name="position" defaultValue="top">
          <FormControlLabel
            value="top"
            control={<Radio color="primary" />}
            label="Top"
            labelPlacement="top"
          />
          <FormControlLabel
            value="start"
            control={<Radio color="primary" />}
            label="Start"
            labelPlacement="start"
          />
          <FormControlLabel
            value="bottom"
            control={<Radio color="primary" />}
            label="Bottom"
            labelPlacement="bottom"
          />
          <FormControlLabel value="end" control={<Radio color="primary" />} label="End" />
        </RadioGroup>
      </FormControl>
      <div><strong>Basic Checkboxes</strong></div>
      <>
        <Checkbox
          checked={checked}
          onChange={handleChangeAll}
          inputProps={{ 'aria-label': 'primary checkbox' }}
        />
        <Checkbox
          defaultChecked
          color="primary"
          inputProps={{ 'aria-label': 'secondary checkbox' }}
        />
        <Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} />
        <Checkbox disabled inputProps={{ 'aria-label': 'disabled checkbox' }} />
        <Checkbox disabled checked inputProps={{ 'aria-label': 'disabled checked checkbox' }} />
        <Checkbox
          defaultChecked
          indeterminate
          inputProps={{ 'aria-label': 'indeterminate checkbox' }}
        />
        <Checkbox
          defaultChecked
          color="default"
          inputProps={{ 'aria-label': 'checkbox with default color' }}
        />
        <Checkbox
          defaultChecked
          size="small"
          inputProps={{ 'aria-label': 'checkbox with small size' }}
        />
      </><br/><br/>
      <div><strong>Checkbox with FormControlLabel</strong></div>
      <FormGroup row style={{marginRight:'160px'}}>
        <FormControlLabel
          control={<Checkbox checked={state.checkedA} onChange={handleChangeAll} name="checkedA" />}
          label="Secondary"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={state.checkedB}
              onChange={handleChangeAll}
              name="checkedB"
              color="primary"
            />
          }
          label="Primary"
        />
        <FormControlLabel control={<Checkbox name="checkedC" />} label="Uncontrolled" />
        <FormControlLabel disabled control={<Checkbox name="checkedD" />} label="Disabled" />
        <FormControlLabel disabled control={<Checkbox checked name="checkedE" />} label="Disabled" />
        <FormControlLabel
          control={
            <Checkbox
              checked={state.checkedF}
              onChange={handleChangeAll}
              name="checkedF"
              indeterminate
            />
          }
          label="Indeterminate"
        />
        <FormControlLabel
          control={<GreenCheckbox checked={state.checkedG} onChange={handleChangeAll} name="checkedG" />}
          label="Custom color"
        />
        <FormControlLabel
          control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}
          label="Custom icon"
        />
        <FormControlLabel
          control={
            <Checkbox
              icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
              checkedIcon={<CheckBoxIcon fontSize="small" />}
              name="checkedI"
            />
          }
          label="Custom size"
        />
      </FormGroup><br/>
      <div><strong>Checkbox with label placements</strong></div>
      <FormControl component="fieldset">
        <FormGroup aria-label="position" row>
          <FormControlLabel
            value="top"
            control={<Checkbox color="primary" />}
            label="Top"
            labelPlacement="top"
          />
          <FormControlLabel
            value="start"
            control={<Checkbox color="primary" />}
            label="Start"
            labelPlacement="start"
          />
          <FormControlLabel
            value="bottom"
            control={<Checkbox color="primary" />}
            label="Bottom"
            labelPlacement="bottom"
          />
          <FormControlLabel
            value="end"
            control={<Checkbox color="primary" />}
            label="End"
            labelPlacement="end"
          />
        </FormGroup>
      </FormControl>
      <div className='compo-description'>
        <h4>Description</h4>
        <p>Radio button is component used to select a option from a group, Only one radio button in a group can be selected at the same time.
        Checkboxes are used to let a user select one or more options among the limited number of choices.
        </p>
        <h5>Steps</h5>
        <ul>
          <li><strong>Step 1 :</strong> Install Dependency to your project root folder : <code>npm install @material-ui/core --save-dev</code></li>
          <li><strong>Step 2 :</strong> Import component, For radio button: <code>import Radio from '@material-ui/core/Radio';</code> <br/>
          for Checkbox: <code>import Checkbox from '@material-ui/core/Checkbox';</code><br/>
          for RadioGroup: <code>import RadioGroup from '@material-ui/core/RadioGroup';</code><br/>
          for FormControlLabel: <code>import FormControlLabel from '@material-ui/core/FormControlLabel';</code></li>
          <li><strong>Step 3 :</strong> Refer JSX code under the 'Code' tab, to understand the usage of component.</li>
        </ul>
      </div>
    </div>
  );
}

function MatRadioCode(){
  useEffect(()=> Prism.highlightAll(), []);
  return (
    <div className='jsx-code-wrapper'>
      <h4>JSX</h4>
      <pre style={{marginRight: '20px', background:'#fff'}}>
        <code className='language-javascript'>{`function RadioAndCheck() {
  const [value, setValue] = useState('male');
  const [selectedValue, setSelectedValue] = useState('a');
  const selectedValueA = selectedValue === 'a';
  const selectedValueB = selectedValue === 'b';
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const handleChangeTwo = (event) => {
    setSelectedValue(event.target.value);
  };

  return (`}</code>
  <code className='language-markup'>{`
    <>
      <FormLabel component="legend">Gender</FormLabel>
      <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
        <FormControlLabel value="disabled" disabled control={<Radio />} label="(Disabled option)"/>
      </RadioGroup>
      <Radio 
        checked={selectedValueA} 
        onChange={handleChangeTwo} 
        value="a" 
        name="radio-button-demo" 
        inputProps={{ 'aria-label': 'A' } 
      />
      <Radio 
        checked={selectedValueB}
        onChange={handleChangeTwo}
        value="b"
        name="radio-button-demo"
        inputProps={{ 'aria-label': 'B' }}
      />
    </>`}</code>
  <code className='language-javascript'>{`
  );
}`}</code>
      </pre>
    </div>
  );
}

export { MatRadio, MatRadioCode };