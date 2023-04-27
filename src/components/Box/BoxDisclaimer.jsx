import React from "react";

const BoxDisclaimer = ({
  modoEdicao,
  mensagemDisclaimer,
  handleFecharDisclaimer,
}) => {
  return (
    <div
      className={`animate-fade-in border-t border-[#dadada] p-[1.8rem] flex justify-between ${
        modoEdicao
          ? "bg-[#f4faff] text-[steelblue]"
          : "bg-[#fff4f4] text-[firebrick]"
      }`}
    >
      <span>{mensagemDisclaimer || "Algo deu errado"} </span>
      <button
        onClick={handleFecharDisclaimer}
        className="bg-[#a1a1a1] outline-1 text-xs font-bold	hover:bg-[#b8b8b8] text-white rounded-[1.25rem] h-[24px] w-[24px] box-content flex flex-col justify-center items-center"
      >
        x
      </button>
    </div>
  );
};

export default BoxDisclaimer;
