import React, { Component} from 'react'
import TechItem from './TechItem'
class TechList extends Component{
  // static defaultProps = {
  //   // Colocaria aqui 
  // }
  state = {
    newTech: '',
    techs:[]
  };
  // execultado assim que o component aparece em tela
  componentDidMount(){
    const techs = localStorage.getItem
    ('techs');
    if(techs){
      this.setState({techs: JSON.parse(techs)})
    }
  }
  // execultado sempre que houver alteração nas props ou estado
  componentDidUpdate(prevProps, prevState){
    //this.props, this.state
    if(prevState !== this.state.techs){
      localStorage.setItem('techs', JSON.stringify(this.state.techs))
    }
  }

  // execultado quando o componente deixa de existir
  componentWillUnmount(){

  }
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
  handleDelete = (tech)=> {
    this.setState({techs: this.state.techs.filter((item) => item !== tech)})
  }
  render(){    
    return (
      // Tag called Fragments
      <form onSubmit={this.handleSubmit}>     
        <ul>
          {this.state.techs.map(tech =>(
            <TechItem key={tech} tech={tech} onDelete={()=>this.handleDelete(tech)}/>
          ))}    
         
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