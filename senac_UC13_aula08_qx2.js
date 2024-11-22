const definirDiaDaSemana = (numero) => {
    const dias = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
    return numero >= 1 && numero <= 7 ? dias[numero - 1] : "Número inválido";
  };
  
  // Testando a função
  console.log(definirDiaDaSemana(3)); // "Terça-feira"
  console.log(definirDiaDaSemana(7)); // "Sábado"
  console.log(definirDiaDaSemana(8)); // "Número inválido"
  