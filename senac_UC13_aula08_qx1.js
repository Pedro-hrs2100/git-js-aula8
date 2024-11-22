function verificarIdade(idade) {
    if (idade < 18) {
      return "Menor de idade";
    } else {
      return "Maior de idade";
    }
  }
  
  // Chamando a função e exibindo os resultados no console
  console.log(verificarIdade(15)); // "Menor de idade"
  console.log(verificarIdade(18)); // "Maior de idade"
  console.log(verificarIdade(21)); // "Maior de idade"
  