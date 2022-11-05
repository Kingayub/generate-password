// function generatePassword(length, string, numpass) {
//   const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
//   let newPassword = '';
//   const digits = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
//   const symbols = '!#$%&()*+,-./:;<=>?@[]^_{|}~0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
//   const arr = [];

//   for (let j = 0; j < numpass; j++) {
//     if (string === 'easy') {
//       for (let i = 0; i < length; i++) {
//         const randomSymbol = alphabet[Math.round(Math.random() * (alphabet.length - 1))]; // я умею брать только первый символ из строки, а нужно взять один случайный символ :(
//         newPassword += randomSymbol;
//       }

//       arr.push(newPassword);
//       newPassword = '';
//     }
//     else if (string === 'medium') {
//       for (let i = 0; i < length; i++) {
//         const randomSymbol = digits[Math.round(Math.random() * (digits.length - 1))]; // я умею брать только первый символ из строки, а нужно взять один случайный символ :(
//         newPassword += randomSymbol;
//       }

//       arr.push(newPassword);
//       newPassword = '';
//     }
//     else if (string === 'hard') {
//       for (let i = 0; i < length; i++) {
//         const randomSymbol = symbols[Math.round(Math.random() * (symbols.length - 1))]; // я умею брать только первый символ из строки, а нужно взять один случайный символ :(
//         newPassword += randomSymbol;
//       }

//       arr.push(newPassword);
//       newPassword = '';
//     }
//   }
//   return arr
// }

// console.log(generatePassword(6, 'hard', 4))


function generatePassword(length, string, numpass) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let newPassword = '';
  const digits = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const symbols = '!#$%&()*+,-./:;<=>?@[]^_{|}~0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const arr = [];

  do {
    if (string === 'easy') {
      for (let i = 0; i < length; i++) {
        const randomSymbol = alphabet[Math.round(Math.random() * (alphabet.length - 1))]; // я умею брать только первый символ из строки, а нужно взять один случайный символ :(
        newPassword += randomSymbol;
      }
      if (!arr.includes(newPassword)) {
        arr.push(newPassword);
      }
      newPassword = '';
    }
    else if (string === 'medium') {
      for (let i = 0; i < length; i++) {
        const randomSymbol = digits[Math.round(Math.random() * (digits.length - 1))]; // я умею брать только первый символ из строки, а нужно взять один случайный символ :(
        newPassword += randomSymbol;
      }

      arr.push(newPassword);
      newPassword = '';
    }
    else if (string === 'hard') {
      for (let i = 0; i < length; i++) {
        const randomSymbol = symbols[Math.round(Math.random() * (symbols.length - 1))]; // я умею брать только первый символ из строки, а нужно взять один случайный символ :(
        newPassword += randomSymbol;
      }

      arr.push(newPassword);
      newPassword = '';
    }
  } while (arr.length < numpass)
  return arr
}

console.log(generatePassword(13, 'easy', 9))