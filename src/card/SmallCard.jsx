/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import "./SmallCard.css"
const SmallCard = () => {
  return (
    <>
        <div className="small-card-container">
            <div className="small-card-container-part1">
              <h2>Today's Money</h2>
              <h1>$53,000 <span>+55%</span></h1>

            </div>
            <div className="small-card-container-part2">
              <i className="ri-wallet-3-fill"></i>
            </div>
        </div>
    </>
  )
}

export default SmallCard