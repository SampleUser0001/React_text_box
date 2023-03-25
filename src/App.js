import React from "react";
import { useInput } from "./hooks";
import { useText } from "./TextProvider";

export default function App() {
    const [message, resetMessage] = useInput("");
    const { addMessage } = useText();
    const submit = e => {
        addMessage(message);
        resetMessage();
    };
    return (
        <>
        <h1>Hello React Text Box.</h1>
        <div>
            <form onSumbit={submit}>
                <input {...message} type="text" placeholder="メッセージを入力してください。"></input>
                <button>send</button>
            </form>
        </div>
        <text>ここにメッセージが出力されます。</text>
        </>        
    ); 
}