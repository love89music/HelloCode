import React from "react"
import { TestButton1 } from "./TestButton1";
import "./testbutton.css"

export function TestButton({ isShowRed }) {
    return (
        // ✅ `color` is always fresh!
        <TestButton1 color={isShowRed ? "red" : "blue"}>children</TestButton1>
    );
}