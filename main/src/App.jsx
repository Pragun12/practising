import { useEffect, useState } from 'react'
import classNames from 'classnames'
import s from './App.module.css'
import { SidePanel } from './components/SidePanel';

function App() {
  const [open, setOpen] = useState(false);

  const openSidePanel = () => {
    setOpen(prev => !prev);
  };

  useEffect(() => {
    const handleMessage = (event) => {
      if (event.data.name === 'from-side-panel') {
        console.log("event data: ",event.data);
      }
    };
    window.addEventListener('message', handleMessage);
    return () => {
      window.removeEventListener('message', handleMessage);
    };
  },[]);

  return (
    <div className={s.main}>
      <div className={s.mainContent}>
        <h1>Main</h1>
        <div>
          <button onClick={openSidePanel}>Open Side panel</button>
        </div>
      </div>
      <div className={classNames(s.sidePanel, {[s.openSidePanel]: open })}>
        <SidePanel 
          courseId="123"
          resourceId="345"
          url="http://externalapp-local.com:3000/"
          onClose={openSidePanel}
        />
      </div>
    </div>
  )
}

export default App
