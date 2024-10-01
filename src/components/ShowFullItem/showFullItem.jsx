import { Component } from 'react'
import styles from './showFullItem.module.css'

export class ShowFullItem extends Component {
  render() {
    return (
      <div className={styles.fullItem}>
            <div>
            <img src={"./img/" + this.props.item.img} onClick={this.props.onShowItem} />
        <h2>{this.props.item.title}</h2>
        <p>{this.props.item.desc}</p>
        <b style={{marginLeft:'20px'}}>{this.props.item.price}$</b>
        <div className={styles.addToCard} style={{marginTop:'20px', marginLeft:'20px'}} onClick={() => this.props.onAdd(this.props.item)} >+</div>
            </div>
      </div>
    )
  }
}
export default ShowFullItem