import  { Component } from 'react'
import styles from './item.module.css'

export class Item extends Component {
  render() {
    return (
      <div className={styles.item}>
        <img src={"./img/" + this.props.item.img} onClick={() => this.props.onShowItem(this.props.item)} />
        <h2>{this.props.item.title}</h2>
        <p>{this.props.item.desc}</p>
        <b>{this.props.item.price}$</b>
        <div className={styles.addToCard} onClick={() => this.props.onAdd(this.props.item)} >+</div>  
    </div>
    )
  }
}

export default Item;