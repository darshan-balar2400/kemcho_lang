"use client";

import Image from "next/image";
import execute from "kemcholang";
import Link from "next/link";
import { useState, useCallback,useEffect } from "react";

import { highlight } from "prismjs";
import { kemchoLangSyntax } from "./syntax";
import Editor from "react-simple-code-editor";
import programs from "./programs";
import "prismjs/themes/prism-dark.css";
const PlayGround = () => {
  const [result, setResult] = useState([] as string[]);
  const[programType,setProgramType] = useState("greatest");
  const [loading, setLoading] = useState(false);
  const [err, setError] = useState("" as string);

  const [value, setValue] = useState(``);
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

  const changeProgramType = (e:any) => {
    setProgramType(e.target.value);
  }

  useEffect(() => {
    setValue(programs[programType]);
  },[programType]);

  const copyCode = () => {
    navigator.clipboard
      .writeText(value)
      .then(() => {
        // setCopied(true);
        // setTimeout(() => setCopied(false), 2000); // Reset copied state after 2 seconds
      })
      .catch((err) => console.error("Failed to copy:", err));
  };

  const highlightWithLineNumbers = (input: string): string =>
    highlight(input, kemchoLangSyntax, "kemChoLang")
      .split("\n")
      .map((line, i) => `<span class='editorLineNumber'></span>${line}`)
      .join("\n");

  return (
    <div className="playground_container" id="playground_section">
      <div className="content">
        <div className="title">
          <h1 className="text-3xl"># Playground</h1>
        </div>
        <div className="body my-14">
          <div className="code_editor">
            <div className="options">
              <Link href="#compiler">
                <button onClick={() => executeCode()}>
                  <Image
                    src="/images/developer/run.png"
                    width={40}
                    height={50}
                    alt="Github"
                  />
                </button>
              </Link>

              <button
                onClick={() =>
                  setValue(`kem cho
            
aavjo`)
                }
              >
                <Image
                  src="/images/developer/reset_1.png"
                  width={40}
                  height={50}
                  alt="Github"
                />
              </button>

              <button onClick={() => copyCode()}>
                <Image
                  src="/images/developer/copy.png"
                  width={40}
                  height={50}
                  alt="Github"
                />
              </button>
            </div>
            <div className="editor_compiler">
              <div className="code_box">
                <div className="program_options">
                   <div className="elem">
                      {/* <span>Program : </span> */}
                      <select value={programType} onChange={(e) => changeProgramType(e)}>
                        <option value="greatest">Greatest Among 3</option>
                        <option value="voting">Voting Eligible</option>
                        <option value="sum">Sum</option>
                        <option value="mul">Multiplication</option>
                        <option value="calculate">Calculate Expression</option>
                        <option value="empty">Empty</option>
                      </select>
                   </div>
                </div>
                <Editor
                  value={value}
                  onValueChange={(code: string) => onChange(code)}
                  highlight={(code: string) => highlightWithLineNumbers(code)}
                  padding={10}
                  textareaClassName="codeArea"
                  className="editor"
                  id="codeEditor"
                  style={{
                    fontFamily: "monospace",
                    fontSize: 16,
                  }}
                />{" "}
              </div>
              <div className="compiler p-5" id="compiler">
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

                {/* {!err && result.length <= 0 && <p>Output will be display here <br/></p>} */}

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
      </div>
    </div>
  );
};

export default PlayGround;
