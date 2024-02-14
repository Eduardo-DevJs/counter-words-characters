import { Button, Textarea } from "@chakra-ui/react";
import { ChangeEvent, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function App() {
  const [characters, setCharacters] = useState<string>("0");
  const [words, setWords] = useState<string>("0");
  const [textareaValue, setTextareaValue] = useState<string>("");

  function counterWords(e: ChangeEvent<HTMLTextAreaElement>) {
    const targetValue = e.target.value;
    const quantityCharacters = targetValue.length.toString();
    const quantityWords = targetValue.split(" ").length.toString();

    setWords(quantityWords);
    setCharacters(quantityCharacters);
    setTextareaValue(targetValue);

    if (targetValue === "") {
      setWords("0");
      return;
    }
  }

  function handleReset() {
    setTextareaValue("");
    setWords("0");
    setCharacters("0");
  }

  return (
    <>
      <header className="bg-white shadow-md p-4">
        <h1 className="text-center text-2xl font-bold">Contador de Palavras</h1>
      </header>

      <main className="flex flex-col h-[400px] items-start gap-2 justify-center px-5 mt-24 max-w-7xl mx-auto">
        <Textarea
          style={{ padding: "2rem" }}
          className="rounded-md shadow-md flex-grow outline-none"
          placeholder="Escreva aqui palavra(s)"
          resize={"none"}
          onChange={counterWords}
          value={textareaValue}
          size={"lg"}
        />

        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-2">
            <h1 className="font-medium text-xl text-gray-800">
              {words} Palavras
            </h1>
            <h1 className="font-medium text-xl text-gray-800">
              {characters} Caracteres
            </h1>
          </div>

          <Button onClick={handleReset} colorScheme="twitter">
            Resetar
          </Button>
        </div>

        <div className="w-full flex flex-col gap-2 items-center">
          <h2 className="text-center  mt-5 font-medium md:text-xl">
            Desenvolvidor por Eduardo De Oliveira - 2024
          </h2>
          <div className="flex items-center gap-4">
            <a href="https://github.com/Eduardo-DevJs" target="_blank">
              <FaGithub size={35} color="#333" />
            </a>
            <a
              href="https://www.linkedin.com/in/eduardo-oliveira-liria-849467246/"
              target="_blank"
            >
              <FaLinkedin size={35} color="#333" />
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
