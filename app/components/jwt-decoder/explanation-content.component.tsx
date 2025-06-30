import Image from "next/image";
import React from "react";
import { StructureOfJwt } from "../../assets/images";
import { ExplanationContainerStyled } from "../../pages/jwt-decoder/jwt-decoder.styles";

const ExplanationContent = () => {
    return (
        <ExplanationContainerStyled className="explanation-content-container">
            <section className="jwts-introduction">
                <h2 className="title">What are JWTs</h2>
                <div>
                    <p>JSON Web Token is an open industry standard used to share information between two entities.</p>
                    <p>
                        They contain JSON objects which have the information that needs to be shared. Each JWT is also
                        signed using cryptography to ensure that the client or a malicious party cannot alter the JSON
                        contents.
                    </p>
                </div>
            </section>

            <section className="structure">
                <h2 className="title">Structure of a JWT</h2>
                <p>
                    A JWT contains three distinct parts that work together to create a secure, self-contained token.
                    These parts are separated by dots (.) and each serves a specific purpose in the token's
                    functionality and security. The three parts are:
                </p>
                <div className="parts-of-jwt">
                    <div className="part">
                        <h3>Header</h3>
                        <p>The header contains metadata about the token. It consists of two parts:</p>
                        <ul>
                            <li>The signing algorithm that's being used.</li>
                            <li>The type of token, which, in this case, is mostly "JWT"</li>
                        </ul>
                    </div>

                    <div className="part">
                        <h3>Payload</h3>
                        <p className="description">
                            The payload contains the claims or the JSON object. It is a JSON object that is encoded
                            using Base64Url encoding.
                        </p>

                        <div className="claims-details">
                            <h4>Common JWT Claims:</h4>
                            <ul>
                                <li>
                                    <strong>iss:</strong> The issuer of the token (in this case Google)
                                </li>
                                <li>
                                    <strong>azp and aud:</strong> Client IDs issued by Google for your application. This
                                    way, Google knows which website is trying to use its sign in service, and the
                                    website knows that the JWT was issued specifically for them.
                                </li>
                                <li>
                                    <strong>sub:</strong> The end user's Google user ID
                                </li>
                                <li>
                                    <strong>at_hash:</strong> The hash of the access token. The OAuth access token is
                                    different from the JWT in the sense that it's an opaque token. The access token's
                                    purpose is so that the client application can query Google to ask for more
                                    information about the signed in user.
                                </li>
                                <li>
                                    <strong>email:</strong> The end user's email ID
                                </li>
                                <li>
                                    <strong>email_verified:</strong> Whether or not the user has verified their email.
                                </li>
                                <li>
                                    <strong>iat:</strong> The time (in milliseconds since epoch) the JWT was created.
                                </li>
                                <li>
                                    <strong>exp:</strong> The time (in milliseconds since epoch) the JWT will expire.
                                </li>
                                <li>
                                    <strong>nonce:</strong> Can be used by the client application to prevent replay
                                    attacks.
                                </li>
                                <li>
                                    <strong>hd:</strong> The hosted G Suite domain of the user
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="part">
                        <h3>Signature</h3>
                        <p className="description">
                            A string that is generated via a cryptographic algorithm that can be used to verify the
                            integrity of the JSON payload.
                        </p>
                    </div>
                </div>

                <figure className="structure-img">
                    <Image
                        src={StructureOfJwt}
                        alt="Structure of a JSON Web Token"
                        fill
                        style={{ objectFit: "contain" }}
                    />
                </figure>
            </section>

            <section className="use-cases">
                <h2 className="title">Common Use Cases for JWT Decoding</h2>
                <div>
                    <div className="use-case">
                        <h3>Debugging Authentication Issues</h3>
                        <p>
                            When users report issues with login or permissions, decoding the JWT reveals critical claims
                            like exp (expiration), iss (issuer), aud (audience), and scope or roles. This inspection
                            helps identify issues like expired tokens, incorrect issuers, or missing permissions—before
                            they lead to broken workflows.
                        </p>
                    </div>

                    <div className="use-case">
                        <h3>Inspecting Token Claims</h3>
                        <p>
                            JWTs contain structured claims that reveal user roles or privileges. Developers decode
                            access tokens during runtime to populate UI features (e.g., showing admin-only options) or
                            enforce backend ACLs based on claims such as roles or scope.
                        </p>
                    </div>
                </div>
            </section>

            <section className="security-considerations">
                <h2 className="title">Security Considerations ⚠️</h2>
                <div>
                    <div className="security-topic">
                        <h3>Signature Verification</h3>
                        <p>
                            Never rely on decoded data alone. Always verify the signature to ensure the token wasn't
                            forged or tampered with.
                        </p>
                    </div>

                    <div className="security-topic">
                        <h3>Risks of Decoding Unverified Tokens</h3>
                        <p>Decoding without verification can expose you to:</p>
                        <ul>
                            <li>Injection of false claims</li>
                            <li>Expired or replayed tokens</li>
                            <li>Forged user roles or escalated privileges</li>
                        </ul>
                    </div>
                </div>
            </section>
            <p>
                You can find our complete guide on how JWT works and how you can generate JWTs in this{" "}
                <a rel="nofollow" href="/blog/what-is-jwt" target={"_blank"}>
                    blog.
                </a>
            </p>
        </ExplanationContainerStyled>
    );
};

export default ExplanationContent;
