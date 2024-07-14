const descriptografar = document.querySelector(".descriptografar");
const criptografar = document.querySelector(".criptografar");
const copy = document.querySelector("#copy");
const texto_user = document.querySelector("#texto_user");
const resultado = document.querySelector("#resultado");

const msgNenhuma = document.querySelector(".nenhuma_msg");
const containerResultado = document.querySelector(".resultado_msg");

const dicionarioCriptografia = {
  e: "enter",
  i: "imes",
  a: "ai",
  o: "ober",
  u: "ufat",
};

const dicionarioDescriptografia = {
  ai: "a",
  ober: "o",
  imes: "i",
  enter: "e",
  ufat: "u",
};

let textoCriptografado = "";

/* Criptografar */
criptografar.addEventListener("click", () => {
  resultado.innerHTML = "";
  textoCriptografado = "";

  let texto = texto_user.value;

  const regexMaiuscula = /[A-Z]/;
  const regexAcento = /[\u00C0-\u017F]/;

  if (regexMaiuscula.test(texto)) {
    return alert("NÃO SÃO ACEITAS LETRAS MAIUSCULAS");
  } else if (regexAcento.test(texto)) {
    return alert("NÃO SÃO ACEITAS LETRAS COM ACENTO");
  }

  for (let i = 0; i < texto.length; i++) {
    if (dicionarioCriptografia.hasOwnProperty(texto[i])) {
      textoCriptografado += dicionarioCriptografia[texto[i]];
    } else {
      textoCriptografado += texto[i];
    }
  }

  containerResultado.style.display = "flex";
  msgNenhuma.style.display = "none";
  resultado.innerHTML = `${textoCriptografado}`;
});

/* Copiar */

copy.addEventListener("click", () => {
  if (navigator.clipboard) {
    navigator.clipboard
      .writeText(resultado.textContent)
      .then(() => {
        alert("Texto copiado com sucesso!");
      })
      .catch((err) => {
        alert("Erro ao copiar o texto:", err);
      });
  }

  texto_user.value = ` `;
});

/* descriptografar */
descriptografar.addEventListener("click", () => {
  resultado.innerHTML = "";
  textoCriptografado = "";

  let texto = texto_user.value;

  const regexMaiuscula = /[A-Z]/;
  const regexAcento = /[\u00C0-\u017F]/;

  if (regexMaiuscula.test(texto)) {
    return alert("NÃO SÃO ACEITAS LETRAS MAIUSCULAS");
  } else if (regexAcento.test(texto)) {
    return alert("NÃO SÃO ACEITAS LETRAS COM ACENTO");
  }

  for (let i = 0; i < texto.length; i++) {
    if (dicionarioDescriptografia.hasOwnProperty(texto.substr(i, 5))) {
      textoCriptografado += dicionarioDescriptografia[texto.substr(i, 5)];
      console.log(dicionarioDescriptografia[texto.substr(i, 5)]);
      i = i + 4;
    } else if (dicionarioDescriptografia.hasOwnProperty(texto.substr(i, 4))) {
      textoCriptografado += dicionarioDescriptografia[texto.substr(i, 4)];
      console.log(dicionarioDescriptografia[texto.substr(i, 4)]);
      i = i + 3;
    } else if (dicionarioDescriptografia.hasOwnProperty(texto.substr(i, 3))) {
      textoCriptografado += dicionarioDescriptografia[texto.substr(i, 3)];
      console.log(dicionarioDescriptografia[texto.substr(i, 3)]);
      i = i + 2;
    } else if (dicionarioDescriptografia.hasOwnProperty(texto.substr(i, 2))) {
      textoCriptografado += dicionarioDescriptografia[texto.substr(i, 2)];
      console.log(dicionarioDescriptografia[texto.substr(i, 2)]);
      i = i + 1;
    } else {
      textoCriptografado += texto[i];
    }
  }

  containerResultado.style.display = "flex";
  msgNenhuma.style.display = "none";
  resultado.innerHTML = `${textoCriptografado}`;
});
