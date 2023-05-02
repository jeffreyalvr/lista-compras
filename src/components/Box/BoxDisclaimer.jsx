import React from "react";

import icon_close from "../../assets/icons/close.png";

const BoxDisclaimer = ({
  tipoDisclaimer,
  mensagemDisclaimer,
  handleFecharDisclaimer,
}) => {
  return (
    <div
      className={`animate-fade-in border-t border-[#dadada] p-[1.8rem] flex justify-between ${
        tipoDisclaimer === "info"
          ? "bg-[#f4faff] text-[steelblue]"
          : "bg-[#fff4f4] text-[firebrick]"
      }`}
    >
      <span>{mensagemDisclaimer || "Algo deu errado"} </span>
      <button
        onClick={handleFecharDisclaimer}
        className="bg-[#a1a1a1] outline-1 rounded-[1.25rem]	hover:bg-[#b8b8b8] h-[25px] w-[25px] flex items-center justify-center"
        title="Fechar"
      >
        <img src={icon_close} alt="x" />
      </button>
    </div>
  );
};

export default BoxDisclaimer;
