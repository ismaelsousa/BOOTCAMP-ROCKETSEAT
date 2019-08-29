import React, { Component} from 'react'

class TechList extends Component{
  state = {
    newTech: '',
    techs:[
      'Node.js',
      'ReactJs',
      'React Native'
    ]
  };

  /**
   * Toda vez que criamos uma função própria no component no react
   * ela precisa ser arrow fucntion para que a função possa ter 
   * acesso ao "this"
   * 
   */
  handleInputChange = e =>{
    this.setState({newTech: e.target.value })    
  }

  handleSubmit = e =>{
    e.preventDefault()
    console.log(this.state.newTech)
    this.setState({
      techs: [...this.state.techs, this.state.newTech],
      newTech: ''
    })
  }
  render(){    
    return (
      // Tag called Fragments
      <form onSubmit={this.handleSubmit}>     
        <ul>
          {this.state.techs.map(tech =><li key={tech}>{tech}</li>)}
        </ul>
        <input 
          type="text" 
          onChange={this.handleInputChange} 
          value={this.state.newTech}
        />
        <button type="submit">Enviar</button>
      </form>
    )
  }
}

export default TechList;