import { useCallback, useState } from "preact/hooks";
import { Button } from "./components/Button";

const removeNotANumbers = (text: string) => text.replace(/\D+/g, "");

const openWhatsapp = (text: string) => {
  const numbers = removeNotANumbers(text);

  if (numbers.length > 7) {
    window.location.href = `whatsapp://send?phone=${numbers}`;
  }
};

export function App() {
  const [inputText, setText] = useState("");

  const onOpenClick = useCallback(() => {
    openWhatsapp(inputText);
  }, [inputText]);

  const onOpenFromClipboardClick = useCallback(async () => {
    const text = await navigator.clipboard.readText();

    openWhatsapp(text);
  }, []);

  return (
    <div className="container">
      Open whatsapp chat with number:
      <span className="input-container">
        <input
          placeholder="Input a number"
          value={inputText}
          onChange={(e) => setText((e.target as HTMLInputElement).value)}
        />
        <Button className="open-button" icon="chat" onClick={onOpenClick} />
      </span>
      <span className="or">or</span>
      <Button className="open-clipboard" onClick={onOpenFromClipboardClick}>
        Open from clipboard
      </Button>
    </div>
  );
}
