import Image from "next/image"
import React, { useEffect, useRef, useState } from "react"
import ExplanationContent from "../../components/jwt-decoder/explanation-content.component"
import { InputContainer, JwtContainerStyled, TabContainer, TabOption } from "./jwt-decoder.styles"
import Dropdown from "../../components/common/dropdown/dropdown.component"
import Popover from "../../components/common/popover/popover.component"
import { algorithmOptions, defaultTokens, optionsList, TOption } from "../../assets/constants"
import * as jose from 'jose'
import InputEditor, { JWTInputEditor } from "../../components/jwt-decoder/json-input.components"

// Create a JWT with a payload
const payload = {
  name: "John Doe",
  email: "johndoe@example.com"
};


const sampleToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE2NjU3MjQyNzMsImV4cCI6MTY5NzI2MDI3MywiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsIkdpdmVuTmFtZSI6IkpvaG5ueSIsIlN1cm5hbWUiOiJSb2NrZXQiLCJFbWFpbCI6Impyb2NrZXRAZXhhbXBsZS5jb20iLCJSb2xlIjoiTWFuYWdlciJ9.4d7mG0jzELVxjwbYTZxH_OjhC4h3lFI0YTEZYzmmmNc'

const sampleToken2 = 'eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiZG9udHJlbWVtYmVyIiwiSXNzdWVyIjoiSXNzdWVyIiwiVXNlcm5hbWUiOiJzb21lb25lIiwiZXhwIjoxNjczNjAzODgzLCJpYXQiOjE2NzM2MDM4ODN9.IAI3so_yuxr_8QUgbXBPr8JtoK_fAX7hXqR1xadiWLQ'

const sampleSigningKey = 'MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCsi4JJaPHjlrh/gDnVOHISFE59M8MkojCbhZ9'

const sampleSigningKey2 = " "

// When the token changes, change the payload
// When the payload changes, change the token

const JwtDecoder = () => {
  const [showMoreContent, setShowMoreContent] = useState(false);
  const [selectedAlgorithm, setSelectedAlgorithm] = useState(algorithmOptions[0]);

  const [header, setHeader] = useState<any>({
    "alg": selectedAlgorithm.label,
    "typ": "jwt"
  })

  const [tokenValue, setTokenValue] = useState(sampleToken);

  const [showJwtError, setShowJwtError] = useState(false);
  const [showPayloadError, setShowPayloadError] = useState(false);
  const [showHeaderError, setShowHeaderError] = useState(false);

  const [payload, setPayload] = useState('{}');
  const [signingKey, setSigningKey] = useState(sampleSigningKey2);
  const [selectedTab, setSelectedTab] = useState<TOption>("encoded");

  const headerValue = JSON.stringify(header, null, 2)

  const onPayloadChange = async (p: string) => {
    try {
      setShowPayloadError(false);
      setPayload(p);
      populateTokenFromPayload(p);
    } catch (error) {
      console.log(error)
      setShowPayloadError(true)
    }
  }

  const onTokenValueChange = async (t: string) => {
    try {
      setShowJwtError(false);
      setTokenValue(t);
      populatePayloadFromToken(t);
    } catch (error) {
      console.log(error)
      setShowJwtError(true)
    }
  }

  const populatePayloadFromToken = async (token: string) => {
    try {
      setShowJwtError(false);
      const decoded = jose.decodeJwt(token);
      setPayload(JSON.stringify(decoded, null, 2))
    } catch (error) {
      console.log(error)
      setShowJwtError(true);
    }
  }

  const populateTokenFromPayload = async (payload: string) => {
    const secret = new TextEncoder().encode(signingKey)
    const jwt = await new jose.SignJWT(JSON.parse(payload))
      .setProtectedHeader(header)
      .sign(secret);
    setTokenValue(jwt);
  }

  useEffect(()=>{
    populatePayloadFromToken(tokenValue);
  },[])

  // useEffect(() => {
  //   signWithPayload();
  // }, [payload])


  // useEffect(() => {
  //   setTokenValue(defaultTokens[selectedAlgorithm.value])
  // }, [selectedAlgorithm])

  const copyJwtClickHandler = async () => {
    try {
      await navigator.clipboard.writeText(tokenValue);
    } catch (error) {
      console.log("Could not copy.")
    }
  }

  const headerValueChangeHandler = (newValue: string) => {
    try {
      setShowHeaderError(false);
      if (!("alg" in JSON.parse(newValue))) {
        throw Error("Invalid Header")
      }
      console.log(newValue)
      setHeader(newValue)
    } catch (error) {
      setShowHeaderError(true);
    }
  }

  return (
    <JwtContainerStyled $selectedTab={selectedTab} className="jwt-decoder-container">
      <main className="inner-container">
        <article className="hero-container">
          <h3 className="title">JWT Decoder</h3>
          <section className="decoder-main-container">
            <TabContainer className="common-container tab-container">
              {
                optionsList.map(({ label, value }) => <TabOption onClick={() => setSelectedTab(value)} className="strong-600" key={value} isSelected={selectedTab === value}>
                  {label}
                </TabOption>)
              }
            </TabContainer>
            <aside id="encoded-content" className="common-container">
              <InputContainer className="bt-inherit" $hasError={showJwtError}>
                <div className="title-band bt-inherit flex-center-y">
                  <span className="title-text">
                    JWT
                  </span>
                  <span>
                    <Popover popoverContent={"JWT will update Automatically when you edit Header, Payload and Signing key data"}>
                      <Image src={"images/help.svg"} alt="help" width={10} height={10} />
                    </Popover>
                  </span>
                </div>
                <div className="content inner-content bb-inherit">
                  <div className="token code">
                    <JWTInputEditor onChange={onTokenValueChange} value={tokenValue} />
                  </div>
                  <button className="copy-btn strong-600" onClick={copyJwtClickHandler}>
                    Copy JWT
                    <Image alt={"copy to clipboard"} width={10} height={10} src={"images/clipboard.svg"} />
                  </button>
                </div>
              </InputContainer>
            </aside>

            <div id="decoded-content" className="input-container common-container">
              <div className="title-band bt-inherit" id="header">
                <div className="title-text">Header</div>
                <div className="dropdown-outer"><Dropdown selected={selectedAlgorithm} options={algorithmOptions} onChange={setSelectedAlgorithm} /></div>
              </div>
              <div className="inner-content code">
                <InputEditor onValueChange={headerValueChangeHandler} 
                value={headerValue}
                 />
              </div>
              <InputContainer $hasError={showPayloadError}>
                <div className="title-band" id="payload">
                  <span className="title-text">Payload</span>
                </div>
                <div className="inner-content code">
                  <InputEditor 
                  value={payload}
                  onChange={(value, viewUpdate)=>{
                    onPayloadChange(value);
                  }} />
                </div>
              </InputContainer>

              <div className="title-band" id="signing-key">Signing Key</div>

              <div className="inner-content signing-jey code">
                <InputEditor onValueChange={setSigningKey} value={signingKey} />
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