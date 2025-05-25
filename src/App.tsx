import BackgroundImage from "./assets/temp.jpg"
import "./App.css";

function App() {

  return (
    <main className="container">
      <div className="background-props">
        <img src={BackgroundImage} className="background-image" />
      </div>

      <div className="container2">
        <button type="button" className="open-btn">
          Open
        </button>
      </div>
      
    </main>
  );
}

export default App;
