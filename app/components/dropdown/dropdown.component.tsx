import Image from "next/image";
import React, { useState } from "react"
import { DropdownContainer } from "./dropdown.styles"

export interface IDropdownOption {
  label: string;
  value: string;
}

interface IDropdownProps {
  value: IDropdownOption | null;
  options: IDropdownOption[];
  onSelect?: (val: IDropdownOption) => void;
}

const Dropdown: React.FC<IDropdownProps> = ({ value, options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DropdownContainer onClick={() => setIsOpen(true)}>
      <div className="dropdown-container flex-center-y">
        <div className="label">Sample</div>
        <span className="chevron-container"><Image src={"images/chevron-down.svg"} width={10} height={10} alt={"chevron icon"} /></span>
      </div>
      {
        isOpen && <ul className="options-list">
          {[1, 2, 3, 4, 5, 6, 7].map(item => <li key={item} onClick={e=>{
            e.stopPropagation();
            setIsOpen(false);
          }}>Option {item}</li>)}
        </ul>
      }
    </DropdownContainer>
  )
}

export default Dropdown