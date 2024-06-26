import React from 'react'
import './TrendCard.scss'
import { TrendData } from "../../Data/TrendData"
const TrendCard = () => {
  return (
    <div>
      <div className="TrendCard">
        <h3>Trends for you</h3>
        {TrendData.map((trend) => {
          return (
            <div className="trend">
              <span>#{trend.name}</span>
              <span>{trend.shares}k shares</span>

            </div>
          )
        })}
      </div>
    </div>
  )
}

export default TrendCard
