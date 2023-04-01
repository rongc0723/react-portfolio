import './App.css';
import AppRoutes from './AppRoutes';
import Particles from 'react-tsparticles'
import { useCallback } from 'react'
import { loadFull } from 'tsparticles'
import particlesConfig from './config/particlesConfig';


function App() {
  const particlesInit = useCallback(async engine => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async engine => {
     console.log(engine)
     await loadFull(engine);
  }, []);

  return (
    <div className="App">
      <Particles id="tsparticles" init={particlesInit} loaded={particlesLoaded} options={particlesConfig} />
      <AppRoutes/>
    </div>
  );
}

export default App;
