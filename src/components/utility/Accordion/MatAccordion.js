import React, { useEffect } from 'react';
import ControlledAccordionPanels from './MatControlledAccordion';
import CustomizedAccordionPanels from './MatCustomizedAccodion';

import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Prism from "prismjs";
import '../../prism.css';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

function MatAccordion() {
  const classes = useStyles();
  return (
    <div className='demo-wrapper'>
      <div><strong>Simple Expansion Panel</strong></div>
      <div style={{padding:'24px', background:'#f5f5f5'}}>
        <div className={classes.root}>
          <ExpansionPanel>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>Expansion Panel 1</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                sit amet blandit leo lobortis eget.
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography className={classes.heading}>Expansion Panel 2</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                sit amet blandit leo lobortis eget.
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel disabled>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3a-content"
              id="panel3a-header"
            >
              <Typography className={classes.heading}>Disabled Expansion Panel</Typography>
            </ExpansionPanelSummary>
          </ExpansionPanel>
        </div>
      </div>
      <div style={{marginTop: '10px'}}><strong>Controlled Accordion Panel</strong></div>
      <div style={{padding:'24px', background:'#f5f5f5'}}>
        <ControlledAccordionPanels/>
      </div>
      <div style={{marginTop: '10px'}}><strong>Customized Accordion Panel</strong></div>
      <div style={{padding:'24px', background:'#f5f5f5'}}></div>
      <div style={{padding:'24px', background:'#f5f5f5'}}>
        <CustomizedAccordionPanels />
      </div>
      <div className='compo-description'>
        <h4>Description</h4>
        <p>An Accordion/Expandable panel is a lightweight container that may either stand alone or be connected to a larger surface, such as a card.</p>
        <h5>Steps</h5>
        <ul>
          <li><strong>Step 1 :</strong> Install Dependency to your project root folder : <code>npm install @material-ui/core --save-dev</code></li>
          <li><strong>Step 2 :</strong> Import components, ExpansionPanel: <code>import ExpansionPanel from '@material-ui/core/ExpansionPanel';</code><br/>
          For ExpansionPanelSummary: <code>import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';</code><br/>
          For ExpansionPanelDetails: <code>import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';</code><br/>
          For Typography: <code>import Typography from '@material-ui/core/Typography';</code><br/>
          For ExpandMoreIcon: <code>import ExpandMoreIcon from '@material-ui/icons/ExpandMore';</code></li>
          <li><strong>Step 3 :</strong> Refer JSX code under the 'Code' tab, to understand the usage of component.</li>
        </ul>
      </div>
    </div>
  );
}

function MatAccordionCode() {
  useEffect(()=> Prism.highlightAll(), []);
  return (
    <div className='jsx-code-wrapper'>
      <h4>JSX</h4>
      <pre style={{marginRight: '20px', background: '#fff'}}>
        <code className='language-javascript'>{`function SimpleExpansionPanel() {
  return (`}</code>
        <code className='language-markup'>{`
    <div className={yourOwnContainerClass}>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Expansion Panel 1</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Expansion Panel 2</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel disabled>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography className={classes.heading}>Disabled Expansion Panel</Typography>
        </ExpansionPanelSummary>
      </ExpansionPanel>
    </div>`}</code>
    <code className='language-javascript'>{`
  );
}`}</code>
  </pre>
  </div>
  )
}

export { MatAccordion, MatAccordionCode };