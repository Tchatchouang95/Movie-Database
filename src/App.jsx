import Header from "./components/Header";
import Footer from "./components/Footer"
import MovieList from "./components/MovieList";
import HomePage from "./components/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MovieDetails from "./components/MovieDetails";


function App() {

  return (
    <div>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/details/:id" element={<MovieDetails />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  )
}

export default App
