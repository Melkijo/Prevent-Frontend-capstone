"use client"
import React, { useState } from 'react';

const Dropdown = () => {
  const [selectedYear, setSelectedYear] = useState('');

  const years = Array.from({ length: 24 }, (_, i) => 2000 + i);

  const selectYear = (event) => {
    setSelectedYear(event.target.value);
  };

  return (
    <div>
      <select
        className="block appearance-none w-28 bg-white border border-gray-400 px-4 py-2 pr-8 rounded-lg shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400"
        value={selectedYear}
        onChange={selectYear}
      >
        <option value="">Select Year</option>
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;