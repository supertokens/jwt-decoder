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
    spacing?: string | number;
    addBlur?: boolean;
    bullets: {
        title?: string;
        useIndicators?: boolean;
        indicatorBackground?: string;
        imagePath?: string;
        imageDimensions?: {
            width?: number | string;
            height?: number | string;
        }
        bulletImage?: {
            src: string;
            width: number;
            height: number;
        },
        subtitle?: string;
        bulletColor?: string;
    }[];
    backgroundConfig?: {
        background: string;
        position?: "left" | "right";
        top?: string | number;
        right?: string | number;
        bottom?: string | number;
        left?: string | number;
    },
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
    spacing?: "center" | "space-between" | "flex-start",
    children: ChildType[];
}

export type SuperTokensBenefitsSection = {
    type: "section";
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
    };
    paddingRight?: number | string;
    prebuiltType?: "supertokens-benefits";
    backgroundConfig?: {
        background: string;
        position?: "left" | "right";
        top?: string | number;
        right?: string | number;
        bottom?: string | number;
        left?: string | number;
    },
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