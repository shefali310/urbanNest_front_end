import React, { useState } from "react";

interface RoomTypeSelectorProps {
  onChange: (type: string) => void;
}

const RoomTypeSelector: React.FC<RoomTypeSelectorProps> = ({ onChange }) => {
  const [selectedType, setSelectedType] = useState<string>("");

  const handleTypeChange = (type: string) => {
    setSelectedType(type);
    onChange(type);
  };

  return (
    <div>
      <label>Select Room Type:</label>
      <select
        value={selectedType}
        onChange={(e) => handleTypeChange(e.target.value)}
      >
        <option value="">Select Room Type</option>
        <option value="queen">Queen</option>
        <option value="king">King</option>
        <option value="double">Double</option>
      </select>
    </div>
  );
};

export default RoomTypeSelector;
