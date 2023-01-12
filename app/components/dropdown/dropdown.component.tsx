import Image from "next/image";
import React, { useState } from "react"
import { DropdownContainer } from "./dropdown.styles"

export interface IDropdownOption {
  label: string;
  value: string;
}

interface IDropdownProps {
  selected: IDropdownOption | null;
  options: IDropdownOption[];
  placeholder?: string;
  obtainKey?: (option: IDropdownOption) => string | number;
  onChange?: (val: IDropdownOption) => void;
}

const Dropdown: React.FC<IDropdownProps> = ({ selected, options, onChange, obtainKey, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DropdownContainer onClick={() => setIsOpen(true)}>
      <div className="dropdown-container flex-center-y">
        <div className="label">{selected?.label || placeholder}</div>
        <span className="chevron-container"><Image src={"images/chevron-down.svg"} width={10} height={10} alt={"chevron icon"} /></span>
      </div>
      {
        isOpen && <ul className="options-list">
          {options.map(item => <li key={obtainKey?.(item) || item.value} onClick={e => {
            e.stopPropagation();
            onChange(item);
            setIsOpen(false);
          }}>{item.label}</li>)}
        </ul>
      }
    </DropdownContainer>
  )
}

export default Dropdown