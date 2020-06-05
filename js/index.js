function myClick() {
  let str = ``;

  if (textMessage.value.length === 0) {
    alert('Enter text');
    return false;
  }

  formId.style.display = 'none';

  let createNewDiv = document.createElement('div');
  let createNewP = document.createElement('p');
  createNewDiv.classList.add('resultDiv');

  createNewP.innerHTML = textMessage.value;

  if (bold.checked === true) {
    str += `font-weight: bold;`;
  }

  if (underline.checked === true) {
    str += `text-decoration: underline;`;
  }

  if (italics.checked === true) {
    str += `font-style: italic;`;
  }

  console.log(document.getElementsByName('radioBtn'));

  for (let i = 0; i < document.getElementsByName('radioBtn').length; i++) {
    if (document.getElementsByName('radioBtn')[i].checked) {
      str += `text-align: ${document.getElementsByName('radioBtn')[i].value}`;
    }
  }

  createNewDiv.setAttribute('style', str);

  createNewDiv.appendChild(createNewP);
  mainBlock.appendChild(createNewDiv);
}
