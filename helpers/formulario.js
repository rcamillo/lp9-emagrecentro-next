/* eslint-disable no-plusplus */
export const validacao = dados => {
  if (
    !dados.nome ||
    !dados.email ||
    !dados.celular ||
    !dados.cidade ||
    !dados.estado ||
    !dados.capital
  ) {
    return false;
  }

  if (dados.celular.indexOf("_") !== -1) {
    return false;
  }

  return true;
};

export const validaNomeCompleto = nome => {
  const nomes = nome.trim().split(" ");
  if (
    nome.length > 0 &&
    nomes[0].length > 1 &&
    nomes[1] &&
    nomes[1].length > 0
  ) {
    return true;
  }

  return false;
};

export const validaTelefone = telefone => {
  const valido = /^(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/.test(
    telefone
  );
  const valido2 = /^(?:\(?([1-9][0-9])\)?\s?)?(?:((?:[9]?[9][9][9][9]))\-?([9][9][9][9]))$/.test(
    telefone
  );
  return valido && !valido2;
};

export const validacaoContinue = dados => {
  if (!dados.whatsapp || !dados.profissao || !dados.porque) {
    return false;
  }

  return true;
};

export function playVideo (){
  document.getElementById('idDaTagVideo').play();
}

export const infosErro = {
  texto: "Ocorreu um erro!",
  linkTexto: "Clique aqui e tente novamente.",
  tipo: "erro",
  href: "/"
};
