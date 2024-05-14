import Navbar from "./components/navbar/Navbar"
import { RouterApp } from "./routes/RouterApp"
import { Footer } from "./components/footer/Footer"



export const App = () => {
  return (
    <>
      <Navbar />
    
      <RouterApp />
      <Footer />
    </>
  )
}