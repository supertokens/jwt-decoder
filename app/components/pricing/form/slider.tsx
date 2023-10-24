import * as SliderPrimitive from "@radix-ui/react-slider";

import styles from "../../../styles/pricing/form/slider.module.css";
import Input from "./input";
import { useState } from "react";
import { usePricingToggleContext } from "../../../context/PricingToggleContext";

type SliderProps = {
    onMAUChange: (mau: number) => void;
    mau: number;
};

export default function Slider({ mau, onMAUChange }: SliderProps) {
    const { activeTab } = usePricingToggleContext();

    return (
        <div className={styles.slider__container}>
            <div className={styles.input__container}>
                <div>
                    <h4>Number of MAUs:</h4>
                    <Input
                        type="text"
                        value={mau}
                        onChange={e => onMAUChange(Number(e.currentTarget.value))}
                        max={10000}
                        min={0}
                    />
                </div>
                <SliderPrimitive.Root
                    className={styles.slider__root}
                    onValueChange={(value: number[]) => {
                        onMAUChange(value[0]);
                    }}
                    value={[mau]}
                    max={10000}
                    step={1}
                >
                    <SliderPrimitive.Track className={styles.slider__track}>
                        <SliderPrimitive.Range className={styles.slider__range} />
                    </SliderPrimitive.Track>
                    <SliderPrimitive.Thumb className={styles.slider__thumb} aria-label="Volume" />
                </SliderPrimitive.Root>
            </div>
            <div className={styles.right__container}>
                {activeTab === "cloud" ? (
                    <span>
                        Price /MAU: <span>$0.02</span>
                    </span>
                ) : (
                    "Free with no limit!"
                )}
            </div>
        </div>
    );
}
