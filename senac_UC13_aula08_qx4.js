const podeAcessar = ({ idade, isAdmin, isBlocked }) => 
    (idade > 18 || isAdmin) && !isBlocked;
  
  // Testando a função
  console.log(podeAcessar({ idade: 20, isAdmin: false, isBlocked: false })); // true
  console.log(podeAcessar({ idade: 16, isAdmin: true, isBlocked: true })); // false
  