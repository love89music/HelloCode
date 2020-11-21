import React from "react"
import "./testbutton.css"

export function TestButton1({ color, children }) {
    return (
        // ✅ `color` is always fresh!
        <button className={'button-' + color}>
            {children}
        </button>
    );
}