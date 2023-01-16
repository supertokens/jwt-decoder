import React, { PropsWithChildren, useState } from 'react';
import PopoverContainer from "./popover.styles";

interface IPopoverProps {
  popoverContent: string | React.ReactNode;
}

const Popover: React.FC<PropsWithChildren<IPopoverProps>> = ({
  popoverContent,
  children }) => {
  const [isOpen, setIsOpen] = useState(false);
  // const [isOpen] = useState(true);
  // const [,setIsOpen] = useState(true)

  return (
    <PopoverContainer className='popover-container' onMouseOver={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      {children}
      {isOpen && (
        <div className='popover-tooltip'>
          {popoverContent}
        </div>
      )}
    </PopoverContainer>
  );
}

export default Popover;