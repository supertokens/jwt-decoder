import styled from "styled-components";

const leftContentWidth = '315px'

export const JwtContainerStyled = styled.div`
&.jwt-decoder-container {
    font-family: Roboto, sans-serif;
    background-color: rgba(26, 26, 26);

    .inner-container {
        padding-block: 165px 180px;
        width: 1076px;
        margin-inline: auto;
        color: rgb(245, 246, 247);
    }
}

.common-container {
    border-radius: 14px;
    border: 1px solid rgb(51, 51, 51);
}

.inner-content {
    padding: 25px;
}

.title-band {
    padding: 9px 16px;
    background-color: rgb(42, 42, 42);
    &.bt-inherit {
        border-top-right-radius: inherit;
        border-top-left-radius: inherit;
    }
}

.decoder-main-container {
    display: flex;
    aside.decoded {
        width: ${leftContentWidth};
        margin-right: 20px;
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
                padding-block: 10px;
                text-align: center;
                width: 100%;
                font-variation-settings: "wght" 500;
                border-radius: 10px;
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
            min-height: 150px;
        }
    }
}

.note-container-outer {
    margin-left: calc(${leftContentWidth} + 20px);
    margin-block: 11px 60px;
    text-align: center;
    border-color: rgb(255, 153, 51);

    .note {
        padding-block: 11px;
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
        padding: 12px 30px;
        background-color: rgba(40, 40, 40);
        border-radius: 0 0 25px 25px;
    }
}

.explanation-content-container{
  section{
    margin-block-start: 60px;
  }
}
`