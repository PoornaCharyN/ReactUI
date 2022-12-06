import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import './ToggleView.css';

function ToggleView(props) {
  const [viewResize, setViewResize ] = useState(props.isViewResized);
  const matDisabled = props.materialDisabled ? props.materialDisabled : false;
  const rbDisabled = props.rbDisabled ? props.rbDisabled : false;
  useEffect(()=> {
    setViewResize(props.isViewResized);
  }, [props.isViewResized]);
  const defaultValue = props.rbDisabled ? 'material' : 'react';
  
  const classes = classNames('toggle-demo-sec', { toggleAdjust: viewResize })
  
  return (
    <div className={classes}>
      <ToggleButtonGroup 
        type="radio" 
        name="options" 
        defaultValue={defaultValue} 
        className="mb-2" 
        onChange={(ev)=> props.onChange(ev)}
      >
        <ToggleButton className='toggleView-btn' value='react' size="sm" disabled={rbDisabled}>React</ToggleButton>
        <ToggleButton  className='toggleView-btn' value='material' size="sm" disabled={matDisabled}>Material</ToggleButton>
      </ToggleButtonGroup>
      </div>
  )
}

export default ToggleView;