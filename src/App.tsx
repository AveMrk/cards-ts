import "./App.css";
import Card from "./components/Card";

export default function App() {
  const img = "https://i.pinimg.com/170x/d3/99/e7/d399e72f62f4b62dc2fc3a8315d5cbb9.jpg";
  return (
    <div className="App">
      <div className="container">
      <Card img={img}>
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </Card>
      <Card>
        <h5 className="card-title">Special title treatment</h5>
        <p className="card-text">
          With supporting text below as a natural lead-in to additional content.
        </p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </Card>
      </div>
    </div>
  );
}