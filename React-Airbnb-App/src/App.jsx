import React from "react"
import Header from "./Header"
import Body from "./Body"
import Card from "./card"

function App() {

  return (
    <div>
      <Header/>
      <Body/>
      <Card
        img="./src/assets/katie-zaferes.png"
        ratings="5.0"
        reviewCount = "(6)"
        country="Kenya"
        details="Life lessons with Kottie Zateres"
        amount="From $136/Person"
      />
     
    </div>
  )
}

export default App
