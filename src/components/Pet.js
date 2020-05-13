import React from 'react'

class Pet extends React.Component {
  // renderButtons = () => {
  //   if (this.props.petData.isAdopted) {
  //     return (
  //       <>
  //       <button className="ui primary button">Already adopted</button>
  //       <button className="ui disabled button">Adopt pet</button>
  //       </>
  //     )
  //   } else {
  //     return (
  //       <>
  //       <button className="ui disabled button">Already adopted</button>
  //       <button onClick={(e) => this.props.handleAdoption(e, this.props.petData.id)} className="ui primary button">Adopt pet</button>
  //       </>
  //     )
  //   }
  // }

  render() {
    

    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.props.petData.gender === "female" ? '♀' : '♂'}
            {this.props.petData.name}
          </a>
          <div className="meta">
            <span className="date">{this.props.petData.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.petData.age}</p>
            <p>Weight: {this.props.petData.weight}</p>
          </div>
        </div>
        <div className="extra content">
          <button className="ui disabled button">Already adopted</button>
          <button onClick={() => this.props.handleAdoption(this.props.petData.id)} className="ui primary button">Adopt pet</button>
        </div>
      </div>
    )
  }
}

export default Pet
