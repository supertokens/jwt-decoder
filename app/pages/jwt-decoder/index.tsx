import Image from "next/image"
import React, { useEffect, useState } from "react"
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

const sampleSigningKey2 = ""

const JwtDecoder = () => {
  const [showMoreContent, setShowMoreContent] = useState(false);

  const [selectedAlgorithm, setSelectedAlgorithm] = useState(algorithmOptions[0]);
  const [tokenValue, setTokenValue] = useState(sampleToken);

  const [showJwtError, setShowJwtError] = useState(false);
  const [showPayloadError, setShowPayloadError] = useState(false);

  const [payload, setPayload] = useState("");

  const [signingKey, setSigningKey] = useState(sampleSigningKey2);

  const [selectedTab, setSelectedTab] = useState<TOption>("encoded")

  // useEffect(() => {
  //   try {
  //     setShowTokenError(false);
  //     const decoded = jwt_decode<string>(tokenValue);
  //     console.log(decoded, '@@@@@@@')
  //     setPayload(JSON.stringify(decoded, null, 2))
  //   } catch (error) {
  //     console.log(error)
  //     setShowTokenError(true);
  //   }
  // }, [tokenValue])


  useEffect(() => {
    const someFn = async () => {
      try {
        setShowJwtError(false);
        const decoded = jose.decodeJwt(tokenValue);
        // console.log(decoded, '@@@@@@JOSE')
        // jose.EncryptJWT()
        // Jose.JWT.Encode(payload, privateKey, JwsAlgorithm.RS25


        setPayload(JSON.stringify(decoded, null, 2))
      } catch (error) {
        console.log(error)
        setShowJwtError(true);
      }
    }

    someFn();
  }, [tokenValue])


  const decodeJwt = async () => {
    const jwt =
      'eyJhbGciOiJkaXIiLCJlbmMiOiJBMTI4Q0JDLUhTMjU2In0..MB66qstZBPxAXKdsjet_lA.WHbtJTl4taHp7otOHLq3hBvv0yNPsPEKHYInmCPdDDeyV1kU-f-tGEiU4FxlSqkqAT2hVs8_wMNiQFAzPU1PUgIqWCPsBrPP3TtxYsrtwagpn4SvCsUsx0Mhw9ZhliAO8CLmCBQkqr_T9AcYsz5uZw.7nX9m7BGUu_u1p1qFHzyIg'
  }

  const generateAndSetJwt = async () => {

  }


  useEffect(() => {
    generateAndSetJwt();
  }, [payload])


  useEffect(() => {
    setTokenValue(defaultTokens[selectedAlgorithm.value])
  }, [selectedAlgorithm])

  const onPayloadChange = e => {
    setPayload(e.target.value)
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

            <InputContainer $hasError={showJwtError} as="aside" id="encoded-content" className="encoded common-container">
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
                <div className="token code">
                  <JWTInputEditor onChange={setTokenValue} value={tokenValue} />
                </div>
                <button className="copy-btn strong-600">
                  Copy JWT
                  <Image alt={"copy to clipboard"} width={10} height={10} src={"images/clipboard.svg"} />
                </button>
              </div>
            </InputContainer>

            <div id="decoded-content" className="input-container common-container">
              <div className="title-band bt-inherit" id="header">
                <div>Header</div>
                <div className="dropdown-outer"><Dropdown selected={selectedAlgorithm} options={algorithmOptions} onChange={setSelectedAlgorithm} /></div>
              </div>
              <div className="inner-content header code">
                <InputEditor onValueChange={() => null} value={JSON.stringify({
                  "alg": selectedAlgorithm.label,
                  "typ": "jwt"
                }, null, 2)} />

              </div>
              <div className="title-band" id="payload">Payload</div>
              <div className="inner-content code">
                <InputEditor onValueChange={setPayload} value={payload} />
              </div>
              <div className="title-band" id="signing-key">Signing Key</div>

              <div className="inner-content signing-jey code">
                <InputEditor placeholder={"Enter your signing key here."} onValueChange={setSigningKey} value={signingKey} />
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