import "./App.css";
import { Cards } from "./ui/cards/Cards";

function App() {
  return (
    <Cards title="Card title" imgSrc="...">
      <p className="card-text">
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </p>
    </Cards>
  );
}

export default App;
