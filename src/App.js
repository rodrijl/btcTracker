import './App.css';
import React,{useEffect} from 'react';
import BTCTracker from './components/BTCTracker'

function App() {
  useEffect(() => {
    document.getElementById('video1').play()
  },[]);
  return (
    <div>
        <video src="/images/btc.mp4" autoplay muted loop className="video" id="video1"></video>
        <BTCTracker />
    </div>
    
  );
}

export default App;
