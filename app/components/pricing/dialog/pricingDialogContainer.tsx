import { ReactNode, useEffect, useState } from "react";
import Image from "next/image";

import styles from "../../../styles/pricing/pricingDialog.module.css";
import { CrossIcon } from "../../../assets/images";

type PricingDialogProps = {
    onClose: () => void;
    show: boolean;
    children: ReactNode;
};

export default function PricingDialogContainer(props: PricingDialogProps) {
    const { children, onClose, show } = props;

    const [aboutToClose, setAboutToClose] = useState(false);

    function closeDialog() {
        setAboutToClose(true);
        setTimeout(() => {
            onClose();
            setAboutToClose(false);
        }, 400);
    }

    useEffect(() => {
        const html = document.querySelector("html");
        if (show) {
            html.style.overflow = "hidden";
            html.style.marginRight = "0.7rem";
        } else {
            html.style.overflow = "auto";
            html.style.marginRight = "0rem";
        }
    }, [show]);

    return (
        <>
            {show ? (
                <div
                    onClick={closeDialog}
                    className={`${styles.pricing__dialog__container} ${styles.animate__mount} ${
                        aboutToClose ? styles.animate__unmount : ""
                    }`}
                >
                    <div
                        className={styles.pricing__dialog}
                        onClick={e => {
                            e.stopPropagation();
                        }}
                    >
                        <span className={styles.close__dialog} onClick={closeDialog}>
                            <Image src={CrossIcon} alt="close" height={10} width={10} />
                        </span>
                        {children}
                    </div>
                </div>
            ) : null}
        </>
    );
}
