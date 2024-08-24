import {BrowserRouter } from 'react-router-dom'
import {About , Contact  ,Hero , Tech , Navbar , StarsCanvas , Works , Experience} from './components';

const App = () => {
  return (
    <BrowserRouter>
      <div className=' relative z-0 bg-sun'>
        <div className='bg-space bg-cover bg-no-repeat bg-center'>
          <Navbar  />
          <Hero />
        </div>
        {/* <Experience /> */}
        <Tech />
        <Works />
        {/* <Feedbacks /> */}
        <div className='relative z-1'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;