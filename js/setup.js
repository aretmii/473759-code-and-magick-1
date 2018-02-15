'use strict';
// убираем стили hidden скрывающие setup
// document.querySelector('.setup').classList.remove('hidden');
document.querySelector('.setup-similar').classList.remove('hidden');
// добавляем в переменные DOM элементы
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;
// создаем массивы имен, фамилий, цветов мантий и глаз
var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARDS = [];
// массив с цветами для фаербола
var FIREBAL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
// создаем цикл создания объекта с рандомными именами и цветами,
// и после записываем цикл в пустой массив, и создаем DOM элементы из объектов записанных в массив
for (var i = 0; i < 4; i++) {
  // создаем объект
  var randomWizard = {};
  // выбираем рандомные Имя и Фамилию
  var wizardName = function getRandomName(min, max) {
    var randomName = Math.floor(Math.random() * (max - min)) + min;
    var randomSurname = Math.floor(Math.random() * (max - min)) + min;
    return WIZARD_NAMES[randomName] + ' ' + WIZARD_SURNAMES[randomSurname];
  };
  // подставляем имя и фамилию в name объекта
  randomWizard.name = wizardName(0, 8);
  // выбираем цвет мантии
  var coatColor = function getRandomColor(min, max) {
    var randomColor = Math.floor(Math.random() * (max - min)) + min;
    return COAT_COLORS[randomColor];
  };
  // добавляем рандомный цвет плаща в объект
  randomWizard.coat_Color = coatColor(0, 6);
  // выбираем цвет глаз
  var eyesColor = function getRandomEyeColor(min, max) {
    var randomEyeColor = Math.floor(Math.random() * (max - min)) + min;
    return EYES_COLORS[randomEyeColor];
  };
  // добавляем рандомный цвет глаз в объект
  randomWizard.eye_Color = eyesColor(0, 5);
  // добавляем объект в массив
  WIZARDS[i] = randomWizard;
  // копируем шаблон волшебника
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = WIZARDS[i].name;
  wizardElement.querySelector('.wizard-coat').style.fill = WIZARDS[i].coat_Color;
  wizardElement.querySelector('.wizard-eyes').style.fill = WIZARDS[i].eye_Color;

  similarListElement.appendChild(wizardElement);
}

<<<<<<< HEAD
// module4-task1 Взаимодействие с пользователем (открытие закрытие окна setup)
// -----------ПЕРЕМЕННЫЕ---------------------------------------------------------
=======
//module4-task1 Взаимодействие с пользователем (открытие закрытие окна setup)
//-----------ПЕРЕМЕННЫЕ---------------------------------------------------------
>>>>>>> 2880953797ea7f7e44cb7191c996f7f5017eb298
var setup = document.querySelector('.setup');
var escButton = 27;
var enterButton = 13;
var wizardCoat = document.querySelector('.wizard-coat');
var wizardEyes = document.querySelector('.wizard-eyes');
var wizardFireball = document.querySelector('.setup-fireball-wrap');
// создаем переменные кнопок открытия и закрытия окна setup
var setupOpen = document.querySelector('.setup-open');
var setupClose = document.querySelector('.setup-close');
// var setupInput = document.querySelector('setup-user-name');

// -----------ФУНКЦИИ--------------------------------------------------------------
// функции открытия Popup
var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};
// функция закрытия Popup
var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};
// функция закрытия Popup при нажатии Esc
var onPopupEscPress = function (evt) {
  if (evt.keyCode === escButton) {
    closePopup();
  }
};
// функция останавливающая событие при фокусе на INPUT
// var stopProp = function () {
//   event.stopPropagation();
// };
// функция рандомно выбирающая цвет фаербола
var fireballColor = function (min, max) {
  var randomFireColor = Math.floor(Math.random() * (max - min)) + min;
  return FIREBAL_COLORS[randomFireColor];
//  console.log(FIREBAL_COLORS[randomFireColor]);
};
// ------------------ОБРАБОТЧИКИ---------------------------------------------------
// добавляем событие клика мыши на setupOpen,
// с анонимной функцией удаления .hidden, аналогично делаем и в setupClose
setupOpen.addEventListener('click', function () {
  openPopup();
});
// обработчик открывающий .setup при нажатии 13 - enter
setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === enterButton) {
    openPopup();
  }
});
// обработчик закрывающий .setup
setupClose.addEventListener('click', function () {
  closePopup();
});
// обработчик закрывающий .setup при нажаитии 13 - enter на выделенный
// setupClose
setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === enterButton) {
    closePopup();
  }
});
// обработчик выбирающий рандомом цвет мантии волшебника
wizardCoat.addEventListener('click', function () {
  wizardCoat.style.fill = coatColor(0, 6);
});
// обработчик выбирающий рандомом цвет глаз волшебника
wizardEyes.addEventListener('click', function () {
  wizardEyes.style.fill = eyesColor(0, 5);
});
// обработчик выбирающий рандомом цвет фаербола  fireballColor
wizardFireball.addEventListener('click', function () {
  wizardFireball.style.backgroundColor = fireballColor(0, 5);
});
