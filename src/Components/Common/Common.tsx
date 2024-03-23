"use client";

import { kemchoLangSyntax } from "../PlayGround/syntax";
import Editor from "react-simple-code-editor";
import { highlight } from "prismjs";
import { useState } from "react";


interface CodeEditorDocumentationProps {
  code: string;
}

const CodeEditorDocumentation = ({ code }: CodeEditorDocumentationProps)=> {
  const [value, setValue] = useState(code);

  const highlightWithLineNumbers = (input: string): string =>
    highlight(input, kemchoLangSyntax, "kemChoLang")
      .split("\n")
      .map((line, i) => `<span class='edzitorLineNumber'></span>${line}`)
      .join("\n");


      return(
        <Editor
          value={value}
          highlight={(code) => highlightWithLineNumbers(code)}
          padding={10}
          onValueChange={() => console.log("hello")}
          readOnly={true}
          textareaClassName="codeArea"
          className="editor"
          id="codeEditorDocumentation"
          style={{
            fontFamily: "monospace",
            fontSize: 16,
          }}
        />
      );
};

export {CodeEditorDocumentation}