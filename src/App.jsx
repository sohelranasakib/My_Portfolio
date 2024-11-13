import RootLayout from "./components/RootLayout"
import About from "./pages/About"
import Contuct from "./pages/Contuct"
import Home from "./pages/Home"
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import Portfolio from "./pages/Portfolio"
import Blog from "./pages/Blog"

let router = createBrowserRouter(createRoutesFromElements(
  <Route element={<RootLayout/>}>
    <Route index element={<Home/>}></Route>
    <Route path="/about" element={<About/>}></Route>
    <Route path="/contuct" element={<Contuct/>}></Route>
    <Route path="/portfolio" element={<Portfolio/>}></Route>
    <Route path="/blog" element={<Blog/>}></Route>
  </Route>
))

function App() {
  

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
