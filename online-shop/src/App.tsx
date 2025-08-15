import Navbar from "./Navbar/Navbar.tsx"
import {type NavbarItems} from "./Type.ts"
function App() {

  const navbarElements: NavbarItems[] = [
      {id: 1,name: "Home", url: "/"},
      {id: 2,name: "About", url: "/about"},
      {id: 3,name: "Contact", url: "/contact"},

  ]
  return (
    <>
        <Navbar items={navbarElements} />
    </>
  )
}

export default App
