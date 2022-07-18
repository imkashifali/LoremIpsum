import React from 'react'

const Categories = ({categoriesList,filterItem}) => {
  return (
    <div className="btn-container">
      {categoriesList.map((category, index) => {
        return (
          <button
            type="button"
            className="filter-btn"
            key={index}
            onClick={() => filterItem(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  )
}

export default Categories