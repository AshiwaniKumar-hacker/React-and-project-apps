import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css";
import ClockHeading from "./components/AppName";
import Slogan from "./components/Detail";
import CurrentTime from "./components/ClockTime";

function App() {
  return (
    <center>
      <ClockHeading></ClockHeading>
      <Slogan></Slogan>
      <CurrentTime></CurrentTime>
    </center>
  )
}

export default App
