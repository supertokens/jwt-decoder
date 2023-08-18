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
        html.style.overflow = show ? "hidden" : "auto";
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
                    <div className={styles.pricing__dialog}>
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
