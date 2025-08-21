import Navbar from "./Navbar/Navbar.tsx"
import {type NavbarItems} from "./Type.ts"

import Products from "./Products/Products.tsx";
function App() {

  const navbarElements: NavbarItems[] = [
      {id: 1,name: "Home", url: "/"},
      {id: 2,name: "Basket", url: "/basket"},
      {id: 3,name: "Contact", url: "/contact"},

  ]
  return (
    <>
        <Navbar items={navbarElements} />
        <Products/>
    </>
  )
}

export default App
