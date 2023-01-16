import styled from 'styled-components';

const PopoverContainer = styled.div`
  position: relative;
  cursor: pointer;
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

  @media screen and (max-width: 768px) {
    .popover-tooltip{
      left: initial;
      right: 2rem;
      max-width: calc(100vw - 3rem);

      ::before{
        left: initial;
        right: -1rem;
        transform: rotate(180deg);
      }
    }
  }
`;

export default PopoverContainer