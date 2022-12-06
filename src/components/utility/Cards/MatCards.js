import React, { useEffect } from 'react';
import RecipeReviewCard from './MatCardComplexInteraction';
import MediaCard from './MatCardWithImage';
import MediaControlCard from './MatMediaControl';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Prism from "prismjs";
import '../../prism.css';


const useStyles = makeStyles({
  root: {
    maxWidth: 250,
    marginTop: '10px'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

function MatCards() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <div className='demo-wrapper'>
      <div className='container'>
        <div className='row'>
          <div className='col-xs-12'>
            <div><strong>Simple Card</strong></div>
            <Card className={classes.root} variant="outlined" >
              <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                  Word of the Day
                </Typography>
                <Typography variant="h5" component="h2">
                  be{bull}nev{bull}o{bull}lent
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                  adjective
                </Typography>
                <Typography variant="body2" component="p">
                  well meaning and kindly.
                  <br />
                  {'"a benevolent smile"'}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </div>
          <div className='col-xs-12' style={{marginLeft:'50px'}}>
            <div style={{marginBottom: '10px'}}><strong>Card using an image to reinforce the content.</strong></div>
            <MediaCard/>
          </div>
        </div>
        <div className='row' style={{marginTop:'30px'}}>
          <div className='col-xs-12'>
            <div style={{marginTop: '10px', marginBottom: '20px'}}><strong>Card with Complex Interaction</strong></div>
            <RecipeReviewCard/>
          </div>
          <div className='col-xs-12' style={{marginTop:'10px', marginLeft:'50px'}}>
            <div style={{ marginBottom: '20px'}}><strong>Card with Media Controls</strong></div>
            <MediaControlCard />
          </div>
        </div>
      </div>
      <div className='compo-description'>
        <h4>Description</h4>
        <p>Cards contain content and actions about a single subject.</p>
        <h5>Steps</h5>
        <ul>
          <li><strong>Step 1 :</strong> Install Dependency to your project root folder : <code>npm install @material-ui/core --save-dev</code></li>
          <li><strong>Step 2 :</strong> Import components, Card: <code>import Card from '@material-ui/core/Card';</code><br/>
          For CardActions: <code>import CardActions from '@material-ui/core/CardActions';</code><br/>
          For CardContent: <code>import CardContent from '@material-ui/core/CardContent';</code></li>
          <li><strong>Step 3 :</strong> Refer JSX code under the 'Code' tab, to understand the usage of component.</li>
        </ul>
      </div>
    </div>
  );
}

function MatCardsCode() {
  useEffect(()=> Prism.highlightAll(), []);

  return (
    <div className='jsx-code-wrapper'>
      <h4>JSX</h4>
      <pre style={{marginRight: '20px', background: '#fff'}}>
        <code className='language-markup'>{`<> 
  <label>Basic Card</label>
  <Card variant="outlined" >
    <CardContent>
      <Typography color="textSecondary" gutterBottom>
        Word of the Day
      </Typography>
      <Typography variant="h5" component="h2">
        be . nev . o . lent
      </Typography>
      <Typography color="textSecondary">
        adjective
      </Typography>
      <Typography variant="body2" component="p">
        well meaning and kindly.
        <br />
        {'"a benevolent smile"'}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions>
  </Card>

  <label>Media Control Card</label>
  <Card className={classes.root}>
    <div className={classes.details}>
      <CardContent className={classes.content}>
        <Typography component="h5" variant="h5">
          Live From Space
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          Mac Miller
        </Typography>
      </CardContent>
      <div className={classes.controls}>
        <IconButton aria-label="previous">
          {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
        </IconButton>
        <IconButton aria-label="play/pause">
          <PlayArrowIcon className={classes.playIcon} />
        </IconButton>
        <IconButton aria-label="next">
          {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
        </IconButton>
      </div>
    </div>
    <CardMedia
      className={classes.cover}
      image={liveFromSpace}
      title="Live from space album cover"
    />
  </Card>
</>`}</code>
  </pre>
  </div>
  );
}

export { MatCards, MatCardsCode };