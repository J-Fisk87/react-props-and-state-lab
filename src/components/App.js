import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  onChangeType = (event) => {
    this.setState({ filters: { type: event.target.value}})
  }

  onFindPetsClick = (event) => {
    let petsURL = "/api/pets" // ?type={this.state.filters.type}
    // console.log(event.target)
    if (this.state.filters.type !== "all"){
      petsURL += `?type=${this.state.filters.type}`
    }
    fetch(petsURL).then(r => r.json()).then(j => this.setState({ pets: j }))
  }
  
  render() {
    console.log(this.state)
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters handleButtonClick={this.onFindPetsClick} handleTypeChange={this.onChangeType} />
            </div>
            <div className="twelve wide column">
              <PetBrowser />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App

// fetch("/api/pets").then(r => r.json()).then(j => console.log(j))
