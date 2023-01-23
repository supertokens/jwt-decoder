import Image from "next/image"
import React, { useEffect, useRef, useState } from "react"
import ExplanationContent from "../../components/jwt-decoder/explanation-content.component"
import { InputContainer, JwtContainerStyled, TabContainer, TabOption } from "./jwt-decoder.styles"
import Dropdown, { IDropdownOption } from "../../components/common/dropdown/dropdown.component"
import Popover from "../../components/common/popover/popover.component"
import { algorithmOptions, defaultTokens, optionsList, TOption } from "../../assets/constants"
import * as jose from 'jose'
import InputEditor, { JWTInputEditor } from "../../components/jwt-decoder/json-input.components"
import js_beautify from "js-beautify"

// Create a JWT with a payload
const payload = {
  name: "John Doe",
  email: "johndoe@example.com"
};


const sampleToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE2NjU3MjQyNzMsImV4cCI6MTY5NzI2MDI3MywiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsIkdpdmVuTmFtZSI6IkpvaG5ueSIsIlN1cm5hbWUiOiJSb2NrZXQiLCJFbWFpbCI6Impyb2NrZXRAZXhhbXBsZS5jb20iLCJSb2xlIjoiTWFuYWdlciJ9.4d7mG0jzELVxjwbYTZxH_OjhC4h3lFI0YTEZYzmmmNc'

const sampleToken2 = 'eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiZG9udHJlbWVtYmVyIiwiSXNzdWVyIjoiSXNzdWVyIiwiVXNlcm5hbWUiOiJzb21lb25lIiwiZXhwIjoxNjczNjAzODgzLCJpYXQiOjE2NzM2MDM4ODN9.IAI3so_yuxr_8QUgbXBPr8JtoK_fAX7hXqR1xadiWLQ'

const sampleSigningKey = 'MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCsi4JJaPHjlrh/gDnVOHISFE59M8MkojCbhZ9'


const placeholderSigningKey = '---Enter-your-256-bit-key---'
const signingKeyConstants = {
  prefix: `( 
    base64UrlEncode(header) + "." +
    base64UrlEncode(payload),`,
  postfix: `)`,
}

// When the token changes, change the payload
// When the payload changes, change the token

const formatJSON = json => js_beautify(JSON.stringify(json), { indent_size: 1 })

const JwtDecoder = () => {
  const [showMoreContent, setShowMoreContent] = useState(false);
  const [selectedAlgorithm, setSelectedAlgorithm] = useState(algorithmOptions[0]);

  const [header, setHeader] = useState<string>(formatJSON({
    "alg": selectedAlgorithm.label,
    "typ": "jwt"
  }))

  const [tokenValue, setTokenValue] = useState(sampleToken);

  const [showJwtError, setShowJwtError] = useState(false);
  const [showPayloadError, setShowPayloadError] = useState(false);
  const [showHeaderError, setShowHeaderError] = useState(false);

  const [payload, setPayload] = useState('{}');
  const [publicSigningKey, setPublicSigningKey] = useState(placeholderSigningKey);
  const [privateSigningKey, setPrivateSigningKey] = useState("-");

  const [selectedTab, setSelectedTab] = useState<TOption>("encoded");


  const onPayloadChange = async (p: string) => {
    setShowPayloadError(false);
    setPayload(p);
    populateTokenFromPayload(p);
  }

  const onTokenValueChange = async (t: string) => {
    setShowJwtError(false);
    setTokenValue(t);
    populatePayloadFromToken(t);
  }

  const populatePayloadFromToken = async (token: string) => {
    try {
      setShowJwtError(false);
      const decoded = jose.decodeJwt(token);
      setPayload(formatJSON(decoded))
    } catch (error) {
      setShowJwtError(true);
    }
  }

  const populateTokenFromPayload = async (payload: string) => {
    try {
      const secret = new TextEncoder().encode(publicSigningKey)
      const jwt = await new jose.SignJWT(JSON.parse(payload))
        .setProtectedHeader(JSON.parse(header))
        .sign(secret);
      setTokenValue(jwt);
    } catch (error) {
      console.log(error)
      setShowPayloadError(true);
    }
  }

  useEffect(() => {
    populatePayloadFromToken(tokenValue);
  }, [])

  // If the token is empty and the algorithm is changed, insert a placeholder token value.
  useEffect(() => {
    onTokenValueChange(defaultTokens[selectedAlgorithm.value])
  }, [selectedAlgorithm])

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
    <JwtContainerStyled $selectedTab={selectedTab} $selectedAlg={selectedAlgorithm.value} className="jwt-decoder-container">
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
              <InputContainer className="bt-inherit token-container" $hasError={showJwtError}>
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
                <div className="content bb-inherit">
                  <div className="token code">
                    <div className="inner-content scroll-container">
                      <JWTInputEditor onValueChange={onTokenValueChange} value={tokenValue} />
                    </div>
                  </div>
                  <div className="inner-content">
                    <button id="copy-btn" className="strong-600" onClick={copyJwtClickHandler}>
                      Copy JWT
                      <Image alt={"copy to clipboard"} width={10} height={10} src={"images/clipboard.svg"} />
                    </button>
                  </div>

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
                  value={header}
                />
              </div>
              <InputContainer $hasError={showPayloadError}>
                <div className="title-band" id="payload">
                  <span className="title-text">Payload</span>
                </div>
                <div className="inner-content code">
                  <InputEditor
                    value={payload}
                    onChange={(value, viewUpdate) => {
                      onPayloadChange(value);
                    }} />
                </div>
              </InputContainer>

              <div className="title-band" id="signing-key">Signing Key</div>

              <div className="inner-content code">
                <pre>
                  {selectedAlgorithm?.signingMethodName}{signingKeyConstants.prefix}
                </pre>
                <div>
                  <InputEditor className="signing-key-editor" onValueChange={setPublicSigningKey} value={publicSigningKey} />
                </div>
                <pre>
                  {signingKeyConstants.postfix}
                </pre>
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