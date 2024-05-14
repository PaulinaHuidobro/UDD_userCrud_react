import { Route, Routes } from "react-router-dom"
import { HomePage, CreatePage, EditPage, NotFound } from '../views/indexViews'
import { Footer } from "../components/footer/Footer.jsx"


export const RouterApp = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/user/create' element={<CreatePage />}/> 
                <Route path='/user/edit/:id' element={<EditPage />} />
                <Route path='/footer' element={<Footer />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </>
    )
}