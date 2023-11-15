const inputEcrypt = document.querySelector('#input-encrypt')
const inputDecrypt = document.querySelector('#input-decrypt')

const btnEncrypt = document.querySelector('#btn-encrypt')
const btnDecrypt = document.querySelector('#btn-decrypt')

const res = document.querySelector('#result')

btnEncrypt.addEventListener('click', answearTextEcrypt)
btnDecrypt.addEventListener('click', answearTextDecrypt)

function encryptText(text) {
  text = text.replace(/[^а-яА-ЯA-Za-z]/g, '')

  let oddString = '';
  let evenString = '';

  for (let i = 0; i < text.length; i++) {
    if (i % 2 === 0) {
      evenString += text[i];
    } else {
      oddString += text[i];
    }
  }

  let allStringArr = evenString + oddString;

  if (text === '') {
    return 'У вас пустое поле ввода.';
  } else {
    return `Вот ваш шифр: "${allStringArr}".`;
  }
}

function decryptText(encryptedText) {
  let decryptedText = '';
  const maxLength = Math.ceil(encryptedText.length / 2);

  for (let i = 0; i < maxLength; i++) {
    if (i < encryptedText.length / 2) {
      decryptedText += encryptedText[i];
    }
    if (i + maxLength < encryptedText.length) {
      decryptedText += encryptedText[i + maxLength];
    }
  }

  return `Вот ваш расшифрованный шифр: "${decryptedText}".`;
}




function answearTextEcrypt() {
    const result = encryptText(inputEcrypt.value)
    inputEcrypt.value = ''
    res.innerHTML = result
}

function answearTextDecrypt() {
  const result = decryptText(inputDecrypt.value)
  inputDecrypt.value = ''
  res.innerHTML = result
}






