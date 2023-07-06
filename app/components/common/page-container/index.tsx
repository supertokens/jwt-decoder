import { PropsWithChildren } from "react"

export const PageContainer = (props: PropsWithChildren<{}>) => {
    return <div style={{ maxWidth: "1440px", margin: "auto" }}>
        {props.children}
    </div>
}