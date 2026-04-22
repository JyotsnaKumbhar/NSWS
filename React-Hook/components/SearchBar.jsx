
import React, { useRef } from "react";

export default function SearchBar({ onSearch }) {
  const inputRef = useRef();

  return (
    <input className="search-bar"
      ref={inputRef}
      placeholder="Search..."
      onChange={() => onSearch(inputRef.current.value)}
    />
  );
}