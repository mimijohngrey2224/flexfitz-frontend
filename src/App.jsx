import Header from "./components/Header"
import FirstPage from "./components/FirstPage"
import { firstPage } from "./data/EcomData"
import { thirdPage } from "./data/EcomData"
import { secondPage } from "./data/EcomData"
import Shop from "./components/pages/Shop"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import ThirdPage from "./components/ThirdPage"
import SecondPage from "./components/SecondPage"
import Footer from "./components/pages/Footer"

function App() {
  

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={
          <>
          <FirstPage firstPage={firstPage} />
          <ThirdPage thirdPage={thirdPage}/>
          <SecondPage secondPage={secondPage} />
          </>
        }/>
        <Route path="/shop" element={<Shop />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
