import React from "react";

const BoxFooter = ({
  handleAlterarInput,
  handleKeyDown,
  handleCancelar,
  handleBotaoAdicionar,
  input,
  campo_texto,
  modoEdicao,
}) => {
  return (
    <div className="border-t border-[#dadada] p-[1.8rem]">
      <input
        type="text"
        className="w-full py-[0.625rem] px-[1.25rem] outline-1 mb-[0.938rem] rounded-[1.25rem] border border-[rgba(218, 218, 218, 0.466)]"
        placeholder="Adicione um novo item"
        value={input}
        onChange={(e) => handleAlterarInput(e)}
        onKeyDown={(e) => handleKeyDown(e)}
        ref={campo_texto}
      />
      <button
        onClick={handleBotaoAdicionar}
        className="bg-[#4baeff] text-xs font-bold outline-1	hover:bg-[#62b8ff] text-white rounded-[1.25rem] py-[0.625rem] px-[1.25rem]"
      >
        {modoEdicao ? "Confirmar alteração" : "Adicionar"}
      </button>
      {input && (
        <button
          onClick={handleCancelar}
          className="bg-[#a8a8a8] text-xs font-bold outline-1 hover:bg-[#b1b1b1] ml-[0.625rem] text-white rounded-[1.25rem] py-[0.625rem] px-[1.25rem]"
        >
          Cancelar
        </button>
      )}
    </div>
  );
};

export default BoxFooter;
