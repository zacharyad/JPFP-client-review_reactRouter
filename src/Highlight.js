import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { base16AteliersulphurpoolLight } from "react-syntax-highlighter/dist/esm/styles/prism";

export const Highlight = ({ code }) => {
  return (
    <SyntaxHighlighter language="jsx" style={base16AteliersulphurpoolLight}>
      {code}
    </SyntaxHighlighter>
  );
};
