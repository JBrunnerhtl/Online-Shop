import Navbar from "./Navbar/Navbar.tsx"
import {type NavbarItems} from "./Type.ts"
function App() {

  const navbarElements: NavbarItems[] = [
      {id: 1,name: "Home", url: "/"},
  ]
  return (
    <>
        <Navbar items={navbarElements} />
    </>
  )
}

export default App
