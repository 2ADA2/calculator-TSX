import {FC} from "react";

interface CalcButtonProps {
    value?: string | number;
    calc: (value?: string | number) => void;
    children: React.ReactNode;
    isCalcButton?: boolean
}

export const CalcButton: FC<CalcButtonProps> = ({value, calc, children, isCalcButton}) => {
    return (
        <td onClick={() => calc(value)} className={isCalcButton ? "useCalc" : ""}>
            {children}
        </td>
    );
};
