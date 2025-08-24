import Navbar from "./Navbar/Navbar.tsx"
import {type NavbarItems} from "./Type.ts"
import {BrowserRouter as Router,Route, Routes} from "react-router-dom"
import Products from "./Products/Products.tsx";
function App() {

  const navbarElements: NavbarItems[] = [
      {id: 1,name: "Home", url: "/"},
      {id: 2,name: "Basket", url: "/basket"},
      {id: 3,name: "Contact", url: "/contact"},

  ]
  return (
    <>
        <Router>
        <Navbar items={navbarElements} />
            <div>
                <Routes>
                    <Route path="/" element = {<Products/>}></Route>
                </Routes>
            </div>
        </Router>
    </>
  )
}

export default App
