// forEach (= for i in li)
// element와 index에 array 요소와 그 인덱스가 자동으로 하나씩 들어감
const array = [];
array.forEach((element, index) => {
    // 원하는 함수
})


// map (새로운 배열 생성)
const array = [1, 2, 3, 4];
array.map((element, index) => {
    return element * 2;  // [2, 4, 6, 8]
})


// fill
Array(9);  // 길이 9인 빈 배열
Array(9).fill(0);  // [0] * 9

Array(9).fill(0).map((el, i) => {
    return i + 1;  // [1, 2, 3, 4, 5, 6, 7, 8, 9]
})


// reduce
const array = [1, 2, 3, 4];
const initialValue = 0;  // 안 쓰면 첫번째 값이 초기값
array.reduce((accumulation, currentValue) => (accumulation + currentValue), initialValue);  // array 합계
array.reduce((a, c) => (a * c), 1);  // 4!

const arr = ['p', 'q', 'r', 's'];
arr.reduce((a, c, index) => {a[index] = c; return a}, {});  // {0: "p", 1: "q", 2: "r", 3: "s"}


// 구조분해 할당 (객체에도 사용 가능)
const arr = [1, 2, 3, 4, 5];
const one = arr[0];
const three = arr[2];
const five = arr[4];
const [one, , three, , five] = arr;  // 자리가 중요
const [one, two, three, four, five, six] = arr;  // six = undefined;
const [one, two, three, four, five, six = 'none'] = arr;  // 기본값 작성 가능
const [one, two, three] = arr;  // 4, 5 는 할당 안됨
const [one, two, ...three] = arr;  // three = [3, 4, 5];

let first = 'book';
let second = 'piano';
[first, second] = [second, first];  // first = 'piano'; second = 'book';


const myBestArt = {
	title: '별이 빛나는 밤에',
	artist: '빈센트 반 고흐',
	year: 1889,
	medium: '유화',
};
const { title, artist, year, medium } = myBestArt;

const myBestSong = {
	title: '무릎',
	artist: '아이유(IU)',
	release: '2015.10.23.',
	lyrics: '모두 잠드는 밤에...'
};
const { title: songName, artist:singer, ...rest } = myBestSong;

const menu1 = { name: '아메리카노' };
const menu2 = { name: '바닐라 라떼', ice: true };
const menu3 = { name: '카페 모카', ice: false };
function printMenu(menu) {
	const { name, ice = true } = menu;
	console.log(`주문하신 메뉴는 '${ice ? '아이스' : '따뜻한'} ${name}'입니다.`);
}

const body = document.body;
const createElement = document.createElement;
const querySelector = document.querySelector;
const { body, createElement, querySelector } = document;  // 변수명과 속성명이 같아야 함

const obj = {a: 1, b: 2};
const a = obj.a;
const b = obj.b;
const { a, b } = obj;

const obj = {
    a: 'hello',
    b: {
        c: 'hi',
        d: { e: 'wow'},
    },
};
const a = obj.a;
const c = obj.b.c;
const e = obj.b.d.e;
const { a, b: { c, d: { e } } } = obj;


// Array.from(유사배열);


// every, some
// flat
// filter 조건에 해당하는 값 걸러줌
// 원본 바꿈 push pop shift unshift splice sort reverse
// 원본 안 바꿈 concat slice filter every some map forEach findIndexOf indcludes ...
