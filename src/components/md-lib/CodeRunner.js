import React, { useCallback, useState } from "react";

const codeWrapper = (code) => `
function() {${code}}
`;

const run = (code) => {
  let logs = "";
  const log = (...messages) =>
    (logs += (messages.reduce(
      (coll, message) => `${coll} ${JSON.stringify(message)}`,
      ""
    )) + '\n');
  const execute = Function("context", code);
  console.log(execute);
  const execution = execute({ log });
  return `${logs}${execution || ''}`;
};

export const CodeRunner = ({ code }) => {
  const [output, setOutput] = useState();
  const evaluate = useCallback(() => {
    setOutput(run(code));
  }, [code]);
  return (
    <div>
      <div>
        <button
          className="bg-slate-600 hover:bg-slate-500 px-2 py-1 text-white rounded cursor-pointer"
          onClick={evaluate}
        >
          Evaluate Code
        </button>
      </div>
      <pre>{codeWrapper(code)}</pre>
      <div>
        <label>Output</label>
        <pre>{output}</pre>
      </div>
    </div>
  );
};
