
import Item from '../Item/item';

const Items = (props) => (
  <main>
    {props.items.map(item => (
      <Item key={item.id} item={item} onAdd={props.onAdd} onShowItem={props.onShowItem} />
    ))}
  </main>
);

export default Items;
