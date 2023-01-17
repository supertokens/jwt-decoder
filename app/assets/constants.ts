import { type IDropdownOption } from '../components/common/dropdown/dropdown.component';

export enum Algorithms {
  HS256 = 'HS256',
  ES256 = 'ES256',
  RS256 = 'RS256',
  PS256 = 'PS256',
  EdDSA = 'EdDSA',
}

export const algorithmOptions: IDropdownOption[] = [
  {
    label: 'HS256',
    value: Algorithms.HS256,
  },
  {
    label: 'ES256',
    value: Algorithms.ES256,
  },
  {
    label: 'RS256',
    value: Algorithms.RS256,
  },
  {
    label: 'PS256',
    value: Algorithms.PS256,
  },
  {
    label: 'EdDSA',
    value: Algorithms.EdDSA,
  },
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
  [Algorithms.HS256]: ``,
  [Algorithms.ES256]: ``,
  [Algorithms.EdDSA]: ``,
  [Algorithms.PS256]: ``,
  [Algorithms.RS256]: ``,
};
