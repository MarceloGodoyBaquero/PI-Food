import React from 'react';
import './Pagination.css'

export default function Pagination({recipesPerPage, totalRecipes, paginate}) {
  
  const pageNumbers = [];
  
  for (let i = 1; i <= Math.ceil(totalRecipes / recipesPerPage); i++) {
    pageNumbers.push(i);
  }
  
  return (
    <div>
      {pageNumbers.map(number => (<button key={number} className="page-link" onClick={() => paginate(number)}>{number}</button>))}
    </div>
  )
}