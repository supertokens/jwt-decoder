import { type IDropdownOption } from '../components/common/dropdown/dropdown.component';

export enum Algorithms {
  HS256 = 'HS256',
  ES256 = 'ES256',
  RS256 = 'RS256',
  PS256 = 'PS256',
  // EdDSA = 'EdDSA',
}

export interface IAlgorithmOption extends IDropdownOption {
  signingMethodName: string;
  requiresBothKeys?: boolean;
}

export const algorithmOptions: IAlgorithmOption[] = [
  {
    label: 'HS256',
    value: Algorithms.HS256,
    signingMethodName: 'HMACSHA256',
    requiresBothKeys: false,
  },
  {
    label: 'ES256',
    value: Algorithms.ES256,
    signingMethodName: 'ECDSASHA256',
    requiresBothKeys: true,
  },
  {
    label: 'RS256',
    value: Algorithms.RS256,
    signingMethodName: 'HMACSHA256',
    requiresBothKeys: true,
  },
  {
    label: 'PS256',
    value: Algorithms.PS256,
    signingMethodName: 'HMACSHA256',
    requiresBothKeys: true,
  },
  // {
  //   label: 'EdDSA',
  //   value: Algorithms.EdDSA,
  // },
];

export type TOption = 'encoded' | 'decoded';

export const optionsList: { label: string; value: TOption }[] = [
  {
    label: 'Encoded',
    value: 'encoded',
  },
  {
    label: 'Decoded',
    value: 'decoded',
  },
];

export const defaultTokens: { [key in Algorithms]: string } = {
  [Algorithms.HS256]: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c`,
  [Algorithms.ES256]: `eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.tyh-VfuzIxCyGYDlkBA7DfyjrqmSHu6pQ2hoZuFqUSLPNY2N0mpHb3nk5K17HWP_3cYHBw7AhHale5wky6-sVA`,
  [Algorithms.RS256]: `eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.NHVaYe26MbtOYhSKkoKYdFVomg4i8ZJd8_-RU8VNbftc4TSMb4bXP3l3YlNWACwyXPGffz5aXHc6lty1Y2t4SWRqGteragsVdZufDn5BlnJl9pdR_kdVFUsra2rWKEofkZeIC4yWytE58sMIihvo9H1ScmmVwBcQP6XETqYd0aSHp1gOa9RdUPDvoXQ5oqygTqVtxaDr6wUFKrKItgBMzWIdNZ6y7O9E0DhEPTbE9rfBo6KTFsHAZnMg4k68CDp2woYIaXbmYTWcvbzIuHO7_37GT79XdIwkm95QJ7hYC9RiwrV7mesbY4PAahERJawntho0my942XheVLmGwLMBkQ`,
  [Algorithms.PS256]: `eyJhbGciOiJQUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.iOeNU4dAFFeBwNj6qdhdvm-IvDQrTa6R22lQVJVuWJxorJfeQww5Nwsra0PjaOYhAMj9jNMO5YLmud8U7iQ5gJK2zYyepeSuXhfSi8yjFZfRiSkelqSkU19I-Ja8aQBDbqXf2SAWA8mHF8VS3F08rgEaLCyv98fLLH4vSvsJGf6ueZSLKDVXz24rZRXGWtYYk_OYYTVgR1cg0BLCsuCvqZvHleImJKiWmtS0-CymMO4MMjCy_FIl6I56NqLE9C87tUVpo1mT-kbg5cHDD8I7MjCW5Iii5dethB4Vid3mZ6emKjVYgXrtkOQ-JyGMh6fnQxEFN1ft33GX2eRHluK9eg`,
  // [Algorithms.EdDSA]: ``,
};

export const placeholderSecretKey = '---Enter-your-256-bit-key---'
export const signingKeyConstants = {
  prefix: `( 
    base64UrlEncode(header) + "." +
    base64UrlEncode(payload),`,
  postfix: `)`,
}

export const initPayload = {
  "sub": "1234567890",
  "name": "John Doe",
  "iat": 1516239022
}

// For ES256
export const samplePublicKey = `-----BEGIN PUBLIC KEY-----
MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEEVs/o5+uQbTjL3chynL4wXgUg2R9
q9UU8I5mEovUf86QZ7kOBIjJwqnzD1omageEHWwHdBO6B+dFabmdT9POxg==
-----END PUBLIC KEY-----`

export const samplePrivateKey = `-----BEGIN PRIVATE KEY-----
MIGHAgEAMBMGByqGSM49AgEGCCqGSM49AwEHBG0wawIBAQQgevZzL1gdAFr88hb2
OF/2NxApJCzGCEDdfSp6VQO30hyhRANCAAQRWz+jn65BtOMvdyHKcvjBeBSDZH2r
1RTwjmYSi9R/zpBnuQ4EiMnCqfMPWiZqB4QdbAd0E7oH50VpuZ1P087G
-----END PRIVATE KEY-----`