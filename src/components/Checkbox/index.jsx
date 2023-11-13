import './style.css';
import React, { useState } from 'react';

function Checkbox(props) {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const uniqueCategories = new Set();
  props.events.forEach(event => {
    uniqueCategories.add(event.category);
  });

  function handleCheckboxChecked(category, isChecked) {
    let auxSelectedCategories;
    if (isChecked) {
      auxSelectedCategories = [...selectedCategories, category];
    } else {
      auxSelectedCategories = selectedCategories.filter(
        (selectedCategory) => selectedCategory !== category
      );
    }
    setSelectedCategories(auxSelectedCategories);
    props.handleCategoryChange(auxSelectedCategories);
  }

  return (
    <>
      <div className='checkbox-container' data-testid="checkbox-container">
        <h2>Selecciona las categorías:</h2>
        {Array.from(uniqueCategories).map((category) => (
          <div key={category}>
            <label>
              {category}
            </label>
            <input
              type="checkbox" value={category}
              checked={selectedCategories.includes(category)}
              onChange={(e) => handleCheckboxChecked(category, e.target.checked)}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default Checkbox;