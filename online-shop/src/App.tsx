import Navbar from "./Navbar/Navbar.tsx"
import {type NavbarItems} from "./Type.ts"
import Card from "./Card/Card.tsx"
function App() {

  const navbarElements: NavbarItems[] = [
      {id: 1,name: "Home", url: "/"},
      {id: 2,name: "Basket", url: "/basket"},
      {id: 3,name: "Contact", url: "/contact"},

  ]
  return (
    <>
        <Navbar items={navbarElements} />
        <Card img = "https://placehold.co/150x150" description = "New Product" price = {15}/>
    </>
  )
}

export default App
