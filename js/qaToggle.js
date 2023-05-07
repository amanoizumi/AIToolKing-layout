// qa toggle
const qaList = document.querySelector('#qaList');

const qaListHandler = (e) => {
  let el = null;
  if (e.target.nodeName === 'IMG') {
    el = e.target.parentElement.nextElementSibling;
  } else if (e.target.nodeName === 'BUTTON') {
    el = e.target.nextElementSibling;
  } else if (el === null) {
    return;
  }

  const imgEl = el.previousElementSibling.firstElementChild;

  const borderEl = el.parentElement;
  if (el.classList.contains('h-0')) {
    borderEl.classList.remove('border-[#929292]');
    borderEl.classList.add('border-white');

    el.classList.remove('h-0');
    el.classList.add('h-fit');

    imgEl.setAttribute('src', './icons/Remove.png');
  } else {
    borderEl.classList.remove('border-white');
    borderEl.classList.add('border-[#929292]');

    el.classList.add('h-0');
    el.classList.remove('h-fit');

    imgEl.setAttribute('src', './icons/Add.png');
  }
};

qaList.addEventListener('click', qaListHandler);
