import React from "react"

const ExplanationContent = () => {
  return (
    <article className="explanation-content-container">
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
          <ul>
            <li>Header: Consists of two parts: 
              <ul>
                <li>
                The signing algorithm that’s being used.
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </section>


    </article>
  )
}

export default ExplanationContent