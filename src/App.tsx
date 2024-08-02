import {Canvas} from '@react-three/fiber';
import React from 'react';
import {Route,BrowserRouter as Router,Routes} from 'react-router-dom';
import Cube from '../src/modules/Cube';
import Page1 from '../src/modules/Page1/Page1';
import Page2 from '../src/modules/Page2/Page2';
import Page3 from '../src/modules/Page3/Page3';
import Page4 from '../src/modules/Page4/Page4';
import Page5 from '../src/modules/Page5/Page5';
import Page6 from '../src/modules/Page6/Page6';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <Canvas>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <Cube />
          </Canvas>
        } />
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/page3" element={<Page3 />} />
        <Route path="/page4" element={<Page4 />} />
        <Route path="/page5" element={<Page5 />} />
        <Route path="/page6" element={<Page6 />} />
      </Routes>
    </Router>
  );
};

export default App;