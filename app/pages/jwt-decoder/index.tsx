import React, { useEffect, useState } from "react"
import Image from "next/image"
import * as jose from 'jose'
import js_beautify from "js-beautify"
import ExplanationContent from "../../components/jwt-decoder/explanation-content.component"
import { InputContainer, JwtContainerStyled, TabContainer, TabOption } from "./jwt-decoder.styles"
import Dropdown from "../../components/common/dropdown/dropdown.component"
import Popover from "../../components/common/popover/popover.component"
import { algorithmOptions, Algorithms, defaultSigningKeys, defaultTokens, IAlgorithmOption, initPayload, optionsList, placeholderSecretKey, samplePrivateKey, samplePublicKey, signingKeyConstants, TOption } from "../../assets/constants"
import InputEditor, { JWTInputEditor } from "../../components/jwt-decoder/json-input.components"

interface IPopulateToken {
  newPayload?: string;
  newSecretKey?: string;
  newHeader?: string;
  privateKey?: string;
  publicKey?: string;
  algorithm?: IAlgorithmOption
}

const formatJSON = json => js_beautify(JSON.stringify(json), { indent_size: 2 })

const JwtDecoder = () => {
  // The flag to show / hide the informational content (hidden by default)
  const [showMoreContent, setShowMoreContent] = useState(false);
  // The algorithm
  const [selectedAlgorithm, setSelectedAlgorithm] = useState(algorithmOptions[0]);
  const [header, setHeader] = useState<string>(formatJSON({
    "alg": selectedAlgorithm.value,
    "typ": "jwt"
  }))

  const [tokenValue, setTokenValue] = useState("");

  const [showJwtError, setShowJwtError] = useState(false);
  const [showPayloadError, setShowPayloadError] = useState(false);
  const [showHeaderError, setShowHeaderError] = useState(false);

  const [payload, setPayload] = useState('{}');

  const [secretKey, setSecretKey] = useState(placeholderSecretKey)

  const [publicSigningKey, setPublicSigningKey] = useState(samplePublicKey);
  const [privateSigningKey, setPrivateSigningKey] = useState(samplePrivateKey);
  const [showSigningKeyError, setShowSigningKeyError] = useState(false);

  const [selectedTab, setSelectedTab] = useState<TOption>("encoded");


  const onPayloadChange = async (p: string) => {
    setShowPayloadError(false);
    setPayload(p);
    console.log("FROM PAYLOAD CHANGE")
    populateTokenFromPayload({ newPayload: p });
  }

  const onTokenValueChange = async (t: string) => {
    setShowJwtError(false);
    setTokenValue(t);
    populatePayloadFromToken(t);
  }

  const onSecretKeyChange = async (s: string) => {
    setShowPayloadError(false);
    setSecretKey(s);
    populateTokenFromPayload({ newSecretKey: s })
  }

  const onPrivateKeyChange = async (k: string) => {
    setPrivateSigningKey(k);
    populateTokenFromPayload({ privateKey: k })
  }

  const onPublicKeyChange = async (k: string) => {
    setPublicSigningKey(k);
    populateTokenFromPayload({ publicKey: k })
  }

  const onAlgorithmChange = (algOption: IAlgorithmOption) => {
    setHeader(formatJSON({
      "alg": algOption.value,
      "typ": "JWT"
    }))
    setSelectedAlgorithm(algOption)
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

  const populateTokenFromPayload = async ({
    newPayload = payload, newSecretKey = secretKey, newHeader = header, privateKey = privateSigningKey,
    algorithm = selectedAlgorithm
  }: IPopulateToken) => {
    try {
      setShowPayloadError(false)
      setShowSigningKeyError(false)
      // Based on the algorithm selected, generate a JWT
      const getSecretOrPublicKey = async () => {
        switch (algorithm.value) {
          case Algorithms.ES256:
            try {
              setShowSigningKeyError(false);
              if (privateSigningKey.toUpperCase().includes("PRIVATE KEY"))
                return await jose.importPKCS8(privateSigningKey, algorithm.value)
              else throw ("Can't find a private key")
            } catch (error) {
              setShowSigningKeyError(true);
            }
          case Algorithms.RS256:
            return await jose.importPKCS8(privateKey, algorithm.value);
          default:
            if (!newSecretKey.trim().length) throw ({ isSigningKeyError: true })
            return new TextEncoder().encode(newSecretKey)
        }
      }
      const jwt = await new jose.SignJWT(JSON.parse(newPayload))
        .setProtectedHeader(JSON.parse(newHeader))
        .sign(await getSecretOrPublicKey());
      setTokenValue(jwt);
    } catch (error) {
      if (error?.isSigningKeyError) setShowSigningKeyError(true)
      else setShowPayloadError(true);
    }
  }

  useEffect(() => {
    populateTokenFromPayload({ newPayload: JSON.stringify(initPayload) });
  }, [])

  // If the token is empty and the algorithm is changed, insert a placeholder token value.
  useEffect(() => {
    onTokenValueChange(defaultTokens[selectedAlgorithm.value])
    if (selectedAlgorithm.requiresBothKeys) {
      const { privateKey, publicKey } = defaultSigningKeys[selectedAlgorithm.value as Algorithms]
      if(!privateKey){
        setShowSigningKeyError(true)
      }
      setPrivateSigningKey(privateKey);
      setPublicSigningKey(publicKey);
    }
  }, [selectedAlgorithm])

  const copyJwtClickHandler = async () => {
    try {
      await navigator.clipboard.writeText(tokenValue);
    } catch (error) {
      console.log("Could not copy.")
    }
  }

  const headerValueChangeHandler = (newHeader: string) => {
    try {
      setShowHeaderError(false);
      if (!("alg" in JSON.parse(newHeader))) {
        throw Error("Invalid Header")
      }
      setHeader(newHeader)
      populateTokenFromPayload({ newHeader });
    } catch (error) {
      setShowHeaderError(true);
    }
  }

  return (
    <JwtContainerStyled $selectedTab={selectedTab} $selectedAlg={selectedAlgorithm} className="jwt-decoder-container">
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
                      <Image src={"images/help.svg"} alt="help" width={15} height={15} />
                    </Popover>
                  </span>
                </div>
                <div className="content bb-inherit">
                  <div className="token code">
                    <div className="inner-content scroll-container">
                      <JWTInputEditor onValueChange={onTokenValueChange} value={tokenValue} />
                    </div>
                  </div>
                  <div id="clipboard-btn-container">
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
                <div className="dropdown-outer"><Dropdown selected={selectedAlgorithm} options={algorithmOptions} onChange={onAlgorithmChange} /></div>
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
                    onChange={onPayloadChange}
                  />
                </div>
              </InputContainer>

              <div className={`title-band ${showSigningKeyError ? 'error' : ''}`} id="signing-key">Signing Key</div>

              <div className="inner-content code">
                <pre>
                  {selectedAlgorithm.signingMethodName}{signingKeyConstants.prefix}
                </pre>
                {
                  selectedAlgorithm.requiresBothKeys ? <div className="keys-input-container">
                    <InputContainer className="key-container" $hasError={false}>
                      <div className="title-band">
                        <span className="title-text">Public Key</span>
                      </div>
                      <div className="code">
                        <InputEditor
                          className="signing-key-editor" onValueChange={setPublicSigningKey} value={publicSigningKey}
                        />
                      </div>
                    </InputContainer>
                    <InputContainer className="key-container" $hasError={false}>
                      <div className="title-band">
                        <span className="title-text">Private Key</span>
                      </div>
                      <div className="code">
                        <InputEditor
                          className="signing-key-editor" onValueChange={onPrivateKeyChange} value={privateSigningKey} />
                      </div>
                    </InputContainer>
                  </div> :
                    <InputEditor className="signing-key-editor" onValueChange={onSecretKeyChange} value={secretKey} />
                }
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
            The JWT Decoder Tool allows you to decode JWTs for simple debugging. You can also create your own JWTs with custom payloads signed with your own secret for testing purposes.
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