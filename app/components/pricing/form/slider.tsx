import * as SliderPrimitive from "@radix-ui/react-slider";

import styles from "../../../styles/pricing/form/slider.module.css";
import Input from "./input";
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
                        value={mau < 25000 ? mau : "25000+"}
                        onChange={e => {
                            const mauCount = Number(e.currentTarget.value);

                            if (isNaN(mauCount) === true) {
                                onMAUChange(0);
                                return;
                            }

                            if (mauCount >= 25000) {
                                onMAUChange(25000);
                                return;
                            }

                            onMAUChange(mauCount);
                        }}
                        maxLength={5}
                        max={25000}
                        min={0}
                    />
                </div>
                <SliderPrimitive.Root
                    className={styles.slider__root}
                    onValueChange={(value: number[]) => {
                        onMAUChange(value[0]);
                    }}
                    value={[mau]}
                    max={25000}
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
