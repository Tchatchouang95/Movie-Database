import Header from "./components/Header";
import Footer from "./components/Footer"
import HomePage from "./components/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {

  return (
    <div>
      <Header />
      <HomePage />
      <Footer />
    </div>
  )
}

export default App
