import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import Home from "./pages/Home"
import Header from "./components/Header"
import Footer from './components/Footer'
import UsersProfile from "./components/UsersProfile"
import NotFound from "./pages/NotFound"

function App() {
  return (
    <Router>
      <div className=" flex flex-col justify-between h-screen">
        <Header />
        <main className="container mx-auto px03 pb-12">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/notfound" element={<NotFound />} />
            <Route path='/user/:name' element={<UsersProfile />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
