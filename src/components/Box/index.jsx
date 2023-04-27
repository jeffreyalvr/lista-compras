import React, { useState, useRef } from "react";

import icon_edit from "../../assets/icons/edit.png";
import icon_delete from "../../assets/icons/delete.png";

const Box = () => {
  const [lista, setLista] = useState([
    { id: 0, nome: "arroz" },
    { id: 1, nome: "feijão" },
    { id: 2, nome: "macarrão" },
    { id: 3, nome: "açúcar" },
  ]);
  const [input, setInput] = useState("");
  const [mostrarDisclaimer, setMostrarDisclaimer] = useState(false);
  const [mensagemDisclaimer, setMensagemDisclaimer] = useState("");
  const [modoEdicao, setModoEdicao] = useState(false);
  const [idSelecionado, setIdSelecionado] = useState(null);

  const campo_texto = useRef();

  const handleAlterarInput = (e) => {
    setInput(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      handleBotaoAdicionar();
    }
  };

  const limparInput = () => {
    setInput("");
  };

  const handleModoEdicao = (status) => {
    setModoEdicao(status);
  };

  const handleMostrarDisclaimer = (status, mensagem) => {
    setMensagemDisclaimer(mensagem);
    setMostrarDisclaimer(status);
  };

  const handleFecharDisclaimer = () => {
    setMostrarDisclaimer(false);
  };

  const handleVerificaLista = () => {
    if (lista.find((item) => item.nome === input)) {
      handleMostrarDisclaimer(true, `Já há o item '${input}' na lista!`);
      return;
    }
    handleAdicionarItem();
  };

  const handleInputVazio = () => {
    handleMostrarDisclaimer(true, "O campo não pode ficar vazio!");
  };

  const handleBotaoAdicionar = () => {
    // verifica se o input está vazio ou se possui apenas espaços
    if (!input || /^\s+$/.test(input)) {
      handleInputVazio();
      return;
    }

    // verifica limite de texto no input
    if (input.length >= 55) {
      handleMostrarDisclaimer(
        true,
        `O item deve ter no máximo 55 caracteres. ${input.length} totais.`
      );
      return;
    }

    // se o modo edição estiver ativo, apenas atualize o item
    if (modoEdicao) {
      handleConfirmarAtualizacao();
      return;
    }

    handleVerificaLista();
  };

  const handleCancelar = () => {
    limparInput();
    handleModoEdicao(false);
    handleMostrarDisclaimer(false);
  };

  const handleRemoverItem = (itemId) => {
    const novaLista = lista.filter((item) => item.id !== itemId);
    setLista(novaLista);
  };

  const handleEditarItem = (itemId) => {
    setIdSelecionado(itemId);

    handleModoEdicao(true);

    handleMostrarDisclaimer(
      true,
      "Digite um novo nome para o item no campo abaixo."
    );

    const itemParaEditar = lista
      .filter((item) => item.id === itemId)
      .map((item) => item.nome);

    setInput(itemParaEditar);

    campo_texto.current.focus();
  };

  const handleConfirmarAtualizacao = () => {
    const itemAlterado = lista
      .filter((item) => item.id === idSelecionado)
      .map((item) => (item.nome = input));

    setLista((prevState) => [...prevState]);

    handleCancelar();
  };

  const handleAdicionarItem = () => {
    let ultimoIdUsado;

    /* caso não haja itens na lista, o valor retornado será Infinity; como o id
    será 'ultimoIdUsado + 1', então setá-lo como '-1' irá fazer com que ele
    seja atribuído como '0' na primeira iteração. */

    lista.length <= 0
      ? (ultimoIdUsado = -1)
      : (ultimoIdUsado = Math.max(...lista.map((item) => item.id)));

    setLista((prevState) => [
      ...prevState,
      { id: ultimoIdUsado + 1, nome: input },
    ]);

    limparInput();
    handleFecharDisclaimer();
  };

  return (
    <div className="animate-move-up max-w-[43rem] w-[43rem] border border-[#dadada] rounded-lg my-10">
      <div className="p-[1.8rem]">
        {lista.length <= 0 ? (
          <span>A lista de itens está vazia.</span>
        ) : (
          lista.map((item) => (
            <div
              className="py-4 border-dotted border-b border-[#dadada] flex justify-between"
              key={item.id}
            >
              <div className="flex overflow-hidden">{item.nome}</div>
              <div className="flex justify-between max-w-[140px]">
                <button
                  onClick={() => handleEditarItem(item.id)}
                  className="bg-[#4bc9ff] outline-1 text-xs font-bold	hover:bg-[#6cd3ff] text-white rounded-[1.25rem] py-[0.625rem] px-[1.25rem] mx-1 w-auto box-content align-middle"
                >
                  <img src={icon_edit} alt="editar" title="editar" />
                </button>
                <button
                  onClick={() => handleRemoverItem(item.id)}
                  className="bg-[#ff4b4b] outline-1 text-xs font-bold	hover:bg-[#ff6262] text-white rounded-[1.25rem] py-[0.625rem] px-[1.25rem] mx-1 w-auto box-content align-middle"
                >
                  <img src={icon_delete} alt="excluir" title="excluir" />
                </button>
              </div>
            </div>
          ))
        )}
      </div>
      {mostrarDisclaimer ? (
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
            className="bg-[#a1a1a1] outline-1 text-xs font-bold	hover:bg-[#b8b8b8] text-white rounded-[1.25rem] h-[20px] w-[20px] box-content align-middle"
          >
            x
          </button>
        </div>
      ) : null}
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
    </div>
  );
};

export default Box;
