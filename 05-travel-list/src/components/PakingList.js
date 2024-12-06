import { useState } from "react";
import Item from "./Item";

export default function PakingList({
  items,
  onDeleteItem,
  onToggleItems,
  onClear,
}) {
  const [sortby, setSortby] = useState("input");
  let sortedItems = items || [];
  if (sortby === "input") sortedItems = items;

  if (sortby === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortby === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => (a.packed === b.packed ? 0 : a.packed ? -1 : 1));

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            onToggleItems={onToggleItems}
          />
        ))}
      </ul>
      <div className="action">
        <select value={sortby} onChange={(e) => setSortby(e.target.value)}>
          <option value="input">sort by input order</option>
          <option value="description">sort by description</option>
          <option value="packes">sort by packed status</option>
        </select>
        <button onClick={onClear}>clear least</button>
      </div>
    </div>
  );
}
