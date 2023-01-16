import styled from "styled-components"

export const DropdownContainer = styled.div`
  position: relative;

  .dropdown-container{
    border-radius: ${props => props.theme.borderRadius.small};
    border: 1px solid ${props => props.theme.colors.grey[800]};
    overflow: hidden;
    .label{
      font-size: 1.4rem;
      padding: .8rem 1.6rem;
      background-color: ${props => props.theme.colors.dark[900]};
    }

    cursor: pointer;
    .chevron-container{
      padding: .8rem .45rem;
    }
  }

  .options-list{
    font-size: inherit;
    list-style: none;
    margin: 0;
    position: absolute;
    padding: 0;
    top: 4rem;
    right: 0;
    min-width: 15rem;
    border: 1px solid ${props => props.theme.colors.grey[950]};
    background-color: ${props => props.theme.colors.dark[900]};
    border-radius: ${props=>props.theme.borderRadius.small};
    max-height: 15rem;
    overflow-y: auto;
    li{
      padding-block: 1rem;
      cursor: pointer;
      text-align: center;
      :hover{
        background-color: ${props => props.theme.colors.dark[950]};
      }
    }
  }
`

export default DropdownContainer