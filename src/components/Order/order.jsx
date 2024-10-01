import { Component } from 'react'
import { FaTrash } from 'react-icons/fa'

export class Order extends Component {
  render() {
    return (
      <div className='item' style={{padding:'20px'}}>      
      <img style={{width:'100px'}} src={"./img/" + this.props.item.img} />
      <h2 style={{marginLeft:'110px', fontSize:'15px', marginTop:'-80px'}} >{this.props.item.title}</h2>
      <b style={{marginLeft:'110px', color:'#797979'}}>{this.props.item.price}$</b>
      <FaTrash style={{color:'#ca5252', float:'right', position:'relative', cursor:'pointer'}} 
      onClick={() => this.props.onDelete(this.props.item.id)}/>
      </div>
    )
  }
}

export default Order;
