import React from "react";

const ListGroup = ({
  items,
  onItemSelect,
  valueProperty,
  textProperty,
  selectedItem
}) => {
  return (
    <div>
      <ul className="list-group">
        {items.map(item => (
          <li
            style={{
              cursor: "pointer"
            }}
            className={
              item === selectedItem
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item[valueProperty]}
            onClick={() => onItemSelect(item)}
          >
            {item[textProperty]}
          </li>
        ))}
      </ul>
    </div>
  );
};

ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id"
};

export default ListGroup;
