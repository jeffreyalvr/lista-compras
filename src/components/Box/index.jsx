import React, { useState } from "react";

const Box = () => {
  const [lista, setLista] = useState(["arroz", "feijão", "macarrão", "açúcar"]);
  const [input, setInput] = useState("");

  const handleAlterarInput = (e) => {
    setInput(e.target.value);
  };

  const limparInput = () => {
    setInput("");
  };

  const handleBotaoAdicionar = () => {
    if (!input) return;
    handleAdicionarItem();
  };

  const handleAdicionarItem = () => {
    setLista((prevState) => [...prevState, input]);
    limparInput();
  };

  return (
    <div className="w-[43rem] border border-[#dadada] rounded-lg my-10">
      <div className="p-[1.8rem]">
        {!lista ? (
          <span>A lista de itens está vazia.</span>
        ) : (
          lista.map((item) => (
            <div className="py-2 border-dotted border-b border-[#dadada]">
              {item}
            </div>
          ))
        )}
      </div>
      <div className="border-t border-[#dadada] p-[1.8rem]">
        <input
          type="text"
          className="w-full py-[0.625rem] px-[1.25rem] outline-0 mb-[0.938rem] rounded-[1.25rem] border border-[rgba(218, 218, 218, 0.466)]"
          placeholder="Adicione um novo item"
          value={input}
          onChange={(e) => handleAlterarInput(e)}
        />
        <button
          onClick={handleBotaoAdicionar}
          className="bg-[#ff4b4b] outline-0	hover:bg-[#ff7b7b] text-white rounded-[1.25rem] py-[0.625rem] px-[1.25rem]"
        >
          Adicionar
        </button>
        <button
          onClick={limparInput}
          className="bg-[#a8a8a8] outline-0 hover:bg-[#b1b1b1] ml-[0.625rem] text-white rounded-[1.25rem] py-[0.625rem] px-[1.25rem]"
        >
          Cancelar
        </button>
      </div>
    </div>
  );
};

export default Box;
