"use client";
import { CodeEditorDocumentation } from "../Common/Common";
import { useState } from "react";
const Documentation = () => {
  const [documents, setDocument] = useState([
    {
      key: "General",
      description: (
        <div>
          Every program should start with <code>kem cho</code> and ends with{" "}
          <code>aavjo</code> .
        </div>
      ),
      code: `kem cho

    batavo "ame maja ma, tame kem cho?"

aavjo`,
    },
    {
      key: "Variables",
      description: (
        <div>
          Variables can be declared using the <code>aa che</code> keyword
          followed by the variable name and its initial value
        </div>
      ),
      code: `kem cho

   aa che a = 10
   aa che b = "hello"
   aa che c = 10 + 20

aavjo`,
    },
    {
      key: "Data Types",
      description: (
        <div>
          Numbers and strings are like other languages. sachu and khotu are the
          boolean values.
        </div>
      ),
      code: `kem cho

   aa che a = 10
   aa che b = "hello"
   aa che c = sachu
   aa che d = khotu
   aa che e = 20 + 10 * (2 * 5)

aavjo`,
    },
    {
      key: "Print Statement",
      description: (
        <div>
          The <code>batavo</code> statement is used to print the specified
          expression to the output console.
        </div>
      ),
      code: `kem cho

   aa che a = 10
   aa che b = 20
   
   batavo "hello"
   batavo a + b
   batavo 'c'
   batavo 10 - 20

aavjo`,
    },
    {
      key: "Expressions",
      description: (
        <div>
          Expressions represent a combination of variables, operators, and
          literals that are evaluated to produce a single value. Expressions can
          be simple or complex depending on the operations involved.
        </div>
      ),
      code: `kem cho

   aa che a = 10
   aa che b = 20
   aa che c = 30

   aa che mul = 1
   mul = a * b * c

aavjo`,
    },
    ,
    {
      key: "Operators",
      description: (
        <div>
          only <code>{'<'}</code> and <code>{'>'}</code> supported
        </div>
      ),
      code: `kem cho

   aa che a = 10
   aa che b = 20
   
   jo ( a > b){
    batavo a
   }

aavjo`,
    },
    {
      key: "If Condition",
      description: (
        <div>
          The <code>jo</code> statement allows conditional execution of code
          blocks. If the condition specified in the if statement evaluates to
          true, the code block inside the <code>jo</code> block is executed;
        </div>
      ),
      code: `kem cho

    aa che a = 10

    jo ( a > 8 ){
      batavo a
    }

aavjo`,
    }
    ,
    {
      key: "If..ElseIf Condition",
      description: (
        <div>
          The <code>ka</code> statement allows you to check multiple conditions
          sequentially. If the condition specified in the <code>jo</code>{" "}
          statement is false, it checks the condition in the <code>ka</code>{" "}
          statement, and so on.
        </div>
      ),
      code: `kem cho

    aa che a = 10

    jo ( a > 12 ){
      batavo "a is greater than 12"
    }
    ka (a > 9){
      batavo "a is greater than 9"
    }
    
aavjo`,
    },
    ,
    {
      key: "If..ElseIf..Else Condition",
      description: (
        <div>
          If the condition specified in the <b>ja</b> or <b>ka</b> statement
          evaluates to true, the code block inside the <b>ja</b> or <b>ka</b>{" "}
          block is executed; otherwise, the code block inside the{" "}
          <code>nahitar</code> block is executed.
        </div>
      ),
      code: `kem cho

    aa che a = 10

    jo ( a > 12 ){
      batavo "a is greater than 12"
    }
    ka (a > 9){
      batavo "a is greater than 9"
    }
    nahitar{
      batavo "a is less than 12 and 9"
    }
    
aavjo`,
    },
  ]);

  return (
    <div
      className="documentation_section"
      id="documentation_section"
    >
      <div className="content">
        <div className="title text-center">
          <h1 className="text-3xl font-bold"># Documentation</h1>
        </div>
        <div className="body my-14">
          {documents.map((document:any, index) => {
            return (
              <div className="document mb-8" key={index}>
                <div className="left_side p-4">
                  <div className="title text-2xl mb-4 mt-4">
                    <h3>{document.key}</h3>
                  </div>
                  <div className="description">
                    <h4>{document.description}</h4>
                  </div>
                </div>
                <div className="right_side">
                  <CodeEditorDocumentation code={document.code} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Documentation;
