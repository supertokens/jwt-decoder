import React, { useState } from "react"
import ExplanationContent from "./explanation-content.component"
import { JwtContainerStyled } from "./jwt-decoder.styles"
// import "../style/jwt-decoder.module.css";

const algorithms = [
  {

  }
]

const JwtDecoder = () => {
  const [showMoreContent, setShowMoreContent] = useState(false);

  return (
    <JwtContainerStyled className="jwt-decoder-container">
      <main className="inner-container">
        <article className="hero-container">
          <h3 className="title">JWT Decoder</h3>
          <section className="decoder-main-container">
            <aside className="decoded common-container">
              <div className="title-band bt-inherit header">
                JWT
              </div>
              <div className="content inner-content">
                <div>
                  eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE2NjU3MjQyNzMsImV4cCI6MTY5NzI2MDI3MywiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsIkdpdmVuTmFtZSI6IkpvaG5ueSIsIlN1cm5hbWUiOiJSb2NrZXQiLCJFbWFpbCI6Impyb2NrZXRAZXhhbXBsZS5jb20iLCJSb2xlIjoiTWFuYWdlciJ9.4d7mG0jzELVxjwbYTZxH_OjhC4h3lFI0YTEZYzmmmNc
                </div>
                <button className="copy-btn">
                  Copy JWT
                  <span>Clipboard</span>
                </button>
              </div>

            </aside>
            <div className="input-container common-container">
              <div className="title-band bt-inherit">Header</div>
              <div className="inner-content">{JSON.stringify({
                "alg": "HS256",
                "typ": "jwt"
              })}</div>
              <div className="title-band">Payload</div>
              <div className="inner-content payload">
                {JSON.stringify({
                  "iss": "SuperTokens.io",
                  "sub": "evander",
                  "aud": "antonio",
                  "iat": 1665729065,
                  "exp": 1665729665
                }, null, 2)}
              </div>
              <div className="title-band">Signing Key</div>
              <div className="inner-content signing-key">
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
            {!showMoreContent && <span role={"button"} onClick={() => setShowMoreContent(true)}>Read More ^</span>}
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