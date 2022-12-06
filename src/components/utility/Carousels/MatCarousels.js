import React, { useEffect } from 'react';
import MatAutoSlidingCarousels from './MatAutoSlidingCarousels';
import MatMobileModeCarousels from './MatMobileModeCarousels';
import Prism from "prismjs";
import '../../prism.css';

function MatCarousels() {
  return (
    <div className='demo-wrapper'>
      <div><strong>Auto Sliding Carousel</strong></div>
      <MatAutoSlidingCarousels />
      <div><strong>Mobile mode Carousels(no autoplay)</strong></div>
      <MatMobileModeCarousels />
      <div className='compo-description'>
        <h4>Description</h4>
        <p>Carousel, A slideshow component for cycling through elements—images or slides of text</p>
        <h5>Steps</h5>
        <ul>
          <li><strong>Step 1 :</strong> Install Dependency to your project root folder : <code>npm i --save-dev material-auto-rotating-carousel</code><br/>
          And <code>npm i --save-dev react-swipeable-views;</code></li>
          <li><strong>Step 2 :</strong> Import components, AutoRotatingCarousel: <code>{`import { AutoRotatingCarousel } from 'material-auto-rotating-carousel'`};</code><br/>
          For Slide: <code>{`import { Slide } from 'material-auto-rotating-carousel';`}</code></li>
          <li><strong>Step 3 :</strong> Refer JSX code under the 'Code' tab, to understand the usage of component.</li>
        </ul>
      </div>
    </div>
  );
}

function MatCarouselsCode() {
  useEffect(()=> Prism.highlightAll(), []);
  return (
    <div className='jsx-code-wrapper'>
      <h4>JSX</h4>
      <pre style={{marginRight: '20px', background: '#fff'}}>
        <code className='language-javascript'>{`function MatAutoSlidingCarousels() {
  const [state, setState] = useState(true);

  return (`}</code> 
  <code  className='language-markup'>{`
    <div style={{ position: 'relative', width: '100%', marginTop:'10px' }}>
      <Button onClick={() => setState({ open: true })}>Open carousel</Button>
      <AutoRotatingCarousel
        label='Get started'
        open={state.open}
        onClose={() => setState({ open: false })}
        onStart={() => setState({ open: false })}
        style={{ position: 'absolute' }}
      >
        <Slide
          media={<img src='http://www.icons101.com/icon_png/size_256/id_79394/youtube.png' />}
          mediaBackgroundStyle={{ backgroundColor: red[400] }}
          style={{ backgroundColor: red[600] }}
          title='This is a very cool feature'
          subtitle='Just using this will blow your mind.'
        />
        <Slide
          media={<img src='http://www.icons101.com/icon_png/size_256/id_80975/GoogleInbox.png' />}
          mediaBackgroundStyle={{ backgroundColor: blue[400] }}
          style={{ backgroundColor: blue[600] }}
          title='Ever wanted to be popular?'
          subtitle='Well just mix two colors and your are good to go!'
        />
        <Slide
          media={<img src='http://www.icons101.com/icon_png/size_256/id_76704/Google_Settings.png' />}
          mediaBackgroundStyle={{ backgroundColor: green[400] }}
          style={{ backgroundColor: green[600] }}
          title='May the force be with you'
          subtitle='The Force is a metaphysical and ubiquitous power in the Star Wars fictional universe.'
        />
      </AutoRotatingCarousel>
    </div>`}</code>
    <code className='language-javascript'>{`
  );
}`}
    </code>
  </pre>
  </div>
  );
}

export { MatCarousels, MatCarouselsCode};