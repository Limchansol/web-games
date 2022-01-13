const board = [];
const $message = document.querySelector('#turn');
const $table = document.querySelector('table');
let turn = 'X';

const checkWinner = (target) => {
  const rowIndex = target.parentNode.rowIndex;
  const cellIndex = target.cellIndex;
  let winnerExist = false;
  // 가로줄 검사
  if (
    board[rowIndex][0].textContent === turn &&
    board[rowIndex][1].textContent === turn &&
    board[rowIndex][2].textContent === turn
  ) {
    winnerExist = true;
  }
  // 세로줄 검사
  if (
    board[0][cellIndex].textContent === turn &&
    board[1][cellIndex].textContent === turn &&
    board[2][cellIndex].textContent === turn
  ) {
    winnerExist = true;
  }
  // 대각선 검사
  if (
    board[0][0].textContent === turn &&
    board[1][1].textContent === turn &&
    board[2][2].textContent === turn
  ) {
    winnerExist = true;
  }
  if (
    board[0][2].textContent === turn &&
    board[1][1].textContent === turn &&
    board[2][0].textContent === turn
  ) {
    winnerExist = true;
  }
  return winnerExist;
}

// 승부 판단
const checkGameEnd = (now) => {
  // 승패 판단
  if (checkWinner(now)) {
    $message.textContent = `${turn}가 승리했습니다!`;
    $message.style.color = 'tomato';
    $table.removeEventListener('click', onClickCell);
    return true;
  }
  // 무승부 판단
  const draw = board.flat().every((cell) => cell.textContent);  // 모든 칸이 차있는지 확인
  if (draw) {
    $message.textContent = '무승부입니다!';
    $message.style.color = 'tomato';
    $table.removeEventListener('click', onClickCell);
    return true;
  }

}

// 칸 클릭했을 때 해당 마크 표시
let clickable = true;
const onClickCell = (event) => {
  if (!clickable) return;

  if (event.target.textContent) {
    console.log('이미 사용한 칸입니다.');
    return;
  }
  clickable = false;
  event.target.textContent = turn;
  let now = event.target;
  if (checkGameEnd(now)) return;
  turn = 'O';
  $message.textContent = `${turn} 차례입니다.`;

  setTimeout(() => {
    // 컴퓨터 턴
    const emptyCells = board.flat().filter((v) => !v.textContent);
    const randomCellIndex = Math.floor(Math.random() * emptyCells.length);
    emptyCells[randomCellIndex].textContent = 'O';
    emptyCells[randomCellIndex].style.color = 'seashell';

    // 승부 판정 (승패, 무승부)
    now = emptyCells[randomCellIndex];
    if (checkGameEnd(now)) return;
    // 턴 변경
    turn = 'X';
    $message.textContent = `${turn} 차례입니다.`;
    clickable = true;
  }, 700)

}

// 테이블 생성, 배열에 td 넣기, 셀에 이벤트 리스너 달기
for (let i = 0; i < 3; i++) {
  const $tr = document.createElement('tr');
  $table.append($tr);
  const cells = [];
  for (let j = 0; j < 3; j++) {
    const $td = document.createElement('td');
    $tr.append($td);
    cells.push($td);
  }
  board.push(cells);
}
$table.addEventListener('click', onClickCell);