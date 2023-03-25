import React, { createContext, useState, useContext } from "react";

const TextContext = createContext();
export const useText = () => useContext(TextContext);
export default function TextProvider({ message }) {
    const [msg, setMessage] = useState("");

    return (
        <TextContext.Provider value={{msg}}>
            {message}
        </TextContext.Provider>
    );
}