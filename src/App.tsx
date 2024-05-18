import React, {useEffect, useState} from 'react';
import './App.css';
import {CalcButton} from "./components/calcButton";
import {simbols} from "./utils/values";
import {convertField} from "./functions/convertField";

const calcs = simbols.slice().filter(e => typeof e === "string")

function App() {

    const [value, setValue] = useState<string>("");

    useEffect(() => {
        if (!value || value.length === 1) return
        const first = value.split("")[0]

        if (calcs.includes(first)) {
            if (first !== "-") setValue("")
        }

        if (calcs.includes(value.split("")[value.length - 1]) && calcs.includes(value.split("")[value.length - 2])) {
            setValue(String(
                value.split("").slice(0, value.length - 2).join("")
                +
                String(value.split("").at(-1))))
        }
    })

    function calcField() {
        if (calcs.includes(String(value.split("").at(-1)))) {
            return
        }
        setValue(String(eval(value) || 0))
    }

    function addToCalc(val: string | number | undefined) {
        let newVal: string = String(value + val)
        newVal = String(newVal.split("+").at(-1))
        newVal = String(newVal.split("-").at(-1))
        newVal = String(newVal.split("*").at(-1))
        newVal = String(newVal.split("/").at(-1))
        const endVal:string[] = Array.from(String(value + val))
        endVal.splice((value + val).length - newVal.length, 100, convertField(newVal))
        setValue(endVal.join(""))

    }

    return (
        <div className="App">
            <section className={"calculator"}>
                <h1>Calculator</h1>
                <div className={"calculator-panel"}>
                    <div className={"calculator-input"}>
                        <div className={"calculator-history"}></div>
                        <input className={"calculator-input"} type={"text"} value={value}></input>
                        <div className={"calculator-result"}></div>
                    </div>
                    <section className={"calculator-buttons"}>
                        <table>
                            <tbody>
                            <tr>
                                <CalcButton
                                    calc={(val) => addToCalc(val)}
                                    children={1}
                                    value={1}
                                />
                                <CalcButton
                                    calc={(val) => addToCalc(val)}
                                    children={2}
                                    value={2}
                                />
                                <CalcButton
                                    calc={(val) => addToCalc(val)}
                                    children={3}
                                    value={3}
                                />
                                <CalcButton
                                    calc={(val) => addToCalc(val)}
                                    children={"+"}
                                    value={"+"}
                                    isCalcButton={true}
                                />
                            </tr>
                            <tr>
                                <CalcButton
                                    calc={(val) => addToCalc(val)}
                                    children={4}
                                    value={4}
                                />
                                <CalcButton
                                    calc={(val) => addToCalc(val)}
                                    children={5}
                                    value={5}
                                />
                                <CalcButton
                                    calc={(val) => addToCalc(val)}
                                    children={6}
                                    value={6}
                                />
                                <CalcButton
                                    calc={(val) => addToCalc(val)}
                                    children={"-"}
                                    value={"-"}
                                    isCalcButton={true}
                                />
                            </tr>
                            <tr>
                                <CalcButton
                                    calc={(val) => addToCalc(val)}
                                    children={7}
                                    value={7}
                                />
                                <CalcButton
                                    calc={(val) => addToCalc(val)}
                                    children={8}
                                    value={8}
                                />
                                <CalcButton
                                    calc={(val) => addToCalc(val)}
                                    children={9}
                                    value={9}
                                />
                                <CalcButton
                                    calc={(val) => addToCalc(val)}
                                    children={"*"}
                                    value={"*"}
                                    isCalcButton={true}
                                />
                            </tr>
                            <tr>
                                <CalcButton
                                    calc={(val) => addToCalc(val)}
                                    children={"."}
                                    value={"."}
                                />
                                <CalcButton
                                    calc={(val) => addToCalc(val)}
                                    children={0}
                                    value={0}
                                />
                                <CalcButton
                                    calc={() => setValue("")}
                                    children={"C"}
                                />
                                <CalcButton
                                    calc={(val) => addToCalc(val)}
                                    children={"/"}
                                    value={"/"}
                                    isCalcButton={true}
                                />
                            </tr>
                            <tr>
                                <td
                                    onClick={() => calcField()}
                                    colSpan={4} className={"equal"}>=
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </section>
                </div>
            </section>
        </div>
    );
}

export default App;
