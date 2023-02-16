import React, { useEffect, useState } from "react"
import Image from "next/image"
import * as jose from 'jose'
import js_beautify from "js-beautify"
import ExplanationContent from "../../components/jwt-decoder/explanation-content.component"
import { InputContainer, JwtContainerStyled, TabContainer, TabOption } from "./jwt-decoder.styles"
import Dropdown from "../../components/common/dropdown/dropdown.component"
import Popover from "../../components/common/popover/popover.component"
import { algorithmOptions, Algorithms, defaultSigningKeys, defaultTokens, IAlgorithmOption, optionsList, placeholderSecretKey, samplePrivateKey, samplePublicKey, signingKeyConstants, TOption } from "../../assets/constants"
import InputEditor, { JWTInputEditor } from "../../components/jwt-decoder/json-input.components"
import usePreviousValue from "../../hooks/usePreviousValue"
import { ChevronDownIcon, ClipboardIcon, HelpIcon, InvalidSignatureIcon, ValidSignatureIcon } from "../../assets/images"

interface IPopulateToken {
  newPayload?: string;
  newSecretKey?: string;
  newHeader?: string;
  newPrivateKey?: string;
  newPublicKey?: string;
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
  // Getting the previous value to see if there's a change in algorithm
  const previousHeaderValue = usePreviousValue(header);

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
    populateTokenFromPayload({ newPayload: p });
  }

  const onTokenValueChange = async (t: string) => {
    setShowPayloadError(false);
    setShowJwtError(false);
    populateDecodedContentFromToken(t);
    setTokenValue(t)
  }

  const onSecretKeyChange = async (s: string) => {
    setShowPayloadError(false);
    setSecretKey(s);
    populateTokenFromPayload({ newSecretKey: s })
  }

  const onPrivateKeyChange = async (k: string) => {
    setPrivateSigningKey(k);
    populateTokenFromPayload({ newPrivateKey: k })
  }

  const onPublicKeyChange = async (k: string) => {
    try {
      setPublicSigningKey(k);
      await verifySignatureValidity({ enteredPublicKey: k });
    } catch (error) {
      setShowSigningKeyError(true)
    }
  }

  const onAlgorithmChangeFromDropdown = (algOption: IAlgorithmOption) => {
    setShowHeaderError(false);
    setHeader(formatJSON({
      "alg": algOption.value,
      "typ": "JWT"
    }))
    onAlgorithmChange(algOption);
  }

  const populateDecodedContentFromToken = async (token: string) => {
    try {
      setShowJwtError(false);
      const decoded = jose.decodeJwt(token);
      const protectedHeader = jose.decodeProtectedHeader(token);
      setHeader(formatJSON(protectedHeader));
      try {
        if (JSON.parse(previousHeaderValue).alg !== protectedHeader.alg) {
          const algOption = algorithmOptions.find(a => a.value === protectedHeader.alg)
          if (algOption) {
            onAlgorithmChange(algOption, false);
          };
        }
      } catch (error) { }
      setPayload(formatJSON(decoded))
    } catch (error) {
      setShowJwtError(true);
    }
  }

  const verifySignatureValidity = async ({
    algorithm = selectedAlgorithm,
    enteredPublicKey = publicSigningKey,
    newHeader = header,
    jwt = tokenValue
  }): Promise<boolean> => {
    try {
      setShowSigningKeyError(false)
      const alg = algorithm.value
      const spki = enteredPublicKey
      const publicKey = await jose.importSPKI(spki, alg)
      const { payload, protectedHeader } = await jose.jwtVerify(jwt, publicKey, JSON.parse(newHeader))
      return true
    } catch (error) {
      setShowSigningKeyError(true)
      return false
    }
  }

  const populateTokenFromPayload = async ({
    newPayload = payload, newSecretKey = secretKey, newHeader = header,
    algorithm = selectedAlgorithm, newPrivateKey = privateSigningKey
  }: IPopulateToken) => {
    try {
      setShowPayloadError(false)
      setShowSigningKeyError(false)
      const alg = algorithm.value
      let jwt: string;
      let signingKey: jose.KeyLike | Uint8Array;

      try {
        if (algorithm.isAsymmetric) {
          signingKey = await jose.importPKCS8(newPrivateKey, alg)
        } else {
          signingKey = new TextEncoder().encode(newSecretKey);
        }
      } catch (error) {
        setShowSigningKeyError(true)
      }

      jwt = await new jose.SignJWT(JSON.parse(newPayload))
        .setProtectedHeader(JSON.parse(newHeader))
        .sign(signingKey)

      if (algorithm.isAsymmetric && !(await verifySignatureValidity({ algorithm, newHeader, jwt }))) return;

      setTokenValue(jwt);
    } catch (error) {
      console.log('Payload error', error)
      if (error?.isSigningKeyError) setShowSigningKeyError(true)
      else setShowPayloadError(true);
    }
  }

  useEffect(() => {
    onAlgorithmChange(selectedAlgorithm);
  }, [])


  const onAlgorithmChange = (alg: IAlgorithmOption, triggerTokenChange = true) => {
    setShowHeaderError(false);
    setSelectedAlgorithm(alg)
    if (triggerTokenChange) {
      onTokenValueChange(defaultTokens[alg.value])
    }

    if (alg.isAsymmetric) {
      const { privateKey, publicKey } = defaultSigningKeys[alg.value as Algorithms]
      if (!privateKey) {
        setShowSigningKeyError(true)
      }
      setPrivateSigningKey(privateKey);
      setPublicSigningKey(publicKey);
    }
  }

  const copyJwtClickHandler = async () => {
    try {
      await navigator.clipboard.writeText(tokenValue);
    } catch (error) {
      console.log("Could not copy.")
    }
  }

  const detectAlgorithmChangeInHeader = (newlyParsedHeader: any) => {
    try {
      if (newlyParsedHeader.alg !== JSON.parse(previousHeaderValue)) {
        algorithmOptions;
        const algOption = algorithmOptions.find(alg => alg.value === newlyParsedHeader.alg);
        if (!algOption) throw ({ currentHeaderError: true })
        setSelectedAlgorithm(algOption)
      }
    } catch (error) {
      if (error.currentHeaderError) throw error;
      // no need to handle the error coming from parsing the previousHeaderValue, since it was handled in its own time
    }
  }

  const headerValueChangeHandler = (newHeader: string) => {
    try {
      setShowHeaderError(false);
      const headerParsed = JSON.parse(newHeader);
      if (!("alg" in headerParsed)) {
        throw Error("Invalid Header")
      }
      setHeader(newHeader);
      detectAlgorithmChangeInHeader(headerParsed)
      populateTokenFromPayload({ newHeader });
    } catch (error) {
      setShowHeaderError(true);
    }
  }

  const hasError = showSigningKeyError || showHeaderError || showPayloadError

  return (
    <JwtContainerStyled $selectedTab={selectedTab} $selectedAlg={selectedAlgorithm} className="jwt-decoder-container">
      <main className="inner-container">
        <article className="hero-container">
          <h3 className="title bold-700">JWT Decoder</h3>
          <section className="decoder-main-container">
            <TabContainer className="common-container tab-container">
              {
                optionsList.map(({ label, value }) => <TabOption onClick={() => setSelectedTab(value)} className="strong-600" key={value} isSelected={selectedTab === value}>
                  {label}
                </TabOption>)
              }
            </TabContainer>
            <aside id="encoded-content" className="common-container lg-left">
              <InputContainer className="bt-inherit token-container" $hasError={showJwtError}>
                <div className="title-band bt-inherit flex-center-y">
                  <span className="title-text">
                    JWT
                  </span>
                  <span>
                    <Popover popoverContent={"JWT will update Automatically when you edit Header, Payload and Signing key data"}>
                      <Image src={HelpIcon} alt="help" width={15} height={15} />
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
                      <Image alt={"copy to clipboard"} width={10} height={10} src={ClipboardIcon} />
                    </button>
                  </div>

                </div>
              </InputContainer>
            </aside>

            <div id="decoded-content" className="input-container common-container lg-right">
              <InputContainer $hasError={showHeaderError} className="title-band bt-inherit" id="header">
                <div className="title-text">Header</div>
                <div className="dropdown-outer"><Dropdown selected={selectedAlgorithm} options={algorithmOptions} onChange={onAlgorithmChangeFromDropdown} /></div>
              </InputContainer>
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
                    onValueChange={onPayloadChange}
                  />
                </div>
              </InputContainer>

              <div className={`title-band ${showSigningKeyError ? 'error' : ''}`} id="signing-key">Signing Key</div>

              <div className="inner-content code">
                <pre>
                  {selectedAlgorithm.signingMethodName}{signingKeyConstants.prefix}
                </pre>
                {
                  selectedAlgorithm.isAsymmetric ? <div className="keys-input-container">
                    <InputContainer className="key-container" $hasError={false}>
                      <div className="title-band">
                        <span className="title-text">Public Key</span>
                      </div>
                      <div className="code">
                        <InputEditor
                          className="signing-key-editor" onValueChange={onPublicKeyChange} value={publicSigningKey}
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
          <section className="note-and-indicator-container">
            <div className={`signature-validity-indicator lg-left bold-600 flex-center-y ` + (hasError ? 'is-invalid' : '')}>
              {
                hasError ? <>
                  <Image className="icon" src={InvalidSignatureIcon} alt={"Signature Invalid"} /><span>
                    Signature Invalid!
                  </span></> : <>
                  <Image className="icon" src={ValidSignatureIcon} alt={"Signature Verified"} /><span>
                    Signature Verified!
                  </span></>
              }

            </div>
            <div className="common-container note-container-outer lg-right">
              <div className="inner note">
                <b>Note:</b>{" "}
                <span>We do not store any information in our database and all processing is done on the client side.</span>
              </div>
            </div>

          </section>
          <div className="about">
            The JWT Decoder Tool allows you to decode JWTs for simple debugging. You can also create your own JWTs with custom payloads signed with your own secret for testing purposes.
          </div>
          <hr />
          <div className="read-more-container">
            {!showMoreContent && <span role={"button"} onClick={() => setShowMoreContent(true)}>Read More <Image className="down-chevron" src={ChevronDownIcon} alt="chevron-down" width={10} height={10} /></span>}
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