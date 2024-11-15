import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchProducts } from '../redux/productSlice';

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    dispatch(searchProducts(value));
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />
    </div>
  );
}

export default SearchBar;