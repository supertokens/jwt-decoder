import Image from "next/image"
import React, { useEffect, useState } from "react"
import ExplanationContent from "../../components/jwt-decoder/explanation-content.component"
import { JwtContainerStyled, TabContainer, TabOption } from "./jwt-decoder.styles"
import Dropdown, { type IDropdownOption } from "../../components/common/dropdown/dropdown.component"
import Popover from "../../components/common/popover/popover.component"
import TokenInput from "../../components/jwt-decoder/token-input.component"
import jwt_decode from "jwt-decode";
import useMediaQuery from "../../hooks/useMediaQuery"
import { useAppTheme } from "../../assets/global-styles/theme"

const algorithmOptions: IDropdownOption[] = [
  {
    label: "HS256",
    value: "HS256",
  },
  {
    label: "ES256",
    value: "ES256",
  },
  {
    label: "RS256",
    value: "RS256",
  },
  {
    label: "PS256",
    value: "PS256",
  },
  {
    label: "EdDSA",
    value: "EdDSA",
  }
]

const sampleToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE2NjU3MjQyNzMsImV4cCI6MTY5NzI2MDI3MywiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsIkdpdmVuTmFtZSI6IkpvaG5ueSIsIlN1cm5hbWUiOiJSb2NrZXQiLCJFbWFpbCI6Impyb2NrZXRAZXhhbXBsZS5jb20iLCJSb2xlIjoiTWFuYWdlciJ9.4d7mG0jzELVxjwbYTZxH_OjhC4h3lFI0YTEZYzmmmNc'

const sampleToken2 = 'eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiZG9udHJlbWVtYmVyIiwiSXNzdWVyIjoiSXNzdWVyIiwiVXNlcm5hbWUiOiJzb21lb25lIiwiZXhwIjoxNjczNjAzODgzLCJpYXQiOjE2NzM2MDM4ODN9.IAI3so_yuxr_8QUgbXBPr8JtoK_fAX7hXqR1xadiWLQ'

type TOption = "encoded" | "decoded"

const optionsList: {label: string, value: TOption}[] = [
  {
    label: "Encoded",
    value: "encoded",
  },
  {
    label: "Decoded",
    value: "decoded"
  }
]

const JwtDecoder = () => {
  const [showMoreContent, setShowMoreContent] = useState(false);
  const [selectedAlgorithm, setSelectedAlgorithm] = useState(algorithmOptions[0]);
  const [tokenValue, setTokenValue] = useState(sampleToken);
  const [decodedText, setDecodedText] = useState("");
  const [showTokenError, setShowTokenError] = useState(false);
  const [selectedTab, setSelectedTab] = useState<TOption>("encoded")

  const theme = useAppTheme();
  const isSmallerDisplay = useMediaQuery(`(max-width: ${theme.breakpoints.tablet})`)

  useEffect(() => {
    console.log(`isSmallerDisplay`, isSmallerDisplay)
  }, [isSmallerDisplay])

  useEffect(() => {
    try {
      setShowTokenError(false);
      const decoded = jwt_decode<string>(tokenValue);
      setDecodedText(decoded)
    } catch (error) {
      console.log(error)
      setShowTokenError(true);
    }
  }, [tokenValue])


  return (
    <JwtContainerStyled className="jwt-decoder-container">
      <main className="inner-container">
        <article className="hero-container">
          <h3 className="title">JWT Decoder</h3>
          <section className="decoder-main-container">

            <TabContainer className="common-container tab-container">
              {
                optionsList.map(({label, value}) => <TabOption onClick={()=>setSelectedTab(value)} className="strong-600" key={value} isSelected={selectedTab === value}>
                  {label}
                </TabOption>)
              }
            </TabContainer>

            <aside className="decoded common-container">
              <div className="title-band bt-inherit header flex-center-y">
                <span>
                  JWT
                </span>
                <span>
                  <Popover popoverContent={"JWT will update Automatically when you edit Header, Payload and Signing key data"}>
                    <Image src={"images/help.svg"} alt="help" width={10} height={10} />
                  </Popover>
                </span>
              </div>
              <div className="content inner-content">
                {/* <div className="token code"> */}
                {/* <TokenInput value={tokenValue} setValue={setTokenValue} /> */}
                <textarea className="token code" value={tokenValue} onChange={(e) => setTokenValue(e.target.value)} />
                {/* {tokenContent} */}
                {/* </div> */}

                <button className="copy-btn strong-600">
                  Copy JWT
                  <Image alt={"copy to clipboard"} width={10} height={10} src={"images/clipboard.svg"} />
                </button>
              </div>
            </aside>
            <div className="input-container common-container">
              <div className="title-band bt-inherit" id="header">
                <div>Header</div>
                <div className="dropdown-outer"><Dropdown selected={selectedAlgorithm} options={algorithmOptions} onChange={setSelectedAlgorithm} /></div>
              </div>
              <div className="inner-content header code">{JSON.stringify({
                "alg": selectedAlgorithm.label,
                "typ": "jwt"
              })}</div>
              <div className="title-band" id="payload">Payload</div>
              <textarea className="inner-content code" value={JSON.stringify(decodedText, null, 2)} />
              <div className="title-band" id="signing-key">Signing Key</div>
              <div className="inner-content signing-key code">
                MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCsi4JJaPHjlrh/
                gDnVOHISFE59M8MkojCbhZ9
              </div>
            </div>
          </section>
          <section className="common-container note-container-outer">
            <div className="inner note">
              <b>Note:</b>{" "}
              <span>We do not store any information in our database and all processing is done on the client side.</span>
            </div>
          </section>

          <div className="about">
            The JWT Decoder Tool(TODO: placeholder name) allows you to decode JWTs for simple debugging. You can also create your own JWTs with custom payloads signed with your own secret for testing purposes.
          </div>
          <hr />
          <div className="read-more-container">
            {!showMoreContent && <span role={"button"} onClick={() => setShowMoreContent(true)}>Read More <Image className="down-chevron" src={"/images/chevron-down.svg"} alt="chevron-down" width={10} height={10} /></span>}
          </div>
        </article>

        {showMoreContent && (
          <ExplanationContent />
        )}
      </main>
    </JwtContainerStyled>
  )
}

export default JwtDecoder