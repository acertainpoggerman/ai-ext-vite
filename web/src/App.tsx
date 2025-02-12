import { useEffect, useState } from "react";
import { vscode } from "./utilities/vscode";
import Markdown from "react-markdown";

function App() {
  const [model] = useState<string>("deepseek-coder-v2:16b");
  const [prompt, setPrompt] = useState<string>("");
  const [response, setResponse] = useState<string>("");

  const sendPrompt = async () => {
    vscode.postMessage({
      command: "chat",
      text: prompt,
      model: model,
    })
  };
  
  useEffect(() => {
    window.addEventListener("message", event => {
      const { command, text } = event.data;
      switch (command) {
        case "chatResponse":
          setResponse(text);
      }
    })
  }, []);
  
  return (
    <div className="flex flex-col p-2 gap-8">
      <div className="flex flex-col gap-2">
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
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
      <div className="max-w-4xl ">
        <Markdown
          className=" 
            [&_code]:font-mono
            [&_pre_code]:!bg-transparent [&_pre_code]:!text-white/50 [&_pre_code]:!font-light
            [&_pre]:my-4 [&_pre]:rounded-lg [&_pre]:border [&_pre]:border-white/5 [&_pre]:p-4
            
            [&_ol]:my-4 [&_ol]:list-decimal [&_ol]:ml-8 [&_ol]:flex [&_ol]:flex-col [&_ol]:gap-2 
            [&_ul]:my-4 [&_ul]:ml-8 [&_ul]:list-disc [&_ul]:flex [&_ul]:flex-col [&_ul]:gap-2
            
            [&_h3]:font-bold [&_h3]:text-md
          "
        >
        {response}
        </Markdown>
      </div>
    </div>
  );
}

export default App;
