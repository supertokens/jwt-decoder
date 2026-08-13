import React from "react"
import JwtDecoder from "./jwt-decoder";

// Re-exported for backwards compatibility; the implementation lives in
// helpers/analytics.ts to avoid circular imports between pages.
export { getAnalytics, AnalyticsUtilities } from "../helpers/analytics";

export default function Home() {
  return <JwtDecoder />
}
