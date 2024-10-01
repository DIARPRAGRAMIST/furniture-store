
import React from 'react'
import Footer from './components/footer/footer'
import Header from './components/Header/header'
import Items from './components/Items/items.jsx';
import Categories from './components/Categories/categories.jsx';
import ShowFullItem from './components/ShowFullItem/showFullItem.jsx';

class App extends React.Component {
  state = {
    orders: [],
    currentItems: [],
    items: [
      { id: 1, title: "Обеденная группа", img: 's.jpg', desc: "Элегантный стол", category: "chairs", price: 499.99 },
      { id: 2, title: "Спальный гарнитур", img: 'a.jpg', desc: "Легкая мебель", category: "bed", price: 49.99 },
      { id: 3, title: "Мягкий мебель", img: '8884.jpg', desc: "Модульная система", category: "furniture", price: 49.99 },
      { id: 4, title: "Диван-кровать", img: 'b.jpg', desc: "Диван-кровать Арти", category: "sofa", price: 49.99 },
      { id: 5, title: "Кровать", img: 'c.jpg', desc: "Кровать ЛАЙТ", category: "bed", price: 49.99 },
    ],
    showFullItem: false,
    fullItem: {}
  };

  componentDidMount() {
    this.setState({ currentItems: this.state.items });
  }

  addToOrder = (item) => {
    if (!this.state.orders.some(order => order.id === item.id)) {
      this.setState({ orders: [...this.state.orders, item] });
    }
  };

  deleteOrder = (id) => {
    this.setState({ orders: this.state.orders.filter(order => order.id !== id) });
  };

  chooseCategory = (category) => {
    this.setState({
      currentItems: category === 'all' ? this.state.items : this.state.items.filter(item => item.category === category)
    });
  };

  onShowItem = (item) => {
    this.setState({ fullItem: item, showFullItem: !this.state.showFullItem });
  };

  render() {
    return (
      <div>
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Categories chooseCategory={this.chooseCategory} />
        <Items items={this.state.currentItems} onShowItem={this.onShowItem} onAdd={this.addToOrder} />
        {this.state.showFullItem && <ShowFullItem item={this.state.fullItem} onAdd={this.addToOrder} onShowItem={this.onShowItem} />}
        <Footer />
      </div>
    );
  }
}

export default App;
