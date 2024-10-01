import styles from './categories.module.css';

const Categories = (props) => {
  const categories = [
    { key: 'all', name: 'Все' },
    { key: 'furniture', name: 'Мягкая мебель' },
    { key: 'chairs', name: 'Стулья' },
    { key: 'sofa', name: 'Диваны' },
    { key: 'bed', name: 'Кровати' },
  ];

  return (
    <div className={styles.categories}>
      {categories.map(category => (
        <div key={category.key} className={styles.category} onClick={() => props.chooseCategory(category.key)}>
          {category.name}
        </div>
      ))}
    </div>
  );
};

export default Categories;
