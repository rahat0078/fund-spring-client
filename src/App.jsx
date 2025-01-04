import { Outlet } from "react-router-dom"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import { Toaster } from "react-hot-toast"

function App() {

  return (
    <>
      <div className="font-roboto">
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
        <Toaster />

      </div>
    </>
  )
}

export default App
