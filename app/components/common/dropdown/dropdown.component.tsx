import Image from "next/image";
import React, { useRef, useState } from "react"
import { DropdownContainer } from "./dropdown.styles"
import useOnClickOutside from "../../../hooks/useOnClickOutside"

export interface IDropdownOption {
  label: string;
  value: string;
  [key: string]: any;
}

interface IDropdownProps {
  selected: IDropdownOption | null;
  options: IDropdownOption[];
  placeholder?: string;
  obtainKey?: <T extends IDropdownOption>(option: T) => string | number;
  onChange?: (val: object extends IDropdownOption ? IDropdownOption : object) => void;
}

const Dropdown: React.FC<IDropdownProps> = ({ selected, options, onChange, obtainKey, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownContainerRef = useRef(null);

  useOnClickOutside(dropdownContainerRef, () => setIsOpen(false))

  return (
    <DropdownContainer ref={dropdownContainerRef} onClick={() => setIsOpen(true)}>
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