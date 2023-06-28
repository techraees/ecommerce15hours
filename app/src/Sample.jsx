import React, { useState } from "react";

function CustomDragDrop() {
  const [items, setItems] = useState([
    { id: 1, text: "Item 1" },
    { id: 2, text: "Item 2" },
    { id: 3, text: "Item 3" },
    { id: 4, text: "Item 4" },
    { id: 5, text: "Item 5" },
  ]);

  const [draggingIndex, setDraggingIndex] = useState(null);

  const handleDragStart = (e, index) => {
    e.dataTransfer.setData("text/plain", index);
    setDraggingIndex(index);
  };

  const handleDragOver = (e, index) => {
    e.preventDefault();
    if (draggingIndex === null) return;

    const dragOverIndex = index;
    if (dragOverIndex === draggingIndex) return;

    const itemsCopy = [...items];
    const draggedItem = itemsCopy[draggingIndex];

    itemsCopy.splice(draggingIndex, 1);
    itemsCopy.splice(dragOverIndex, 0, draggedItem);

    setItems(itemsCopy);
    setDraggingIndex(dragOverIndex);
  };

  const handleDragEnd = () => {
    setDraggingIndex(null);
  };

  const renderHoldingDiv = () => {
    if (draggingIndex === null) return null;

    const holdingItem = items[draggingIndex];

    return (
      <div className="p-4 my-2 bg-gray-200 rounded-lg cursor-move">
        {holdingItem.text}
      </div>
    );
  };

  return (
    <div>
      {items.map((item, index) => (
        <div
          key={item.id}
          className={`shadow-lg p-4 my-2 bg-white rounded-lg bg-[#${index}f0daf] text-[24px] text-[white] transition-transform duration-300 ${
            draggingIndex === index ? "-translate-y-2" : ""
          }`}
          draggable
          onDragStart={(e) => handleDragStart(e, index)}
          onDragOver={(e) => handleDragOver(e, index)}
          onDragEnd={handleDragEnd}
        >
          {item.text}
        </div>
      ))}
      {renderHoldingDiv()}
    </div>
  );
}

export default CustomDragDrop;
