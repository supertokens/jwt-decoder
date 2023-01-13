import Image from "next/image"
import React from "react"
import { ExplanationContainerStyled } from "./jwt-decoder.styles"

const ExplanationContent = () => {
  return (
    <ExplanationContainerStyled className="explanation-content-container">
      <section className="jwts-introduction">
        <h3 className="title">What are JWTs</h3>
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
        <h3 className="title">Structure of a JWT</h3>
        <div>
          <p>
            A JWT contains three parts:
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
            <Image src={"/images/structure-of-jwt.png"} alt='Structure of a JSON Web Token'
              fill
              style={{ objectFit: "contain" }}
            />
          </figure>
        </div>
      </section>


    </ExplanationContainerStyled>
  )
}

export default ExplanationContent