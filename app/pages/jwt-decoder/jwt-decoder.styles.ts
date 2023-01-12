import styled from "styled-components";

const leftContentWidth = '31.5rem'

export const JwtContainerStyled = styled.div`
&.jwt-decoder-container {
    font-family: Roboto, sans-serif;
    background-color: rgba(26, 26, 26);

    .inner-container {
        padding-block: 16.5rem 18rem;
        width: 107.5rem;
        margin-inline: auto;
        color: rgb(245, 246, 247);
    }
}

.common-container {
    border-radius: ${props=>props.theme.borderRadius.medium};
    border: 1px solid rgb(51, 51, 51);
}

.inner-content {
    padding: 2.5rem;
}

.title-band {
    padding: .9rem 1.6rem;
    background-color: rgb(42, 42, 42);
    &.bt-inherit {
        border-top-right-radius: inherit;
        border-top-left-radius: inherit;
    }
}

#header{
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.decoder-main-container {
    display: flex;
    aside.decoded {
        width: ${leftContentWidth};
        margin-right: 2rem;
    }

    .decoded {
        display: flex;
        flex-direction: column;
        .content {
            word-break: break-word;
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            .copy-btn {
                border: 1px solid rgba(12, 110, 35);
                padding-block: 1rem;
                text-align: center;
                width: 100%;
                font-variation-settings: "wght" 500;
                border-radius: 1rem;
                color: rgb(102, 188, 122);
                background-color: transparent;
            }
        }

        .header {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
    }

    .input-container {
        flex: 1;

        .inner-content.payload {
            min-height: 15rem;
        }
    }
}

.note-container-outer {
    margin-left: calc(${leftContentWidth} + 2rem);
    margin-block: 1.1rem 6rem;
    text-align: center;
    border-color: rgb(255, 153, 51);

    .note {
        padding-block: 1.1rem;
        b {
            color: rgb(255, 153, 51);
        }
    }
}

hr {
    border-color: rgba(96, 96, 96);
    margin-block-end: 0;
}

.read-more-container {
    display: flex;
    justify-content: center;
    span {
        padding: 1.2rem 3rem;
        background-color: rgba(40, 40, 40);
        border-radius: 0 0 2.5rem 2.5rem;
    }
}

.explanation-content-container{
  section{
    margin-block-start: 6rem;
  }
}
`

export default JwtContainerStyled