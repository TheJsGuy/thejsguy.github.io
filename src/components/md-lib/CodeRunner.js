import React, { useCallback, useState } from "react";

const codeWrapper = (code) => `/*
** @param context {{ log: (...string): void; inputs: any;}}
*/
function main(context) {${code}}`;

const run = (code, inputs) => {
  let logs = "";
  const log = (...messages) =>
  (logs += '\nthejsguy.github.io > ' + (messages.reduce(
    (coll, message) => `${coll} ${JSON.stringify(message)}`,
    ""
  )) + '');
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
          className={`flex px-2 py-1 w-10/12 mt-2 border-2 border-slate-700 rounded border-solid outline-0 focus:outline-2 focus:outline-slate-500 ${inputHasError && 'border-rose-700 focus:outline-rose-500'}`}
          value={input}
        >
        </textarea>
        {inputHasError && <span className="text-rose-700">Invalid JSON</span>}
      </div>
      <div className="mt-5">
        <div className="font-semibold flex flex-row justify-between">
          <div>Code</div>
          <div>
            <button
              className="bg-stone-600 hover:bg-slate-500 px-2 py-1 text-white rounded cursor-pointer align"
              onClick={evaluate}
            >
              Run
            </button>
          </div>
        </div>
        <pre className="bg-stone-100 px-4 py-2 pt-6 relative">
          <span className="absolute top-0 right-0 py-1 px-3 bg-stone-300">JavaScript</span>
          <code className="text-sm whitespace-pre-wrap">
            {codeWrapper(code)}
          </code>
        </pre>
      </div>
      <div className="mt-5">
        <label className="font-semibold">Output</label>
        <pre className="bg-stone-100 px-4 py-2 pt-6 relative">
          <span className="absolute top-0 right-0 py-1 px-3 bg-stone-300">Web Shell</span>
          <code className="text-sm whitespace-pre-wrap">
            {output}
          </code>
        </pre>
      </div>
    </div>
  );
};
