import Aboutsection from "./Components/Aboutsection/Aboutsection"
import Footsection from "./Components/Footersection/Footsection"
import Herosection from "./Components/Herosection/Herosection"
import Nav from "./Components/Navigation/Nav"
import Partnersection from "./Components/Partnersection/Partnersection"
import Production from "./Components/Productsection/Production"


const App = () => {
  return (
    <div>
      <Nav />
      <Herosection />
      <Production />
      <Aboutsection />
      <Partnersection />
      <Footsection />
    </div>
  )
}

export default App