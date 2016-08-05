{
  'use strict';

  const lower = document.getElementById('lower');
  const higher = document.getElementById('higher');
  const submit = document.getElementById('submit');
  const result = document.getElementById('result');

  submit.addEventListener('click', () => {
    const range = { min: Number(lower.value), max: Number(higher.value) };
    const output = [];

    for (let number = range.min; number <= range.max; number ++) output.push(number);

    result.innerHTML = output.join(' ');
  }, false);
}
