import { useDrop } from "react-dnd";

function DropZone({ onDrop, droppedItems, handleRemoveItem }) {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "item",
    drop: (item) => onDrop(item),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  return (
    <div
      ref={drop} // Now the whole container is droppable
      className={`drop-zone ${isOver ? "over" : ""}`}
      style={{
        border: `1px dashed ${isOver ? "green" : "black"}`,
        padding: "20px",
        minHeight: "200px", // Ensures it's a large target
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <p>Drop Items here</p>
      {droppedItems.map((item, index) => (
        <div
          key={index}
          className="dropped-item"
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            borderRadius: "5px",
            marginTop: "10px",
            backgroundColor: "lightblue",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <p>{item.name}</p>
          <button onClick={() => handleRemoveItem(index)}>Remove</button>
        </div>
      ))}
    </div>
  );
}

export default DropZone;
