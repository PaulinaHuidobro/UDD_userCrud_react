import Navbar from "./components/navbar/Navbar"
import { RouterApp } from "./routes/RouterApp"
import { Footer } from "./components/footer/Footer"
import Home from "./views/home/Home"



export const App = () => {
  return (
    <>
      <Navbar />
      <RouterApp />
      <Footer />
    </>
  )
}