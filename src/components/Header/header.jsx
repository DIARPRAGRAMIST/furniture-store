    import { useState } from 'react';
    import styles from './header.module.css';
    import { MdShoppingCart } from 'react-icons/md';
    import Order from '../Order/order';

    const showOrders = (props) => {
        let summa = 0
        props.orders.forEach(el => summa += Number.parseFloat(el.price));
        return (
            <div>
                {props.orders.map(el => (
                    <Order onDelete={props.onDelete} key={el.id} item={el} />
                ))}
                <p style={{float:'left', width:'100%', fontWeight:'600', fontSize:'20px'}}>Сумма:  {new Intl.NumberFormat().format(summa)}$</p>
            </div>
        )
    }


    const showNothing = () => {
        return(
            <div>
                <h2 style={{fontSize:'20px', marginBottom:'20px'}}>Товаров нет</h2>
            </div>
        )
    }

    const Header = (props) => {
        const [cartOpen, setCartOpen] = useState(false);
    
        return (
            <header>
                <div className={styles.header}>
                    <span className={styles.logo}>Hous Staff</span>
                    <MdShoppingCart
                        onClick={() => setCartOpen(!cartOpen)}
                        className={`${styles.shopCartButton} ${cartOpen ? styles.active : ''}`}
                    />
    
                    {cartOpen && (
                        <div className={styles.shopCar}>
                            {props.orders.length > 0 ? showOrders(props) : showNothing()}
                        </div>
                    )}
    
                    <ul className={styles.nav}>
                        <li>О нас</li>
                        <li>Контакты</li>
                        <li>Кабинет</li>
                    </ul>
                </div>
                <div className={styles.presentation}>
                    <img
                        style={{ width: '1000px', height: '100%' }}
                        src="https://files.oaiusercontent.com/file-aExyXlBWU3k5gVAuZlT7dgek?se=2024-09-29T02%3A49%3A03Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Df1a87821-7410-43bc-8548-1e5e88fb185b.webp&sig=OdwEyDveviYRWp/4aDHLk2pHtaVayZOqDPpHPaMnIKw%3D"
                        alt="Presentation"
                    />
                    <div className={styles.textOverlay}>
                        <h1>Лучшие товары для вашего дома</h1>
                    </div>
                </div>
            </header>
        );
    };
    
    export default Header;
    
