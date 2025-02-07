import "./app.css";
import CurrentTime from "./components/CurrentTime";

function App() {
  return (
    <center>
      <h1 className="heading">Bharat Clock</h1>
      <p>This clock that shows the time in bharat at all times</p>
      <CurrentTime />
    </center>
  );
}

export default App;
