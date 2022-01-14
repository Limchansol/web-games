//1 비복원 추출
const numbers = Array(45).fill().map((el, i) => i + 1)  // [1, 2, 3, ..., 44, 45]
const ans = [];
for (let i = 0; i < 7; i++) {
    let n = Math.floor(Math.random() * numbers.length);
    ans.push(numbers[n]);
    ans.splice(n, 1);
}

//2 복원 추출 후 중복 확인
while (ans.length < 7) {
        let n = Math.floor(Math.random() * 45 + 1);
        if (!ans.includes(n)) {
            ans.push(n);
        }
    }

//3 복원 추출 후 중복 확인 (시간복잡도 낮음)
const check = Array(11).fill(false);
const number = [];
let n = 0;
for (let i = 0; i < 8; i++) {
    n = Math.floor(Math.random * 10);
    if (check[n] === false) {
        numbers.push(n);
        check[n] = true;
    }
}