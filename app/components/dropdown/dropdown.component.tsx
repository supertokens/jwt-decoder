import Image from "next/image";
import React from "react"
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
  return (
    <DropdownContainer>
      <div className="dropdown-container flex-center-y">
        <div>Sample</div>
        <span className="chevron-container"><Image src={"images/chevron-down.svg"} width={10} height={10} alt={"chevron icon"} /></span>
      </div>
    </DropdownContainer>
  )
}

export default Dropdown