import React from 'react'

class HelloWorld extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      inputText: null
    }
  }

  handleInput = (e) => {
    e.preventDefault()
    this.setState({
      inputText: e.target.value
    })
  }

  render() {
    const {name, ...p} = this.props

    return <div>
      <p>Hello {name}</p>
      <input type="text" onChange={this.handleInput}/>
      <p>{this.state.inputText}</p>
    </div>
  }
}

export default HelloWorld
