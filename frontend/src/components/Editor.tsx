import Editor from "@monaco-editor/react";

interface Props {
  code: string;
  setCode: (value: string) => void;
}

export default function CodeEditor({ code, setCode }: Props) {
  return (
    <Editor
      height="420px"
      theme="vs-dark"
      defaultLanguage="python"
      value={code}
      onChange={(v) => setCode(v || "")}
      options={{
  fontSize: 14,
  minimap: { enabled: false },
  scrollBeyondLastLine: false,
  smoothScrolling: true,
  cursorSmoothCaretAnimation: "on",
}}
    />
  );
}
