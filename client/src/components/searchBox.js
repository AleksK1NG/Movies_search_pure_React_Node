import React from "react";

const SearchBox = ({ onChange, value }) => {
  return (
    <input
      name="query"
      className="form-control my-3"
      placeholder="Search..."
      value={value}
      onChange={e => onChange(e.currentTarget.value)}
      type="text"
    />
  );
};

export default SearchBox;
