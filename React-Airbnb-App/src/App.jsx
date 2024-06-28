import React from "react"
import Header from "./Header"
import Body from "./Body"
import Card from "./card"
import data from "./data"

function App() {

  const cardArray = data.map((item)=>{

    return (
      <Card 
      img={item.coverImg}
      ratings={item.stats.rating}
      reviewCount = {item.stats.reviewCount}
      details={item.title}
      amount={item.price}
      openSpots={item.openSpots}
      location = {item.location}
      />
    )
  })
  

  return (
    <div>
      <Header/>
      <Body/>
      <section className="cardList">
         {cardArray}
      </section>
      
  
    </div>
  )
}

export default App
