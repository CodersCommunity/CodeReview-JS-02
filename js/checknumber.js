{
  'use strict';

  const input = document.getElementById('input');
  const submit = document.getElementById('submit');
  const result = document.getElementById('result');

  submit.addEventListener('click', () => {
    const value = Number(input.value);
    let output = 'To nie jest liczba. You know nothing John Snow.';

    if (value === 0) output = 'zero';
    else if (value > 0) output = 'dodatnia';
    else if (value < 0) output = 'ujemna';

    result.innerHTML = output;
  }, false);
}
