import { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import DragItem from "./DragItem";
import DropZone from "./DropZone";
import DropZone2 from "./DropZone2.jsx";
import "./App.css";

function App() {
  const [droppedItems, setDroppedItems] = useState([]);

  function handleDrop(item) {
    setDroppedItems((prevItems) => [...prevItems, item]);
  }

  function handleRemoveItem(index) {
    const updatedItems = [...droppedItems];
    updatedItems.splice(index, 1);
    setDroppedItems(updatedItems);
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="app-container">
        <div className="content-wrapper">
          <h1>Drag and Drop Example</h1>
          <div className="sections-container">
            {/* Drag Items Section */}
            <div className="drag-items">
              <h2>Drag Items</h2>
              <DragItem name="Item 1" />
              <DragItem name="Item 2" />
              <DragItem name="Item 3" />
            </div>

            {/* Drop Zone Section */}
            <DropZone
              onDrop={handleDrop}
              droppedItems={droppedItems}
              handleRemoveItem={handleRemoveItem}
            />
            <DropZone2
              onDrop={handleDrop}
              droppedItems={droppedItems}
              handleRemoveItem={handleRemoveItem}
            />
          </div>
        </div>
      </div>
    </DndProvider>
  );
}

export default App;
