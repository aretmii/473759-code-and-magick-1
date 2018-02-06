'use strict';
//убираем стили hidden скрывающие setup
document.querySelector('.setup').classList.remove('hidden');
document.querySelector('.setup-similar').classList.remove('hidden');
//добавляем в переменные DOM элементы
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;
//создаем массивы имен, фамилий, цветов мантий и глаз
var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARDS = [];
//создаем цикл создания объекта с рандомными именами и цветами,
//и после записываем цикл в пустой массив, и создаем DOM элементы из объектов записанных в массив
for (var i = 0; i < 4; i++) {
  //создаем объект
  var randomWizard = {};
  //выбираем рандомные Имя и Фамилию
  var wizardName = function getRandomName(min, max) {
    var randomName = Math.floor(Math.random() * (max - min)) + min;
    var randomSurname = Math.floor(Math.random() * (max - min)) + min;
    return WIZARD_NAMES[randomName] + ' ' + WIZARD_SURNAMES[randomSurname];
  }
  //подставляем имя и фамилию в name объекта
  randomWizard.name = wizardName(0, 8);
  //выбираем цвет плаща
  var coatColor = function getRandomColor(min, max) {
    var randomColor = Math.floor(Math.random() * (max - min)) + min;
    return COAT_COLORS[randomColor];
  }
  //добавляем рандомный цвет плаща в объект
  randomWizard.coat_color = coatColor(0, 6);
  //выбираем цвет глаз
  var eyesColor = function getRandomEyeColor(min, max) {
    var randomEyeColor = Math.floor(Math.random() * (max - min)) + min;
    return EYES_COLORS[randomEyeColor];
  }
  //добавляем рандомный цвет глаз в объект
  randomWizard.eye_color = eyesColor(0, 5);
  //добавляем объект в массив
  WIZARDS[i] = randomWizard;
  //копируем шаблон волшебника
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = WIZARDS[i].name;
  wizardElement.querySelector('.wizard-coat').style.fill = WIZARDS[i].coat_color;
  wizardElement.querySelector('.wizard-eyes').style.fill = WIZARDS[i].eye_color;

  similarListElement.appendChild(wizardElement);
}
