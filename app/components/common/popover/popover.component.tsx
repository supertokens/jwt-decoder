import React, { PropsWithChildren, useRef, useState } from 'react';
import useOnClickOutside from '../../../hooks/useOnClickOutside';
import PopoverContainer from "./popover.styles";

interface IPopoverProps {
  popoverContent: string | React.ReactNode;
}

const Popover: React.FC<PropsWithChildren<IPopoverProps>> = ({
  popoverContent,
  children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef();

  const togglePopover = (show: boolean) => {
    setIsOpen(show)
  }

  useOnClickOutside(containerRef, ()=>togglePopover(false))

  return (
    <PopoverContainer ref={containerRef} onClick={()=>togglePopover(true)} className='popover-container' onMouseOver={() => togglePopover(true)} onMouseLeave={() => togglePopover(false)}>
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