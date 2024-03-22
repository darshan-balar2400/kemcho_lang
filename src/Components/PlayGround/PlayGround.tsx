"use client";

import Image from "next/image";
import execute from "kemcholang";;

import { useState, useCallback } from "react";

import { highlight } from "prismjs";
import { kemchoLangSyntax } from "./syntax";
import Editor from "react-simple-code-editor";

import "prismjs/themes/prism-dark.css";
const PlayGround = () => {
  const [result, setResult] = useState([] as string[]);
  const [loading, setLoading] = useState(false);
  const [err, setError] = useState("" as string);
  const [value, setValue] = useState(
  `kem cho 
  aa che a = 20
  aa che b = 30
  aa che c = 70
  
  jo (a > b){
      jo(a > c){
          batavo "a is greater"
      }
      nahitar{
          batavo "c is greater"
      }
  }
  ka ( b > c ) {
      batavo "b is greater"
  }
  nahitar{
      batavo "c is greater" fdf d
  }

  
aavjo`);
  const onChange = useCallback((val: string) => {
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

  const highlightWithLineNumbers = (input: string):string =>
    highlight(input, kemchoLangSyntax, "kemChoLang")
      .split("\n")
      .map((line, i) => `<span class='editorLineNumber'></span>${line}`)
      .join("\n");

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

            <button onClick={() => setValue(`kem cho
            
aavjo`)}>
              <Image
                src="/images/developer/reset_1.png"
                width={40}
                height={50}
                alt="Github"
              />
            </button>

            <button onClick={() => executeCode()}>
              <Image
                src="/images/developer/copy.png"
                width={40}
                height={50}
                alt="Github"
              />
            </button>
          </div>
          <div className="code_editor">
            <Editor
              value={value}
              onValueChange={(code:string) => onChange(code)}
              highlight={(code:string) => highlightWithLineNumbers(code)}
              padding={10}
              textareaClassName="codeArea"
              className="editor"
              id="codeEditor"
              style={{
                fontFamily: "monospace",
                fontSize: 16
              }}
            />
          </div>
          <div className="compiler p-5">
            {loading ? (
              <p>... loading </p>
            ) : (
              !err && (
                <p className="successs text-green-500">
                  Swagat Che ! <br /> Kem Cho - Maja Ma ?
                  <br />
                  ------------------------
                  
                </p>
              )
            )}

            {!err && <p>Output will be display here <br/></p>}
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
