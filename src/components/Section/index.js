import React from "react"
import "./section.css"
import { Button } from "../ButtonElements"

function CreateSection() {
  return (
    <div className="section-container">
      <h1>Travel World</h1>
      <p>Plan your next trip today</p>
      <div className="section-btn">
        <Button fontBig big primary>
          Let's Go!
        </Button>
      </div>
    </div>
  )
}

export default CreateSection
