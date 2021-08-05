let form =  document.getElementById('new-task');
let formTotal =  document.querySelector('.container__form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    formTotal.classList.add('js__none');
    addUserDOM(form.elements[0].value)
})

function addUserDOM(name) {
    const contentUser = document.querySelector('.box__content');
    contentUser.classList.remove('js__none');
    const content = `
    <h1>welcome, ${name}</h1>
      <p>Go to the last song you listening</p>
      <img src="img/default.png" alt="">
      <button class="mainBtn form__button--btn">Play</button>
    `
    contentUser.innerHTML += content;
}