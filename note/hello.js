let cond = true;
let value = '';
if (cond) {
    value = '참';
} else {
    value = '거짓';
}

let value = cond ? '참' : '거짓';


switch (cond) {
    case true:
        value = '참';
        break
    case false:
        value = '거짓';
        break
}

let i = 1
while (i < 11) {
    console.log('Hello, while!');
    i++;
}

for (let i = 0; i < 10; i++) {
    console.log(i + 1);
    }

for (let i = 1; i < 10; i++) {
    for (let j = 1; j < 10; j++) {
        console.log(i * j);
    }
}

const array = []

const fun = () => {};
function a() {}


// 입력 함수
const number = prompt('인원수를 적어주세요.');

// 경고창
alert(number);

// 예 아니오
const yesOrNo = confirm();

// html 태그 가져오기
const $tagname = document.querySelector('tagname');  // 태그 여러개면 첫번째 태그 선택
const $order = document.querySelector('#order');  // id 혹은 class 활용해서 원하는 태그 선택하기
const $$tagname = document.querySelectorAll('tagname');  // 태그 여러개 선택

// 가져올 때마다 함수 실행
document.querySelector('input').addEventListener('input', function(event) {
    console.log('글자 입력', event.target.value);
});

// 화살표 함수로도 쓸 수 있음
document.querySelector('input').addEventListener('input', () => {
    console.log('글자 입력');
});

// 함수 이름 지어서 밖으로 뺄 수도 있음
const onClick = function() {
    console.log('버튼 클릭');
}
document.querySelector('button').addEventListener('click', onClick);


 
// 이렇게 쓰지 말고
if (sth === 'a' || sth === 'b' || sth === 'c') {
    continue;
}
// 이렇게 쓰자
if (['a', 'b', 'c'].includes(diff)) {
    continue;
}

/* clickable 말고 removeEventListener 함수 쓸 수도 있음.
다만 실수할 확률이 큼. 특히 고차함수에서. */


// class
$tagname.classList.contains('className');  // t/f 반환
$tagname.classList.add('className');  // 추가
$tagname.classList.replace('oldClassName', 'newClassName');  // 수정
$tagname.classList.remove('className');  // 제거


// 막기
const func = function (event) {
    event.preventDefault();  // 태그 기본동작 막기
    event.stopPropagation();  // 이벤트 버블링 막기
}
$tag.addEventListener('action', func, true);  // true 쓰면 이벤트 캡처링 실행


// 깊은 복사, 얕은 복사
const monsterList = [
    { name: '달팽이', hp: 25, att: 10, xp: 10 },
    { name: '슬라임', hp: 50, att: 15, xp: 20 },
    { name: '핑크빈', hp: 150, att: 35, xp: 50 },
];
// 달팽이 깊은 복사 (참조 관계 전부 끊김)
const monster1 = JSON.parse(JSON.stringify(monsterList[0]));

// 달팽이 얕은 복사 (겉만 참조 관계 끊김)
const monster2 = { ...monsterList[0] };
const monster4 = monsterList.slice()[0];
const monster5 = monsterList.concat();

// 달팽이 참조
const monster3 = monsterList[0];


// this
// 객체 안에서 this 쓰면 객체 자신 가리킴
// 객체.method 해야지만 this가 객체 자신이 됨?
const hero = {
    name: '',
    lev: 1,
    maxHp: 100,
    hp: 100,
    xp: 0,
    att: 10,
    attack(monster) {
        monster.hp -= this.att;  // -= hero.att
        this.hp -= monster.hp;  
    },
    // 메소드가 화살표함수면 안됨. 화살표함수면 this는 윈도우됨.
    heal(monster) {
        this.hp += 20;
        this.hp -= monster.att;
    },
};


// 있으면 ?. (optional chaining)
data[-1]?.[0]  // data[-1]이 있으면 그것의 [0]을 불러와라
data.a.b?.c  // data.a.b가 있으면 .c까지 불러와라

// nullish coalescing ??
