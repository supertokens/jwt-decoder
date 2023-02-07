import styled from "styled-components";

export const ErrorContainerStyled = styled.div`
    color: ${props=>props.theme.colors.light[1000]};
    display: flex;
    flex-direction: column;
    min-height: calc(100vh - 8.5rem - 53.2rem); // adjusting for header and footer.
    justify-content: center;
    align-items: center;
    text-align: center;
`

export default ErrorContainerStyled
