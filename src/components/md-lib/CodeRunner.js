import React, { useCallback, useState } from "react";

const codeWrapper = (code) => `/*
** @param context {{ log: (...string): void; inputs: any;}}
*/
function main(context) {${code}}`;

const run = (code, inputs) => {
  let logs = "";
  const log = (...messages) =>
  (logs += (messages.reduce(
    (coll, message) => `${coll} ${JSON.stringify(message)}`,
    ""
  )) + '\n');
  try {
    const execute = Function("context", code);
    const execution = execute({ log, inputs });
    return `${logs}${execution || ''}`;
  } catch (error) {
    return `${logs}${error || ''}`;
  }

};

export const CodeRunner = ({ code, inputs = {} }) => {
  const [output, setOutput] = useState();
  const [input, setInput] = useState(JSON.stringify(inputs) || {});
  const [inputHasError, setInputHasError] = useState(null);
  const [parsedInput, setParsedInput] = useState(inputs);

  const onInputChange = useCallback((event) => {
    setInput(event.target.value);
  }, [input]);

  const onInputBlur = useCallback(() => {
    try {
      setParsedInput(JSON.parse(input));
      setInputHasError(null);
    } catch (error) {
      setInputHasError(error);
    }

  }, [input, parsedInput, inputHasError]);

  const evaluate = useCallback(() => {
    setOutput(run(code, parsedInput));
  }, [code, parsedInput]);
  return (
    <div>
      <div className="flex-col">
        <label className="flex font-semibold">Inputs</label>
        <textarea
          onChange={onInputChange}
          onBlur={onInputBlur}
          className={`flex w-10/12 mt-2 border-2 border-slate-700 rounded border-solid outline-0 focus:outline-2 focus:outline-slate-500 ${inputHasError && 'border-rose-700 focus:outline-rose-500'}`}
          value={input}
        >
        </textarea>
        {inputHasError && <span className="text-rose-700">Invalid JSON</span>}
      </div>
      <div className="mt-5">
        <label className="font-semibold">Code <button
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
