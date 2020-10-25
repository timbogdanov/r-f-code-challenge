import Plan from './components/Plan/Plan';
import Profile from './components/Profile/Profile';
import Pricing from './components/Pricing/Pricing';

import style from './App.module.css';

function App() {
  return (
    <div className={style.app}>
      <Plan />

      <div className={style.container}>
        <Profile />
        <Pricing />
      </div>
    </div>
  );
}

export default App;
