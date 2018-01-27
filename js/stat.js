var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var FONT_HEIGHT = 16;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var BAR_GAP = 40;
var BAR_WIDTH = 40;
var BAR_HEIGHT = - (CLOUD_HEIGHT - 2 * BAR_GAP - 2 * FONT_HEIGHT - GAP);

var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);

  ctx.font = '16px PT Mono';
  ctx.fillStyle = '#000';
  ctx.fillText('Ура вы победили!', 120, 50);
  ctx.fillText('Список результатов:', 120, 70);
};

// ВЫЧИСЛЕНИЕ МАКСИМАЛЬНОГО ЗНАЧЕНИЯ ЭЛЕМЕНТА МАССИВА getMaxElement
var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  var maxTime = getMaxElement(times);

  var redColor = 'rgba(255, 0, 0, 1)';
  var blueColor = 'rgba(0, 0, 255, 1)';

  var getColor = function () {
    if (players[i] === 'Вы') {
      return redColor;
    }
    return blueColor;
  };

  for (var i = 0; i < players.length; i++) {
    ctx.fillStyle = '#000';
    ctx.fillText(Math.round(times[i]), CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP) * i, CLOUD_HEIGHT - 2 * GAP - FONT_HEIGHT - ((BAR_HEIGHT * times[i]) / maxTime)  * (-1));
    ctx.fillStyle = '#000';
    ctx.fillText(players[i], CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP) * i, CLOUD_HEIGHT - GAP);

    ctx.fillStyle = getColor();
    ctx.fillRect(CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP) * i, CLOUD_HEIGHT - GAP - FONT_HEIGHT, BAR_WIDTH, (BAR_HEIGHT * times[i]) / maxTime);
  }
};
