import { type IDropdownOption } from "../components/common/dropdown/dropdown.component";

export enum Algorithms {
  HS256 = "HS256",
  HS384 = "HS384",
  HS512 = "HS512",
  ES256 = "ES256",
  RS256 = "RS256",
  PS256 = "PS256",
}

export interface IAlgorithmOption extends IDropdownOption {
  signingMethodName: string;
  requiresBothKeys?: boolean;
}

export const algorithmOptions: IAlgorithmOption[] = [
  {
    label: "HS256",
    value: Algorithms.HS256,
    signingMethodName: "HMACSHA256",
    requiresBothKeys: false,
  },
  {
    label: "HS384",
    value: Algorithms.HS384,
    signingMethodName: "HMACSHA384",
    requiresBothKeys: false,
  },
  {
    label: "HS512",
    value: Algorithms.HS512,
    signingMethodName: "HMACSHA512",
    requiresBothKeys: false,
  },
  {
    label: "ES256",
    value: Algorithms.ES256,
    signingMethodName: "ECDSASHA256",
    requiresBothKeys: true,
  },
  {
    label: "RS256",
    value: Algorithms.RS256,
    signingMethodName: "RSASHA256",
    requiresBothKeys: true,
  },
  {
    label: "PS256",
    value: Algorithms.PS256,
    signingMethodName: "RSAPSSSHA256",
    requiresBothKeys: true,
  }
];

export type TOption = "encoded" | "decoded";

export const optionsList: { label: string; value: TOption }[] = [
  {
    label: "Encoded",
    value: "encoded",
  },
  {
    label: "Decoded",
    value: "decoded",
  },
];

export const defaultTokens: { [key in Algorithms]: string } = {
  [Algorithms.HS256]: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c`,
  [Algorithms.HS384]: `eyJhbGciOiJIUzM4NCIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.bQTnz6AuMJvmXXQsVPrxeQNvzDkimo7VNXxHeSBfClLufmCVZRUuyTwJF311JHuh`,
  [Algorithms.HS512]: `eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.VFb0qJ1LRg_4ujbZoRMXnVkUgiuKq5KxWqNdbKq_G9Vvz-S1zZa9LPxtHWKa64zDl2ofkT8F6jBt_K4riU-fPg`,
  [Algorithms.ES256]: `eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.tyh-VfuzIxCyGYDlkBA7DfyjrqmSHu6pQ2hoZuFqUSLPNY2N0mpHb3nk5K17HWP_3cYHBw7AhHale5wky6-sVA`,
  [Algorithms.RS256]: `eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.NHVaYe26MbtOYhSKkoKYdFVomg4i8ZJd8_-RU8VNbftc4TSMb4bXP3l3YlNWACwyXPGffz5aXHc6lty1Y2t4SWRqGteragsVdZufDn5BlnJl9pdR_kdVFUsra2rWKEofkZeIC4yWytE58sMIihvo9H1ScmmVwBcQP6XETqYd0aSHp1gOa9RdUPDvoXQ5oqygTqVtxaDr6wUFKrKItgBMzWIdNZ6y7O9E0DhEPTbE9rfBo6KTFsHAZnMg4k68CDp2woYIaXbmYTWcvbzIuHO7_37GT79XdIwkm95QJ7hYC9RiwrV7mesbY4PAahERJawntho0my942XheVLmGwLMBkQ`,
  [Algorithms.PS256]: `eyJhbGciOiJQUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.iOeNU4dAFFeBwNj6qdhdvm-IvDQrTa6R22lQVJVuWJxorJfeQww5Nwsra0PjaOYhAMj9jNMO5YLmud8U7iQ5gJK2zYyepeSuXhfSi8yjFZfRiSkelqSkU19I-Ja8aQBDbqXf2SAWA8mHF8VS3F08rgEaLCyv98fLLH4vSvsJGf6ueZSLKDVXz24rZRXGWtYYk_OYYTVgR1cg0BLCsuCvqZvHleImJKiWmtS0-CymMO4MMjCy_FIl6I56NqLE9C87tUVpo1mT-kbg5cHDD8I7MjCW5Iii5dethB4Vid3mZ6emKjVYgXrtkOQ-JyGMh6fnQxEFN1ft33GX2eRHluK9eg`,
};

export const signingKeyConstants = {
  prefix: `( 
    base64UrlEncode(header) + "." +
    base64UrlEncode(payload),`,
  postfix: `)`,
};

export const initPayload = {
  sub: "1234567890",
  name: "John Doe",
  iat: 1516239022,
};

export const placeholderSecretKey = "---Enter-your-256-bit-key---";

// For ES256
export const samplePublicKey = `-----BEGIN PUBLIC KEY-----
MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEEVs/o5+uQbTjL3chynL4wXgUg2R9
q9UU8I5mEovUf86QZ7kOBIjJwqnzD1omageEHWwHdBO6B+dFabmdT9POxg==
-----END PUBLIC KEY-----`;

export const samplePrivateKey = `-----BEGIN PRIVATE KEY-----
MIGHAgEAMBMGByqGSM49AgEGCCqGSM49AwEHBG0wawIBAQQgevZzL1gdAFr88hb2
OF/2NxApJCzGCEDdfSp6VQO30hyhRANCAAQRWz+jn65BtOMvdyHKcvjBeBSDZH2r
1RTwjmYSi9R/zpBnuQ4EiMnCqfMPWiZqB4QdbAd0E7oH50VpuZ1P087G
-----END PRIVATE KEY-----`;

export const defaultSigningKeys: {
  [key in Algorithms]?: { privateKey: string; publicKey: string };
} = {
  [Algorithms.ES256]: {
    privateKey: `-----BEGIN PRIVATE KEY-----
    MIGHAgEAMBMGByqGSM49AgEGCCqGSM49AwEHBG0wawIBAQQgiyvo0X+VQ0yIrOaN
    nlrnUclopnvuuMfoc8HHly3505OhRANCAAQWUcdZ8uTSAsFuwtNy4KtsKqgeqYxg
    l6kwL5D4N3pEGYGIDjV69Sw0zAt43480WqJv7HCL0mQnyqFmSrxj8jMa
    -----END PRIVATE KEY-----`,
    publicKey: `-----BEGIN PUBLIC KEY-----
    MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEEVs/o5+uQbTjL3chynL4wXgUg2R9
    q9UU8I5mEovUf86QZ7kOBIjJwqnzD1omageEHWwHdBO6B+dFabmdT9POxg==
    -----END PUBLIC KEY-----`,
  },
  [Algorithms.RS256]: {
    privateKey: `-----BEGIN PRIVATE KEY-----
    MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDCFg4UrY5xtulv
    /NXKmL1J4qI1SopAfTNMo3X7p+kJO7plqUYjzaztcre1qfh0m33Sm1Q8oPbO/GpP
    MU1/HgcceytgJ/b4UwufVVMl9BrMDYG8moDBylbVupFQS3Ly1L9i/iFG9Z9A9xzY
    Zzf799A45bnvNXL6s2glzvjiRvfQ2NDF0anTcnZLcYtC7ugq1IMM+ihAcPfw8Qw2
    chN/SmP4qAM+PKaQwagmU7doqmmyN9u38AfoYZ1GCFhEs5TBBT6H6h9YdHeVtiIq
    1c+fl03biSIfLrV7dUBD39gBmXBcL/30Ya3D82mCEUC4zg/UkOfQOmkmV3Lc8YUL
    QZ8EJkBLAgMBAAECggEAVuVE/KEP6323WjpbBdAIv7HGahGrgGANvbxZsIhm34ls
    VOPK0XDegZkhAybMZHjRhp+gwVxX5ChC+J3cUpOBH5FNxElgW6HizD2Jcq6t6LoL
    YgPSrfEHm71iHg8JsgrqfUnGYFzMJmv88C6WdCtpgG/qJV1K00/Ly1G1QKoBffEs
    +v4fAMJrCbUdCz1qWto+PU+HLMEo+krfEpGgcmtZeRlDADh8cETMQlgQfQX2VWq/
    aAP4a1SXmo+j0cvRU4W5Fj0RVwNesIpetX2ZFz4p/JmB5sWFEj/fC7h5z2lq+6Bm
    e2T3BHtXkIxoBW0/pYVnASC8P2puO5FnVxDmWuHDYQKBgQDTuuBd3+0tSFVEX+DU
    5qpFmHm5nyGItZRJTS+71yg5pBxq1KqNCUjAtbxR0q//fwauakh+BwRVCPOrqsUG
    jBSb3NYE70Srp6elqxgkE54PwQx4Mr6exJPnseM9U4K+hULllf5yjM9edreJE1nV
    NVgFjeyafQhrHKwgr7PERJ/ikwKBgQDqqsT1M+EJLmI1HtCspOG6cu7q3gf/wKRh
    E8tu84i3YyBnI8uJkKy92RNVI5fvpBARe3tjSdM25rr2rcrcmF/5g6Q9ImxZPGCt
    86eOgO9ErNtbc4TEgybsP319UE4O41aKeNiBTAZKoYCxv/dMqG0j4avmWzd+foHq
    gSNUvR2maQKBgQCYeqOsV2B6VPY7KIVFLd0AA9/dwvEmgAYLiA/RShDI+hwQ/5jX
    uxDu37KAhqeC65sHLrmIMUt4Zdr+DRyZK3aIDNEAesPMjw/X6lCXYp1ZISD2yyym
    MFGH8X8CIkstI9Faf9vf6PJKSFrC1/HA7wq17VCwrUzLvrljTMW8meM/CwKBgCpo
    2leGHLFQFKeM/iF1WuYbR1pi7gcmhY6VyTowARFDdOOu8GXYI5/bz0afvCGvAMho
    DJCREv7lC/zww6zCTPYG+HOj+PjXlJFba3ixjIxYwPvyEJiDK1Ge18sB7Fl8dHNq
    C5ayaqCqN1voWYUdGzxU2IA1E/5kVo5O8FesJeOhAoGBAImJbZFf+D5kA32Xxhac
    59lLWBCsocvvbd1cvDMNlRywAAyhsCb1SuX4nEAK9mrSBdfmoF2Nm3eilfsOds0f
    K5mX069IKG82CMqh3Mzptd7privatee7lyb9lsoGO0BAtjho3cWtha/UZ70vfaMzGuZ6JmQ
    ak6k+8+UFd93M4z0Qo74OhXB
    -----END PRIVATE KEY----`,
    publicKey: `-----BEGIN PUBLIC KEY-----
    MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEEVs/o5+uQbTjL3chynL4wXgUg2R9
    q9UU8I5mEovUf86QZ7kOBIjJwqnzD1omageEHWwHdBO6B+dFabmdT9POxg==
    -----END PUBLIC KEY-----`,
  },
};
