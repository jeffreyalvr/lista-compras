import React from "react";

import icon_edit from "../../assets/icons/edit.png";
import icon_delete from "../../assets/icons/delete.png";

const BoxList = ({ handleEditarItem, handleRemoverItem, item }) => {
  return (
    <div className="py-4 border-dotted border-b border-[#dadada] flex flex-col sm:flex-row justify-between">
      <div className="inline-block py-4 sm:py-0 max-w-[470px]">{item.nome}</div>
      <div className="flex md:max-w-[140px] max-h-[36px]">
        <button
          onClick={() => handleEditarItem(item.id)}
          className="bg-[#4bc9ff] outline-1 text-xs font-bold hover:bg-[#6cd3ff] w-[50%] text-white rounded-[1.25rem] py-[0.625rem] px-[1.25rem] mx-1 box-content flex flex-col justify-content items-center"
        >
          <img src={icon_edit} alt="editar" title="editar" />
        </button>
        <button
          onClick={() => handleRemoverItem(item.id)}
          className="bg-[#ff4b4b] outline-1 text-xs font-bold hover:bg-[#ff6262] w-[50%] text-white rounded-[1.25rem] py-[0.625rem] px-[1.25rem] mx-1 box-content flex flex-col justify-content items-center"
        >
          <img src={icon_delete} alt="excluir" title="excluir" />
        </button>
      </div>
    </div>
  );
};

export default BoxList;
