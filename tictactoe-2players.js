const board = [];
const $message = document.querySelector('#turn');
const $table = document.querySelector('table');
let turn = 'X';

const checkWinner = (target) => {
  // let rowIndex;
  // let cellIndex;
  // cell과 타겟(td) 일치하는지 확인
  // board.forEach((row, ri) => {
  //     row.forEach((cell, ci) => {
  //         if (cell === target) {
  //             rowIndex = ri;
  //             cellIndex = ci;
  //         }
  //     });
  // });
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

// 칸 클릭했을 때 해당 마크 표시
const onClickCell = (event) => {
  if (event.target.textContent) {
    return alert('이미 사용한 칸입니다.');
  }
  event.target.textContent = turn;
  // O 색깔 변경
  if (turn === 'O') {
    event.target.style.color = 'seashell';
  }
  // 승패 판단
  if (checkWinner(event.target)) {
    $message.textContent = `${turn}가 승리했습니다!`;
    $message.style.color = 'tomato';
    $table.removeEventListener('click', onClickCell);
    return;
  }
  // 무승부 판단
  // let draw = true;
  // board.forEach((row) => {
  //     row.forEach((cell) => {
  //         if (!cell.textContent) {
  //             draw = false;
  //         }
  //     });
  // });
  const draw = board.flat().every((cell) => cell.textContent);
  if (draw) {
    $message.textContent = '무승부입니다!';
    $message.style.color = 'tomato';
    $table.removeEventListener('click', onClickCell);
    return;
  }
  // 턴 변경
  // turn = (turn === 'X') ? 'O' : 'X';
  if (turn === 'X') {
    turn = 'O';
  } else if (turn === 'O') {
    turn = 'X';
  }
  $message.textContent = `${turn} 차례입니다.`;
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