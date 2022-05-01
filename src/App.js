import "./App.css";
import Search from "./Search";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import MainWindow from "./MainWindow";

export default function App() {
  return (
    <Container>
      <div className="weather-app">
        <div className="weather-frame">
          <Search />
          <MainWindow />
          <div>
            <a href="https://github.com/dominikawalska/weather-react-app">
              Open-sourced code
            </a>{" "}
            by <a href="https://github.com/dominikawalska">Dominika Walska</a>
          </div>
        </div>
      </div>
    </Container>
  );
}
