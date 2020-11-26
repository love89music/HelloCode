import React, { useState } from "react"


function TextInput() {
    const [value, setValue] = useState('');
    return (
        <input
            value={value}
            onChange={e => setValue(e.target.value)}
        />
    );
}

export { TextInput };