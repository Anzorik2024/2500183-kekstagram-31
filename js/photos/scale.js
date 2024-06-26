const smallerBtn = document.querySelector('.scale__control--smaller');//кнопка уменьшения масштаба
const biggerBtn = document.querySelector('.scale__control--bigger');//кнопка увеличения масштаба
const input = document.querySelector('.scale__control--value');//значение , нужно менять scale
const image = document.querySelector('.img-upload__preview img');// фото которое нужно масштабировать

const MAX = 100;
const MIN = 25;
const STEP = 25;

smallerBtn.addEventListener('click', () => {
  const value = parseInt(input.value, 10);
  if (value > MIN) {
    input.value = `${value - STEP}%`;
    image.style.cssText += `transform: scale(${parseInt(input.value, 10) / 100})`;
  }
});

biggerBtn.addEventListener('click', () => {
  const value = parseInt(input.value, 10);
  if (value < MAX) {
    input.value = `${value + STEP}%`;
    image.style.cssText += `transform: scale(${parseInt(input.value, 10) / 100})`;
  }
});

/*

buttonControlBigger.addEventListener('click', () => {
  increaseValueScale();
});


function getTransformImage() {
  imagePreviewChange.style.transform = `scale(${parseFloat(valueControlScale.value) / 100})`;
}

function shrinkValueScale() {
  const currentValueScale = parseFloat(valueControlScale.value);

  if(currentValueScale === MIN_VALUE_SCALE) {
    return;
  }

  valueControlScale.value = `${currentValueScale - STEP_VALUE_SCALE}%`;
  getTransformImage();
}

function increaseValueScale() {
  const currentValueScale = parseFloat(valueControlScale.value);

  if(currentValueScale === MAX_VALUE_SCALE) {
    return;
  }

  valueControlScale.value = `${currentValueScale + STEP_VALUE_SCALE}%`;
  getTransformImage();
}

export {shrinkValueScale,increaseValueScale};
*/
