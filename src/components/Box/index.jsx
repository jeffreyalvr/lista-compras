import React, { useState, useRef } from "react";

import BoxList from "./BoxList";
import BoxDisclaimer from "./BoxDisclaimer";
import BoxFooter from "./BoxFooter";

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
    if (input.length > 125) {
      handleMostrarDisclaimer(
        true,
        `O item deve ter no máximo 125 caracteres. ${input.length} totais.`
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
            <BoxList
              handleEditarItem={handleEditarItem}
              handleRemoverItem={handleRemoverItem}
              item={item}
              key={item.id}
            />
          ))
        )}
      </div>
      {mostrarDisclaimer ? (
        <BoxDisclaimer
          modoEdicao={modoEdicao}
          mensagemDisclaimer={mensagemDisclaimer}
          handleFecharDisclaimer={handleFecharDisclaimer}
        />
      ) : null}
      <BoxFooter
        handleAlterarInput={handleAlterarInput}
        handleKeyDown={handleKeyDown}
        handleCancelar={handleCancelar}
        handleBotaoAdicionar={handleBotaoAdicionar}
        input={input}
        campo_texto={campo_texto}
        modoEdicao={modoEdicao}
      />
    </div>
  );
};

export default Box;
