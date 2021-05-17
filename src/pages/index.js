import * as React from "react"
import { Link } from "gatsby"
import Header from "../components/Header/Header";
import Info from "../components/Info/Info";
import Contact from "../components/Contact/Contact";
// markup
const IndexPage = () => {
  return (
    
    <main>
      
      <title>Home Page</title>
    
      <Header/>
      
     <Info/>
     <Contact/>
    
   
      {/* <Link to="/home/">Contact</Link> */}

     
      
    </main>
  )
}

export default IndexPage
