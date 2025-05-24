import BackgroundImage from "./assets/temp.jpg"
import "./App.css";

function App() {

  return (
    <main className="container">
      <div className="background-props">
        <img src={BackgroundImage} className="background-image" />
      </div>

    </main>
  );
}

export default App;
