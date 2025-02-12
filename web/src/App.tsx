import { useState } from "react";
// import { vscode } from "./utilities/vscode";

function App() {
  const [model] = useState<string>("deepseek-coder-v2:16b");
  const [response, setResponse] = useState<string>("");

  const sendPrompt = () => {
    const responseText = "This is text";
    setResponse(responseText);
  };

  return (
    <div className="flex flex-col p-2 gap-8">
      <div className="flex flex-col gap-2">
        <textarea
          placeholder="Enter Request Here"
          className="border border-slate-300/15 rounded-lg bg-white/5 p-2 !outline-none focus:!border-white transition-colors duration-200 ease-out"
        />
        <div className="flex justify-between items-stretch">
          <span className="p-2 px-4 bg-gray-600/15 rounded-md text-xs font-semibold align-baseline">
            {model}
          </span>
          <button
            onClick={() => sendPrompt()}
            className="p-2 px-10 bg-blue-500 hover:bg-blue-400 text-white font-semibold rounded-md w-fit self-end"
          >
            Ask
          </button>
        </div>
      </div>
      <div className="">{response}</div>
    </div>
  );
}

export default App;
