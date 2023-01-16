import { type IDropdownOption } from "../components/common/dropdown/dropdown.component"
export const algorithmOptions: IDropdownOption[] = [
  {
    label: "HS256",
    value: "HS256",
  },
  {
    label: "ES256",
    value: "ES256",
  },
  {
    label: "RS256",
    value: "RS256",
  },
  {
    label: "PS256",
    value: "PS256",
  },
  {
    label: "EdDSA",
    value: "EdDSA",
  }
]

export type TOption = "encoded" | "decoded"

export const optionsList: {label: string, value: TOption}[] = [
  {
    label: "Encoded",
    value: "encoded",
  },
  {
    label: "Decoded",
    value: "decoded"
  }
]