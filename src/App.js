import React from "react";

export default function App() {
    const onclick = () => {};
    return (
        <>
        <h1>Hello React Text Box.</h1>
        <div>
            <label> Box </label>
            <input placeholder="メッセージを入力してください。"></input>
            <button onClick>send</button>
        </div>
        <text>ここにメッセージが出力されます。</text>
        </>        
    ); 
}