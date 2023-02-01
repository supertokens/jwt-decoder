import styled from 'styled-components';

const PopoverContainer = styled.div`
  position: relative;
  cursor: pointer;
  word-break: break-word;
  .popover-tooltip{
    position: absolute;
    top: 0;
    padding: 1.4rem;
    left: 2rem;
    background-color: ${props => props.theme.colors.dark[900]};
    border: 1px solid ${props => props.theme.colors.grey[950]};
    border-radius: .6rem;
    min-width: 29rem;
    top: 50%;
    transform: translateY(-50%);
    font-weight: normal;
    z-index: 2;

    ::before{
      content: "";
      position: absolute;
      top: inherit;
      transform: inherit;
      width: 1rem;
      height: 1rem;
      left: -1rem;
      clip-path: polygon(0 49%, 100% 100%, 100% 0);
      background-color: inherit;
    }
  }

  @media screen and (max-width: ${props => props.theme.breakpoints.tablet}) {
    .popover-tooltip{
      max-width: calc(100vw - 3rem);
      left: initial;
      right: -3rem;
      top: 6.5rem;

      ::before{
        left: initial;
        right: 3rem;
        transform: rotate(90deg);
        top: -1rem;
      }
    }
  }
`;

export default PopoverContainer