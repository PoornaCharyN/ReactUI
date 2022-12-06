import React, { useState, useEffect } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Prism from "prismjs";
import '../../prism.css';


const LightTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: theme.palette.common.white,
    color: 'rgba(0, 0, 0, 0.87)',
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
}))(Tooltip);

const useStylesBootstrap = makeStyles((theme) => ({
  arrow: {
    color: theme.palette.common.black,
  },
  tooltip: {
    backgroundColor: theme.palette.common.black,
  },
}));

function BootstrapTooltip(props) {
  const classes = useStylesBootstrap();

  return <Tooltip arrow classes={classes} {...props} />;
}

const HtmlTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: '#f5f5f9',
    color: 'rgba(0, 0, 0, 0.87)',
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: '1px solid #dadde9',
  },
}))(Tooltip);

const useStyles = makeStyles((theme) => ({
  fab: {
    margin: theme.spacing(2),
  },
  root: {
    width: 500,
  }
}));
function MatTooltip() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };

  return (
    <div className='demo-wrapper'>
      <div><strong>Simple Tooltips</strong></div>
      <div>
        <Tooltip title="Delete">
          <IconButton aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Add" aria-label="add">
          <Fab color="primary" className={classes.fab}>
            <AddIcon />
          </Fab>
        </Tooltip>
        <Tooltip title="Add" aria-label="add">
          <Fab color="secondary" className={classes.fab}>
            <AddIcon />
          </Fab>
        </Tooltip>
      </div>
      <div><strong>Positioned Tooltips</strong></div>
      <div className={classes.root} style={{marginTop:'10px'}}>
        <Grid container justify="center">
          <Grid item>
            <Tooltip title="Add" placement="top-start">
              <Button>top-start</Button>
            </Tooltip>
            <Tooltip title="Add" placement="top">
              <Button>top</Button>
            </Tooltip>
            <Tooltip title="Add" placement="top-end">
              <Button>top-end</Button>
            </Tooltip>
          </Grid>
        </Grid>
        <Grid container justify="center">
          <Grid item xs={6}>
            <Tooltip title="Add" placement="left-start">
              <Button>left-start</Button>
            </Tooltip>
            <br />
            <Tooltip title="Add" placement="left">
              <Button>left</Button>
            </Tooltip>
            <br />
            <Tooltip title="Add" placement="left-end">
              <Button>left-end</Button>
            </Tooltip>
          </Grid>
          <Grid item container xs={6} alignItems="flex-end" direction="column">
            <Grid item>
              <Tooltip title="Add" placement="right-start">
                <Button>right-start</Button>
              </Tooltip>
            </Grid>
            <Grid item>
              <Tooltip title="Add" placement="right">
                <Button>right</Button>
              </Tooltip>
            </Grid>
            <Grid item>
              <Tooltip title="Add" placement="right-end">
                <Button>right-end</Button>
              </Tooltip>
            </Grid>
          </Grid>
        </Grid>
        <Grid container justify="center">
          <Grid item>
            <Tooltip title="Add" placement="bottom-start">
              <Button>bottom-start</Button>
            </Tooltip>
            <Tooltip title="Add" placement="bottom">
              <Button>bottom</Button>
            </Tooltip>
            <Tooltip title="Add" placement="bottom-end">
              <Button>bottom-end</Button>
            </Tooltip>
          </Grid>
        </Grid>
      </div>
      <div style={{marginTop:'10px'}}><strong>Customized Tooltips</strong></div>
      <div style={{marginTop:'10px'}}>
        <LightTooltip title="Add">
          <Button>Light</Button>
        </LightTooltip>
        <BootstrapTooltip title="Add">
          <Button>Bootstrap</Button>
        </BootstrapTooltip>
        <HtmlTooltip
          title={
            <React.Fragment>
              <Typography color="inherit">Tooltip with HTML</Typography>
              <em>{"And here's"}</em> <b>{'some'}</b> <u>{'amazing content'}</u>.{' '}
              {"It's very engaging. Right?"}
            </React.Fragment>
          }
        >
          <Button>HTML</Button>
        </HtmlTooltip>
      </div>  
      <div style={{marginTop:'10px'}}><strong>Tooltip Triggers</strong></div>
      <div style={{marginTop:'10px'}}>
        <Grid container>
          <Grid item>
            <Tooltip disableFocusListener title="Add">
              <Button>Hover or touch</Button>
            </Tooltip>
          </Grid>
          <Grid item>
            <Tooltip disableFocusListener disableTouchListener title="Add">
              <Button>Hover</Button>
            </Tooltip>
          </Grid>
          <Grid item>
            <ClickAwayListener onClickAway={handleTooltipClose}>
              <div>
                <Tooltip
                  PopperProps={{
                    disablePortal: true,
                  }}
                  onClose={handleTooltipClose}
                  open={open}
                  disableFocusListener
                  disableHoverListener
                  disableTouchListener
                  title="Add"
                >
                  <Button onClick={handleTooltipOpen}>Click</Button>
                </Tooltip>
              </div>
            </ClickAwayListener>
          </Grid>
        </Grid>
      </div>
      <div className='compo-description'>
        <h4>Description</h4>
        <p>Tooltips display informative text when users hover over, focus on, or tap an element.</p>
        <h5>Steps</h5>
        <ul>
          <li><strong>Step 1 :</strong> Install Dependency to your project root folder : <code>npm install @material-ui/core --save-dev</code></li>
          <li><strong>Step 2 :</strong> Import components, for Tooltip: <code>import Tooltip from '@material-ui/core/Tooltip';</code><br/> 
          For Icons and Trigger Components <code>import IconButton from '@material-ui/core/IconButton';</code><br/><code>
          import DeleteIcon from '@material-ui/icons/Delete';</code><br/>
          <code>import AddIcon from '@material-ui/icons/Add';</code></li>
          <li><strong>Step 3 :</strong> Refer JSX code under the 'Code' tab, to understand the usage of component.</li>
        </ul>
      </div>
    </div>
  );
}

function MatTooltipCode() {
  useEffect(() => Prism.highlightAll(), []);
  return (
    <div className='jsx-code-wrapper'>
      <h4>JSX</h4>
      <pre style={{marginRight: '20px', background: '#fff'}}>
        <code className='language-javascript'>{
`function Tooltips() {
  return (`}</code>
  <code className='language-markup'>{`
      <>
        <Tooltip title="Delete">
          <IconButton aria-label="delete">
          <DeleteIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Add" aria-label="add">
          <Fab color="primary" className={someClass}>
          <AddIcon />
          </Fab>
        </Tooltip>
        <Tooltip title="Add" aria-label="add">
          <Fab color="secondary" className={someClass}>
          <AddIcon />
          </Fab>
        </Tooltip>

        {/*** For Positioned ***/}

        <Tooltip title="Add" placement="top-start">
          <Button>top-start</Button>
        </Tooltip>
        <Tooltip title="Add" placement="top">
          <Button>top</Button>
        </Tooltip>
        <Tooltip title="Add" placement="top-end">
          <Button>top-end</Button>
        </Tooltip>
	  </>`}</code>
  <code className='language-javascript'>{`
  );
}`}</code>
      </pre>
    </div>
  );
}

export { MatTooltip, MatTooltipCode };