import "./App.css";
import Search from "./Search";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";

export default function App() {
  return (
    <Container>
      <div className="weather-app">
        <div className="weather-frame">
          <Search />
        </div>
      </div>
    </Container>
  );
}
