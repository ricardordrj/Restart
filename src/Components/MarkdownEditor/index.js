import React, { useState } from "react";
import Markdown from "marked-react";
import Lowlight from "react-lowlight";
import javascript from "highlight.js/lib/languages/javascript";

import { Wrapper, Textarea, StyledDiv } from "./styles";

const MarkdownEditor = () => {
  const [text, setText] = useState();
  const handleChange = (e) => setText(e.target.value);

  Lowlight.registerLanguage("js", javascript);
  const renderer = {
    code(snippet) {
      return <Lowlight key={this.elementId} language="js" value={snippet} />;
    },
  };
  return (
    <Wrapper>
      <Textarea value={text} onChange={handleChange} autoFocus />

      <StyledDiv>
        <Markdown value={text} renderer={renderer} />
      </StyledDiv>
    </Wrapper>
  );
};

export default MarkdownEditor;
