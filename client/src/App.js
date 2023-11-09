import "./App.css"
import Navbar from "./Components/Navbar/Navbar"
import MainRoutes from "./Routes/MainRoutes"
import Footer from "./Components/Footer/Footer"

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainRoutes />
      <Footer />
    </div>
  )
}

export default App;
