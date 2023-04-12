import React from "react";

const Box = () => {
  return (
    <div className="w-[43rem] border border-[#dadada] rounded-lg my-10">
      <div className="p-[1.8rem]">
        {/* items list */}
        <span>lista de itens</span>
      </div>
      <div className="border-t border-[#dadada] p-[1.8rem]">
        <input
          type="text"
          className="w-full py-[0.625rem] px-[1.25rem] outline-0 mb-[0.938rem] rounded-[1.25rem] border border-[rgba(218, 218, 218, 0.466)]"
          placeholder="Adicione um novo item"
        />
        <button className="bg-[#ff4b4b] outline-0	hover:bg-[#ff7b7b] text-white rounded-[1.25rem] py-[0.625rem] px-[1.25rem]">
          Adicionar
        </button>
        <button className="bg-[#a8a8a8] outline-0 hover:bg-[#b1b1b1] ml-[0.625rem] text-white rounded-[1.25rem] py-[0.625rem] px-[1.25rem]">
          Cancelar
        </button>
      </div>
    </div>
  );
};

export default Box;
