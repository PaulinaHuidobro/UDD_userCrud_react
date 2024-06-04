import { Route, Routes } from "react-router-dom"
import { CreatePage, EditPage, NotFound, Reserva } from '../views/indexViews'
import { Footer } from "../components/footer/Footer.jsx"
import Home from "../views/home/Home.jsx"
import Menu from "../views/menu/Menu.jsx"



export const RouterApp = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/reservas' element={<Reserva />} />
                <Route path='/user/create' element={<CreatePage />}/> 
                <Route path='/user/edit/:id' element={<EditPage />} />
                <Route path='/menu' element={<Menu/>}/>
                <Route path='/footer' element={<Footer />} />
                <Route path='*' element={<NotFound />} />
                
            </Routes>
        </>
        
    )
}
export default Home;