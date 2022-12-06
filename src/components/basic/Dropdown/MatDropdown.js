import React, { useState, useEffect } from 'react';
import Prism from "prismjs";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import clsx from 'clsx';
import Input from '@material-ui/core/Input';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import Chip from '@material-ui/core/Chip';
import '../../prism.css';
import { flushSync } from 'react-dom';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const useStyles2 = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: 2,
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}


function MatDropdown() {
  const classes = useStyles();
  const [age, setAge] = useState('');
  const [state, setState] = useState({
    age: '',
    name: 'hai',
  });

  // const handleChange = (event) => {
  //   setAge(event.target.value);
  // };

  // const handleChange2 = (event) => {
    // const name = event.target.name;
    // setState({
    //   ...state,
    //   [name]: event.target.value,
    // });
  // };


  const classes2 = useStyles2();
  const theme = useTheme();
  const [personName, setPersonName] = useState([]);

  // const handleChange3 = (event) => {
  //   setPersonName(event.target.value);
  // };

  const handleChangeMultiple = (event) => {
    const { options } = event.target;
    const value = [];
    for (let i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    setPersonName(value);
  };

  // batching

  
const handleChangeAll = (event) =>{
  flushSync(() => {
    // handle Change
    setAge(event.target.value);
  });
  flushSync(() => {
    // handle change 2
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,

    });

    flushSync(() => {
      // handle change 3
      setPersonName(event.target.value);
    });

//     flushSync(() => {
//       // handle change multiple
//       const { options } = event.target;
//     const value = [];
//     for (let i = 0, l = options.length; i < l; i += 1) {
//       if (options[i].selected) {
//         value.push(options[i].value);
//       }
//     }
//     setPersonName(value);
//     });
  });
}

return(
  <div className='demo-wrapper'>
    <div><strong>Simple Dropdowns(all are bound to same value)</strong></div>
    <div style={{marginRight:'220px'}}>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          onChange={handleChangeAll}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-helper-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={age}
          onChange={handleChangeAll}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <FormHelperText>Some important helper text</FormHelperText>
      </FormControl>
      <FormControl className={classes.formControl}>
        <Select
          value={age}
          onChange={handleChangeAll}
          displayEmpty
          className={classes.selectEmpty}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <FormHelperText>Without label</FormHelperText>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel shrink id="demo-simple-select-placeholder-label-label">
          Age
        </InputLabel>
        <Select
          labelId="demo-simple-select-placeholder-label-label"
          id="demo-simple-select-placeholder-label"
          value={age}
          onChange={handleChangeAll}
          displayEmpty
          className={classes.selectEmpty}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <FormHelperText>Label + placeholder</FormHelperText>
      </FormControl>
      <FormControl className={classes.formControl} disabled>
        <InputLabel id="demo-simple-select-disabled-label">Name</InputLabel>
        <Select
          labelId="demo-simple-select-disabled-label"
          id="demo-simple-select-disabled"
          value={age}
          onChange={handleChangeAll}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <FormHelperText>Disabled</FormHelperText>
      </FormControl>
      <FormControl className={classes.formControl} error>
        <InputLabel id="demo-simple-select-error-label">Name</InputLabel>
        <Select
          labelId="demo-simple-select-error-label"
          id="demo-simple-select-error"
          value={age}
          onChange={handleChangeAll}
          renderValue={(value) => `⚠️  - ${value}`}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <FormHelperText>Error</FormHelperText>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-readonly-label">Name</InputLabel>
        <Select
          labelId="demo-simple-select-readonly-label"
          id="demo-simple-select-readonly"
          value={age}
          onChange={handleChangeAll}
          inputProps={{ readOnly: true }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <FormHelperText>Read only</FormHelperText>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-autowidth-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={age}
          onChange={handleChangeAll}
          autoWidth
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <FormHelperText>Auto width</FormHelperText>
      </FormControl>
      <FormControl className={classes.formControl}>
        <Select
          value={age}
          onChange={handleChangeAll}
          displayEmpty
          className={classes.selectEmpty}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="" disabled>
            Placeholder
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <FormHelperText>Placeholder</FormHelperText>
      </FormControl>
      <FormControl required className={classes.formControl}>
        <InputLabel id="demo-simple-select-required-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-required-label"
          id="demo-simple-select-required"
          value={age}
          onChange={handleChangeAll}
          className={classes.selectEmpty}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <FormHelperText>Required</FormHelperText>
      </FormControl>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={age}
          onChange={handleChangeAll}
          label="Age"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="filled" className={classes.formControl}>
        <InputLabel id="demo-simple-select-filled-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={age}
          onChange={handleChangeAll}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </div><br/><br/>
    <div><strong>Native Dropdowns, for improved user experience in mobile devices</strong></div>
    <div style={{marginRight:'220px'}}>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="age-native-simple">Age</InputLabel>
        <Select
          native
          value={state.age}
          onChange={handleChangeAll}
          inputProps={{
            name: 'age',
            id: 'age-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="age-native-helper">Age</InputLabel>
        <NativeSelect
          value={state.age}
          onChange={handleChangeAll}
          inputProps={{
            name: 'age',
            id: 'age-native-helper',
          }}
        >
          <option aria-label="None" value="" />
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </NativeSelect>
        <FormHelperText>Some important helper text</FormHelperText>
      </FormControl>
      <FormControl className={classes.formControl}>
        <NativeSelect
          value={state.age}
          onChange={handleChangeAll}
          name="age"
          className={classes.selectEmpty}
          inputProps={{ 'aria-label': 'age' }}
        >
          <option value="">None</option>
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </NativeSelect>
        <FormHelperText>With visually hidden label</FormHelperText>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel shrink htmlFor="age-native-label-placeholder">
          Age
        </InputLabel>
        <NativeSelect
          value={state.age}
          onChange={handleChangeAll}
          inputProps={{
            name: 'age',
            id: 'age-native-label-placeholder',
          }}
        >
          <option value="">None</option>
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </NativeSelect>
        <FormHelperText>Label + placeholder</FormHelperText>
      </FormControl>
      <FormControl className={classes.formControl} disabled>
        <InputLabel htmlFor="name-native-disabled">Name</InputLabel>
        <NativeSelect
          value={state.name}
          onChange={handleChangeAll}
          inputProps={{
            name: 'name',
            id: 'name-native-disabled',
          }}
        >
          <option value="">None</option>
          <optgroup label="Author">
            <option value="hai">Hai</option>
          </optgroup>
          <optgroup label="Contributors">
            <option value="olivier">Olivier</option>
            <option value="kevin">Kevin</option>
          </optgroup>
        </NativeSelect>
        <FormHelperText>Disabled</FormHelperText>
      </FormControl>
      <FormControl className={classes.formControl} error>
        <InputLabel htmlFor="name-native-error">Name</InputLabel>
        <NativeSelect
          value={state.name}
          onChange={handleChangeAll}
          name="name"
          inputProps={{
            id: 'name-native-error',
          }}
        >
          <optgroup label="Author">
            <option value="hai">Hai</option>
          </optgroup>
          <optgroup label="Contributors">
            <option value="olivier">Olivier</option>
            <option value="kevin">Kevin</option>
          </optgroup>
        </NativeSelect>
        <FormHelperText>Error</FormHelperText>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="uncontrolled-native">Name</InputLabel>
        <NativeSelect
          defaultValue={30}
          inputProps={{
            name: 'name',
            id: 'uncontrolled-native',
          }}
        >
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </NativeSelect>
        <FormHelperText>Uncontrolled</FormHelperText>
      </FormControl>
      <FormControl className={classes.formControl}>
        <NativeSelect
          className={classes.selectEmpty}
          value={state.age}
          name="age"
          onChange={handleChangeAll}
          inputProps={{ 'aria-label': 'age' }}
        >
          <option value="" disabled>
            Placeholder
          </option>
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </NativeSelect>
        <FormHelperText>Placeholder</FormHelperText>
      </FormControl>
      <FormControl required className={classes.formControl}>
        <InputLabel htmlFor="age-native-required">Age</InputLabel>
        <Select
          native
          value={state.age}
          onChange={handleChangeAll}
          name="age"
          inputProps={{
            id: 'age-native-required',
          }}
        >
          <option aria-label="None" value="" />
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </Select>
        <FormHelperText>Required</FormHelperText>
      </FormControl>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-age-native-simple">Age</InputLabel>
        <Select
          native
          value={state.age}
          onChange={handleChangeAll}
          label="Age"
          inputProps={{
            name: 'age',
            id: 'outlined-age-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </Select>
      </FormControl>
      <FormControl variant="filled" className={classes.formControl}>
        <InputLabel htmlFor="filled-age-native-simple">Age</InputLabel>
        <Select
          native
          value={state.age}
          onChange={handleChangeAll}
          inputProps={{
            name: 'age',
            id: 'filled-age-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </Select>
      </FormControl>
    </div>

    <div><strong>Multi Select Dropdowns</strong></div>
    <div style={{marginRight:'220px'}}>
      <FormControl className={classes2.formControl}>
        <InputLabel id="demo-mutiple-name-label">Name</InputLabel>
        <Select
          labelId="demo-mutiple-name-label"
          id="demo-mutiple-name"
          multiple
          value={personName}
          onChange={handleChangeAll}
          input={<Input />}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem key={name} value={name} style={getStyles(name, personName, theme)}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-mutiple-checkbox-label">Tag</InputLabel>
        <Select
          labelId="demo-mutiple-checkbox-label"
          id="demo-mutiple-checkbox"
          multiple
          value={personName}
          onChange={handleChangeAll}
          input={<Input />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={personName.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-mutiple-chip-label">Chip</InputLabel>
        <Select
          labelId="demo-mutiple-chip-label"
          id="demo-mutiple-chip"
          multiple
          value={personName}
          onChange={handleChangeAll}
          input={<Input id="select-multiple-chip" />}
          renderValue={(selected) => (
            <div className={classes.chips}>
              {selected.map((value) => (
                <Chip key={value} label={value} className={classes.chip} />
              ))}
            </div>
          )}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem key={name} value={name} style={getStyles(name, personName, theme)}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl className={clsx(classes.formControl, classes.noLabel)}>
        <Select
          multiple
          displayEmpty
          value={personName}
          onChange={handleChangeAll}
          input={<Input />}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <em>Placeholder</em>;
            }

            return selected.join(', ');
          }}
          MenuProps={MenuProps}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem disabled value="">
            <em>Placeholder</em>
          </MenuItem>
          {names.map((name) => (
            <MenuItem key={name} value={name} style={getStyles(name, personName, theme)}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel shrink htmlFor="select-multiple-native">
          Native
        </InputLabel>
        <Select
          multiple
          native
          value={personName}
          onChange={handleChangeMultiple}
          inputProps={{
            id: 'select-multiple-native',
          }}
        >
          {names.map((name) => (
            <option key={name} value={name}>
              {name}
            </option>
          ))}
        </Select>
      </FormControl>
  </div>
  <div className='compo-description'>
      <h4>Description</h4>
      <p>Dropdown components are used for collecting user provided information from a list of options.</p>
      <h5>Steps</h5>
      <ul>
        <li><strong>Step 1 :</strong> Install Dependency in your project root folder : <code>npm install @material-ui/core --save-dev</code></li>
        <li><strong>Step 2 :</strong> Import Select and Dropdown related components: <code>import Select from '@material-ui/core/Select';</code><br />
        For MenuItem: <code>import MenuItem from '@material-ui/core/MenuItem';</code><br/>
        For FormHelperText: <code>import FormHelperText from '@material-ui/core/FormHelperText';</code><br/>
        For FormControl: <code>import FormControl from '@material-ui/core/FormControl';</code><br/>
        For NativeSelect: <code>import NativeSelect from '@material-ui/core/NativeSelect';</code></li>
        <li><strong>Step 3 :</strong> Refer JSX code under the 'Code' tab, to understand the usage of component.</li>
    </ul>
    </div>
  </div>
);
}

function MatDropdownCode() {
useEffect(()=> Prism.highlightAll(), []);
return (
  <div className='jsx-code-wrapper'>
    <h4>JSX</h4>
    <pre style={{marginRight: '20px', background: '#fff'}}>
      <code className='language-javascript'>{`function Dropdown() {
const [age, setAge] = useState('');
const handleChange = (event) => {
  setAge(event.target.value);
};
return (`}</code>
<code className='language-markup'>{`
  <>
    <FormControl className={classes.formControl}>
      <InputLabel id="demo-simple-select-label">Age</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={age}
        onChange={handleChangeAll}
      >
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>

    <FormControl className={classes.formControl}>
        <InputLabel htmlFor="age-native-helper">Age</InputLabel>
        <NativeSelect
          value={state.age}
          onChange={handleChangeAll}
          inputProps={{
            name: 'age',
            id: 'age-native-helper',
          }}
        >
          <option aria-label="None" value="" />
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </NativeSelect>
        <FormHelperText>Some important helper text</FormHelperText>
      </FormControl>
  </>`}</code>
<code className='language-javascript'>{`
  );
}`}</code>
    </pre>
  </div>
);
}
export { MatDropdown, MatDropdownCode };