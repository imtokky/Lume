import { getCurrentWindow } from '@tauri-apps/api/window';

import BackgroundImage from "./assets/temp.jpg"
import "./App.css";

function App() {
  const handleMaximize = async () => {
    try {
      const appWindow = getCurrentWindow();
      await appWindow.toggleMaximize();
    } catch (error) {
      console.error('Failed to maximize window:', error);
    }
  };

  return (
    <main className="container">
      <div className="background-props">
        <img src={BackgroundImage} className="background-image" />
      </div>

      <div className="container2">
        <button type="button" className="open-btn" onClick={handleMaximize}>
          Open
        </button>
      </div>
      
    </main>
  );
}

export default App;
