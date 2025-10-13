import { Route, Routes } from "react-router-dom"
import NavBar from "./Components/NavBar/NavBar"
import Home from "./Pages/Home/Home"
import Video from "./Pages/VideoPlayer/Video"
import { useState } from "react"

function App() {
  
  const[sidebar,setSidebar]=useState(true)

  return (
    <>
    <NavBar setSidebar={setSidebar} />
    <Routes>
      <Route path="/" element={<Home   sidebar={sidebar} />}></Route>
      <Route path="/video/:categoryId/:videoId" element={<Video/>}></Route>
    </Routes>
    </>
  )
}

export default App
