"use client";

import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import Image from "next/image";
import execute from "kemcholang";

import { useState, useCallback } from "react";
const PlayGround = () => {
  const [result, setResult] = useState([] as string[]);
  const [loading, setLoading] = useState(false);
  const [err, setError] = useState("" as string);
  const [value, setValue] = useState("console.log('hello world!');");
  const onChange = useCallback((val: string, viewUpdate: any) => {
    setValue(val);
  }, []);

  const executeCode = () => {
    setResult([]);

    try {
      setLoading(true);
      let result = execute(value);
      setError("");
      setResult(result as string[]);
      setLoading(false);
    } catch (err: any) {
      setLoading(false);
      setError(err.name + " : " + err.message);
    }
  };

  return (
    <div
      className="playground_container my-4 flex justify-center items-center p-4"
      id="playground_section"
    >
      <div className="content">
        <div className="title text-center">
          <h1 className="text-3xl font-bold">Playground</h1>
        </div>
        <div className="body my-14">
          <div className="options">
            <button onClick={() => executeCode()}>
              <Image
                src="/images/developer/run.png"
                width={40}
                height={50}
                alt="Github"
              />
            </button>

            <button onClick={() => setValue("")}>
              <Image
                src="/images/developer/reset_1.png"
                width={40}
                height={50}
                alt="Github"
              />
            </button>
          </div>
          <div className="code_editor">
            <CodeMirror
              value={value}
              height="200px"
              extensions={[javascript({ jsx: true })]}
              onChange={onChange}
            />
          </div>
          <div className="compiler p-5">
            {loading ? (
              <p>... loading </p>
            ) : (
              !err && result.length> 0 && (
                <p className="successs text-green-500">
                  Swagat Che ! <br /> Kem Cho - Maja Ma ?
                  <br />
                  ------------------------
                </p>
              )
            )}

            {result.length > 0 &&
              result.map((value: string, index: number) => {
                return (
                  <p key={index}>
                    {">>    "}
                    {"   " + value}
                  </p>
                );
              })}

            {err && <p className="error text-red-500">{err}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayGround;
