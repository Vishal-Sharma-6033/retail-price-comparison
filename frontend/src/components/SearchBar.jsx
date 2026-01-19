import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [text, setText] = useState("");

  return (
    <div>
      <input
        placeholder="Search product..."
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={() => onSearch(text)}>Search</button>
    </div>
  );
}
