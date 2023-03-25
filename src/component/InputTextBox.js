import React, { useState } from "react";
import { useInput } from "../hooks"

export default function InputTextBox({placeholder}){
    const [message, resetMessage] = useInput("");
    return(
        <input placeholder={placeholder}>{text}</input>
    );
}