export type SectionFlex = "row" | "column";

export type CommonChildProperties = {
    flex: SectionFlex;
    alignment?: "center" | "top" | "start";
    rootClassNames?: string[];
}

type FeaturePageCTA = {
    text: string;
    targetUrl: string;
    fillType?: "white";
};

export type TitleChildType = CommonChildProperties & {
    type: "title-subtitle-cta";
    title?: {
        text: string;
        highlight: {
            texts: string[];
            mode: "primary" | "grey-out";
        } | {
            texts: string[];
            mode: "custom";
            color: string;
        }
    };
    subtitle?: string;
    cta?: FeaturePageCTA;
    supertext?: string;
}

export type ImageChildType = CommonChildProperties & {
    type: "image";
    image: string;
    imageClassName?: string;
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
    imageShadow?: {
        background: string;
    }
    buletTextClassName?: string;
    bullets: {
        title?: string;
        useIndicators?: boolean;
        indicatorBackground?: string;
        imagePath?: string;
        imageClassName?: string;
        bulletImage?: {
            src: string;
        },
        subtitle?: string;
        displaySubtitleBullets?: boolean;
        bulletColor?: string;
        number?: number;
        leftContainerBottomMargin?: number | string;
        hideIndicator?: boolean;
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
    cta?: Omit<FeaturePageCTA, "fillType"> & {
        background: string;
        hue: string;
    };
    indicator?: {
        background: string;
    }
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
        | TextCTAChildType
    )

export type PreBuiltType = 
    | "supertokens-benefits-magic-links" 
    | "supertokens-benefits-sso"
    | "supertokens-benefits-multi-tenancy"
    | "supertokens-benefits-social-login";

export type FeaturePageSectionType = {
    flex?: SectionFlex;
    children: ChildType[];
    divider?: {
        dividerBackground: string;
        hueColor: string;
    };
    minimumPaddingRight?: boolean;
    prebuiltType?: PreBuiltType;
    backgroundConfig?: {
        className: string;
        background: string;
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