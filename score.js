var distances = [[548, 464, 193, 657, 436, 186, 453, 140, 374, 556, 450, 187, 454, 576, 453, 417, 255, 555],
                 [525,440,174,621,413,169,426,134,362,525,423,171,419,542,421,377,219,504],
                 [484,415,152,585,390,153,405,132,352,490,388,159,391,514,396,355,193,471],
                 [475, 390, 106, 480, 364, 143, 385, 121, 271, 463, 368, 142, 371, 492, 375, 333, 166, 438],
                 [440, 365, 86, 463, 345, 106, 385, 101, 262, 432, 305, 142, 355, 446, 337, 276, 115, 405]];
var handicap = [[8, 2, 12, 6, 14, 16, 4, 18, 10, 5, 1, 9, 7, 17, 3, 15, 11, 13],
                [5, 7, 13, 3, 9, 11, 1, 17, 15, 2, 6, 16, 12, 4, 8, 14, 18, 10]];
var par = [5, 4, 3, 5, 4, 3, 4, 3, 4, 5, 4, 3, 4, 5, 4, 4, 3, 5];
var playerCount = 1;

$(document).ready(function(){
    if(isMobile()){
      $('table').css({
        "overflow": "auto",
        "overflow-y": "hidden"
      });
    }

    var html;
    html += '<tr><td><div style="float:left;width:50%;">Tee</div><div style="float:right;text-align: right;width:50%;">Rating/Slope</div></td>';

    createRangeOfCellsWithNumbers(1, 9);

    html += '<td>OUT</td><td>Initial</td>';

    createRangeOfCellsWithNumbers(10, 18);

    html += '<td>IN</td><td>TOTAL</td><td>HDCP</td><td>NET</td></tr><tr id="black"><td><div style="float:left;width:50%;">BLACK</div><div style="float:right;text-align: right;width:50%;">' +
    '76.5/151</div></td>';

    createRangeOfCellsFromArray(0, 9, distances[0]);

    html += '<td>' + sumOfArrayValues(distances[0], 0, 9) + '</td><td></td>';

    createRangeOfCellsFromArray(9, 18, distances[0]);

    html += '<td>' + sumOfArrayValues(distances[0], 9, 18) + '</td><td>' + sumOfArrayValues(distances[0], 0, 18) + '</td><td></td><td></td></tr><tr id="blue"><td>' +
    '<div style="float:left;width:50%;">BLUE</div><div style="float:right;text-align: right;width:50%;">74.1/148</div></td>';

    createRangeOfCellsFromArray(0, 9, distances[1]);

    html += '<td>' + sumOfArrayValues(distances[1], 0, 9) + '</td><td></td>';

    createRangeOfCellsFromArray(9, 18, distances[1]);

    html += '<td>' + sumOfArrayValues(distances[1], 9, 18) + '</td><td>' + sumOfArrayValues(distances[1], 0, 18) + '</td><td></td><td></td></tr><tr><td><div style="float:left;width:50%;">' +
    'WHITE</div><div style="float:right;text-align: right;width:50%;">M-72.1/138 <br>L-79.2/153</div></td>';

    createRangeOfCellsFromArray(0, 9, distances[2]);

    html += '<td>' + sumOfArrayValues(distances[2], 0, 9) + '</td><td></td>';

    createRangeOfCellsFromArray(9, 18, distances[2]);

    html += '<td>' + sumOfArrayValues(distances[2], 9, 18) + '</td><td>' + sumOfArrayValues(distances[2], 0, 18) + '</td><td></td><td></td></tr><tr id="green"><td>' +
    '<div style="float:left;width:50%;">GREEN</div><div style="float:right;text-align: right;width:50%;">M-69.7/131 <br>L-75.4/145</div></td>';

    createRangeOfCellsFromArray(0, 9, distances[3]);

    html += '<td>' + sumOfArrayValues(distances[3], 0, 9) + '</td><td></td>';

    createRangeOfCellsFromArray(9, 18, distances[3]);

    html += '<td>' + sumOfArrayValues(distances[3], 9, 18) + '</td><td>' + sumOfArrayValues(distances[3], 0, 18) + '</td><td></td><td></td></tr><tr class="greyTR"><td>Handicap</td>';

    createRangeOfCellsFromArray(0, 9, handicap[0]);

    html += '<td></td><td></td>';

    createRangeOfCellsFromArray(9, 18, handicap[0]);

    html += '<td></td><td></td><td></td><td></td></tr><tr><td><input type="text" placeholder="Player 1"><div style="float:right"><i class="fa fa-user-plus" aria-hidden="true"></i></div>' +
    '</td>';

    createHolesWithClasses(0, 9);

    html += '<td id="player1OutScore"></td><td></td>';

    createHolesWithClasses(9, 18);

    html += '<td id="player1InScore"></td><td id="player1TotalScore"></td><td></td><td></td></tr><tr id="firstRow">';

    for(var i = 0; i < 25; i++){
        html += '<td></td>';
    }

    html += '</tr>';

    for(var j = 0; j < 3; j++){
      html += '<tr>';

      for(var i = 0; i < 25; i++){
          html += '<td></td>';
      }

      html += '</tr>';
    }

    html += '<tr class="greyTR"><td>PAR</td>';

    createRangeOfCellsFromArray(0, 9, par);

    html += '<td>' + sumOfArrayValues(par, 0, 9) + '</td><td></td>';

    createRangeOfCellsFromArray(9, 18, par);

    html += '<td>' + sumOfArrayValues(par, 9, 18) + '</td><td>' + sumOfArrayValues(par, 0, 18) + '</td><td></td><td></td></tr><tr id="yellow"><td><div style="float:left;width:50%;">YELLOW' +
    '</div><div style="float:right;text-align: right;width:50%;">M-67.3/125 <br>L-72.6/133</div></td>';

    createRangeOfCellsFromArray(0, 9, distances[4]);

    html += '<td>' + sumOfArrayValues(distances[4], 0, 9) + '</td><td></td>';

    createRangeOfCellsFromArray(9, 18, distances[4]);
    
    html += '<td>' + sumOfArrayValues(distances[4], 9, 18) + '</td><td>' + sumOfArrayValues(distances[4], 0, 18) + '</td><td></td><td></td></tr><tr class="greyTR"><td>Handicap</td>';

    createRangeOfCellsFromArray(0, 9, handicap[1]);

    html += '<td></td><td></td>';

    createRangeOfCellsFromArray(9, 18, handicap[1]);

    html += '<td></td><td></td><td></td><td></td></tr><tr><td colspan="25"><div style="float:left">DATE_____________________________________________</div><div style="float:left">&nbsp;' +
    '&nbsp;COMPETITOR_____________________________________________</div><div style="float:left">&nbsp;&nbsp;' +
    'MARKER____________________________________________________________________________</div></td></tr>';

    $('#scoreCard').append(html);

    $('table').on("blur", ":text", function(){
      $(this).css("border", "none");
    });

    $('table').on("click", ".fa-plus-square", function(){
      var hole = $(this).parent().attr('class');
      var holeNumber = hole[hole.length - 1];

      switch (par[holeNumber - 1]) {
        case 5:
          if(Number($(this).parent().find('div').text()) < 8){
            incrementScore($(this));
          }
          break;
        case 3:
        case 4:
          if(Number($(this).parent().find('div').text()) < 7){
            incrementScore($(this));
          }
          break;
        default: incrementScore($(this));
      }
    });

    function incrementScore(element) {
      var strokes = Number(element.parent().find('div').text());
      strokes++;
      element.parent().find('div').text(strokes);
    }

    $('table').on("mouseover", ".fa-plus-square, .fa-minus-square", function(){
      $(this).css('cursor','pointer');
    });

    $('table').on("click", ".fa-minus-square", function(){
      if(Number($(this).parent().find('div').text()) > 0){
        var strokes = Number($(this).parent().find('div').text());
        strokes--;
        $(this).parent().find('div').text(strokes);
    }
    });

    $('.fa-user-plus').click(function() {
      addPlayer();
    });

    $('table').on("click", "td.hole10 > i.fa-minus-square, td.hole10 > i.fa-plus-square", function(){
      var arr;
      var first9Sum = 0;

      $(this).parent().parent().each(function () {
        arr = $(this).find('div').text().split('');
      });

      for(var i = 0; i < 9; i++){
        first9Sum += Number(arr[i]);
      }

      $(this).parent().parent().find('[id$=OutScore]').text(first9Sum);
    });

    $('table').on("click", "td.hole18 > i.fa-minus-square, td.hole18 > i.fa-plus-square", function(){
      var arr;
      var last9Sum = 0;
      var totalSum = 0;

      $(this).parent().parent().each(function () {
        arr = $(this).find('div').text().split('');
      });

      for(var i = 9; i < 18; i++){
        last9Sum += Number(arr[i]);
      }

      for(var i = 0; i < 18; i++){
        totalSum += Number(arr[i]);
      }

      $(this).parent().parent().find('[id$=InScore]').text(last9Sum);
      $(this).parent().parent().find('[id$=TotalScore]').text(totalSum);
    });

    function createRangeOfCellsFromArray(start, end, arr){
      for(var i = start; i < end; i++){
        html += '<td>' + arr[i] + '</td>';
      }
    }

    function createRangeOfCellsWithNumbers(start, end){
      for(var i = start; i <= end; i++){
        html += '<td>' + i + '</td>';
      }
    }

    function createHolesWithClasses(start, end){
    	for(var i = start; i < end; i++){
          html += '<td class="hole' + (i + 1) + '"><div>0</div><i class="fa fa-plus-square"></i>&nbsp;<i class="fa fa-minus-square"></i></td>';
      }
    }

    function addPlayer(){
      if(playerCount < 4){
          playerCount++;
          html = '<tr><td><input type="text" placeholder="Player ' + playerCount + '"></td>';

          for(var i = 0; i < 9; i++){
            html += '<td class="hole' + (i + 1) + '"><div>0</div><i class="fa fa-plus-square"></i>&nbsp;<i class="fa fa-minus-square"></i></td>';
          }

          html += '<td id="player' + playerCount + 'OutScore"></td><td></td>';

          for(var i = 9; i < 18; i++){
            html += '<td class="hole' + (i + 1) + '"><div>0</div><i class="fa fa-plus-square"></i>&nbsp;<i class="fa fa-minus-square"></i></td>';
          }

          html += '<td id="player' + playerCount + 'InScore"></td><td id="player' + playerCount + 'TotalScore"></td><td></td><td></td>';

          $('#firstRow').before(html);
      }

    }
})

function getSum(total, num) {
    return total + num;
}

function sumOfArrayValues(arr, start, end){
	return arr.slice(start, end).reduce(getSum);
}

function isMobile() {
  return ('ontouchstart' in document.documentElement);
}
