export type SectionFlex = "row" | "column";

export type CommonChildProperties = {
    flex: SectionFlex;
    alignment?: "center" | "top" | "start";
    maxWidth?: string;
}

export type TitleChildType = CommonChildProperties & {
    type: "title-subtitle-cta";
    title: {
        text: string;
        highlight: {
            texts: string[];
            mode: "primary" | "grey-out";
        }
    };
    subtitle?: string;
    cta?: {
        text: string;
        targetUrl: string;
    };
    supertext?: string;
}

export type ImageChildType = CommonChildProperties & {
    type: "image";
    image: string;
    layout?: {
        position: "relative",
        top?: number | string;
        left?: number | string;
        right?: number | string;
        bottom?: number | string;
    } | {
        position: "absolute",
        top?: number | string;
        left?: number | string;
        right?: number | string;
        bottom?: number | string;
    };
    dimensions?: {
        width?: number | string;
        height?: number | string;
    };
}

export type PillChildType = CommonChildProperties & {
    type: "pill";
    text: string;
    iconPath?: string;
}

export type BulletListChildType = CommonChildProperties & {
    type: "bullets-list";
    direction: "horizontal" | "vertical";
    bullets: {
        title?: string;
        useIndicators?: boolean;
        imagePath?: string;
        bulletImage?: {
            src: string;
            width: number;
            height: number;
        },
        subtitle?: string;
        bulletColor?: string;
    }[];
}

export type TextChildType = CommonChildProperties & {
    type: "text";
    text: string;
}

export type TextCTAChildType = CommonChildProperties & {
    type: "text-cta";
    text: string;
    cta: {
        text: string;
        targetUrl: string;
    };
    useIndicators?: boolean;
}

export type NestedChildType = CommonChildProperties & {
    type: "nested";
    children: ChildType[];
}

export type ChildType = 
    (
        | TitleChildType
        | ImageChildType
        | PillChildType
        | BulletListChildType    
        | TextChildType
        | NestedChildType
    )

export type FeaturePageSectionType = {
    flex?: SectionFlex;
    children: ChildType[];
    divider?: {
        dividerBackground: string;
        hueColor: string;
    }
}

export type FeaturePageType = {
    sections: FeaturePageSectionType[];
    primaryColor: string;
    gradient?: {
        colors: string[];
    };
}

export type CommonComponentProps = {
    index: number;
}