import Image from "next/image"
import React from "react"
import { StructureOfJwt } from "../../assets/images"
import { ExplanationContainerStyled } from "../../pages/jwt-decoder/jwt-decoder.styles"

const ExplanationContent = () => {
  return (
    <ExplanationContainerStyled className="explanation-content-container">
      <section className="jwts-introduction">
        <h2 className="title">What are JWTs</h2>
        <div>
          <p>
            JSON Web Token is an open industry standard used to share information between two entities.
          </p>
          <p>
            They contain JSON objects which have the information that needs to be shared. Each JWT is also signed using cryptography to ensure that the client or a malicious party cannot alter the JSON contents.
          </p>
        </div>
      </section>

      <section className="structure">
        <h2 className="title">Structure of a JWT</h2>
        <div>
          <p>
            A JWT contains three parts:
            {/*Each part of the JWT needs to be in an h3 tag, i.e. Header, Payload and signiture and we should give a single line description of the sub fields
              - Summerizing the contents of https://supertokens.com/blog/what-is-jwt#jwt-claim-convention into this section
            */}
            
          </p>
          <ul className="parts-of-jwt">
            <li><span className="part-name header">Header:</span><div className="description">
              Consists of two parts:
              <ul>
                <li>
                  The signing algorithm that's being used.
                </li>
                <li>
                  The type of token, which, in this case, is mostly “JWT”
                </li>
              </ul>
            </div>
            </li>
            <li>
              <span className="part-name payload">Payload: </span>
              <div className="description">
              The payload contains the claims or the JSON object.
              </div>
            </li>
            <li>
              <span className="part-name signature">Signature: </span>
              <div className="description">
              A string that is generated via a cryptographic algorithm that can be used to verify the integrity of the JSON payload.
              </div>
            </li>
          </ul>

          <figure className="structure-img">
            <Image src={StructureOfJwt} alt='Structure of a JSON Web Token'
              fill
              style={{ objectFit: "contain" }}
            />
          </figure>
        </div>
      </section>

      <p>
      You can find our complete guide on how JWT works and how you can generate JWTs in this <a rel="nofollow" href="/blog/what-is-jwt" target={"_blank"}>blog.</a>
      </p>

    {/* Need to add another section 
    
      ## Common Use Cases for JWT Decoding
      - *Debugging Authentication Issues*
        - When users report issues with login or permissions, decoding the JWT reveals critical claims like exp (expiration), iss (issuer), aud (audience), and scope or roles. This inspection helps identify issues like expired tokens, incorrect issuers, or missing permissions—before they lead to broken workflows
      - *Inspecting Token Claims*
        - JWTs contain structured claims that reveal user roles or privileges. Developers decode access tokens during runtime to populate UI features (e.g., showing admin-only options) or enforce backend ACLs based on claims such as roles or scope.
    */}


    {/* New Section
      ## Security Considerations ⚠️
      
      ### Signature Verification
      Never rely on decoded data alone. Always verify the signature to ensure the token wasn't forged or tampered with.

      ### Risks of Decoding Unverified Tokens
      ⚠️ Decoding without verification can expose you to:
        - Injection of false claims
        - Expired or replayed tokens
        - Forged user roles or escalated privileges    
    */}
    </ExplanationContainerStyled>
  )
}

export default ExplanationContent