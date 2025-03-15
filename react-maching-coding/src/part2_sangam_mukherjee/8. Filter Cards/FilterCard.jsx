import React from 'react';
import './FilterCard.css';
const FilterCard = ({ categories, setCategory, category }) => {
  function handleCategoryClick(productCategory) {
    setCategory((prevCat) =>
      prevCat === productCategory ? '' : productCategory
    );
  }

  function handleKeyDown(e, productCategory) {
    if (e.key === 'Enter' || e.key === ' ') {
      handleCategoryClick(productCategory);
    }
  }
  return (
    <div className="category">
      <ul className="category__items">
        {categories.map((productCategory) => (
          <li
            className={`category__name ${
              productCategory === category ? 'category__selected' : ''
            } `}
            onClick={() => handleCategoryClick(productCategory)}
            key={productCategory}
            role="button"
            tabIndex="0"
            onKeyDown={(e) => handleKeyDown(e, productCategory)}
          >
            {productCategory}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterCard;
