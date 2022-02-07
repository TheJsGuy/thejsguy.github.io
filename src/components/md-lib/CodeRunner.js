import React, { useCallback, useState } from "react";

const codeWrapper = (code) => `function main() {${code}}`;

const run = (code) => {
  let logs = "";
  const log = (...messages) =>
  (logs += (messages.reduce(
    (coll, message) => `${coll} ${JSON.stringify(message)}`,
    ""
  )) + '\n');
  try {
    const execute = Function("context", code);
    const execution = execute({ log });
    return `${logs}${execution || ''}`;
  } catch (error) {
    return `${logs}${error || ''}`;
  }

};

export const CodeRunner = ({ code }) => {
  const [output, setOutput] = useState();
  const evaluate = useCallback(() => {
    setOutput(run(code));
  }, [code]);
  return (
    <div>
      <div>
        
      </div>
      <div className="mt-5">
        <label>Code <button
          className="bg-slate-600 hover:bg-slate-500 px-2 py-1 text-white rounded cursor-pointer"
          onClick={evaluate}
        >
          Run
        </button></label>
        <pre className="bg-slate-700 text-white mt-2 px-4 py-2">{codeWrapper(code)}</pre>
      </div>
      <div className="mt-5">
        <label>Output</label>
        <pre className="bg-slate-700 text-white mt-2 px-4 py-2">{output}</pre>
      </div>
    </div>
  );
};
