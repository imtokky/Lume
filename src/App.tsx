import { getCurrentWindow } from '@tauri-apps/api/window';

import BackgroundImage from "./assets/temp.jpg"
import "./App.css";

function App() {
  const appWindow = getCurrentWindow();
  const closeWindow = async () => {
    try {
      appWindow.close()
    } catch (error) {
      console.error('Failed to close window:', error)
    }
  }
  const handleMaximize = async () => {
    try {
      await appWindow.toggleMaximize();
    } catch (error) {
      console.error('Failed to maximize window:', error);
    }
  };

  return (
    <main className="container">
      <div data-tauri-drag-region className="titlebar">
        <div className="titlebar-button" id="titlebar-close" onClick={closeWindow}>
          <img src="https://api.iconify.design/mdi:close.svg" alt="close" />
        </div>
      </div>

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
