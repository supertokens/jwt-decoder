import Image from "next/image"
import React, { useState } from "react"
import ExplanationContent from "./explanation-content.component"
import { JwtContainerStyled } from "./jwt-decoder.styles"
import Dropdown, { type IDropdownOption } from "../../components/dropdown/dropdown.component"
// import "../style/jwt-decoder.module.css";

const algorithmOptions:IDropdownOption[] = [
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

const JwtDecoder = () => {
  const [showMoreContent, setShowMoreContent] = useState(false);
  const [selectedAlgorithm, setSelectedAlgorithm] = useState(algorithmOptions[0])

  return (
    <JwtContainerStyled className="jwt-decoder-container">
      <main className="inner-container">
        <article className="hero-container">
          <h3 className="title">JWT Decoder</h3>
          <section className="decoder-main-container">
            <aside className="decoded common-container">
              <div className="title-band bt-inherit header flex-center-y">
                <span>
                  JWT
                </span>
                <span>
                  <Image src={"images/help.svg"} alt="help" width={10} height={10} />
                </span>
              </div>
              <div className="content inner-content">
                <div className="token code">
                  eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE2NjU3MjQyNzMsImV4cCI6MTY5NzI2MDI3MywiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsIkdpdmVuTmFtZSI6IkpvaG5ueSIsIlN1cm5hbWUiOiJSb2NrZXQiLCJFbWFpbCI6Impyb2NrZXRAZXhhbXBsZS5jb20iLCJSb2xlIjoiTWFuYWdlciJ9.4d7mG0jzELVxjwbYTZxH_OjhC4h3lFI0YTEZYzmmmNc
                </div>
                <button className="copy-btn">
                  Copy JWT
                  <Image alt={"copy to clipboard"} width={10} height={10} src={"images/clipboard.svg"} />
                </button>
              </div>

            </aside>
            <div className="input-container common-container">
              <div className="title-band bt-inherit" id="header">
                <div>Header</div>
                <div><Dropdown selected={selectedAlgorithm} options={algorithmOptions} onChange={setSelectedAlgorithm}/></div>
              </div>
              <div className="inner-content code-alternate">{JSON.stringify({
                "alg": "HS256",
                "typ": "jwt"
              })}</div>
              <div className="title-band">Payload</div>
              <div className="inner-content payload code">
                {JSON.stringify({
                  "iss": "SuperTokens.io",
                  "sub": "evander",
                  "aud": "antonio",
                  "iat": 1665729065,
                  "exp": 1665729665
                }, null, 2)}
              </div>
              <div className="title-band">Signing Key</div>
              <div className="inner-content signing-key code-alternate">
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