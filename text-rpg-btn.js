const $startScreen = document.querySelector('#start-screen');
const $gameMenu = document.querySelector('#game-menu');
const $battleMenu = document.querySelector('#battle-menu');

const $heroName = document.querySelector('#hero-name');
const $heroLev = document.querySelector('#hero-lev');
const $heroHp = document.querySelector('#hero-hp');
const $heroXp = document.querySelector('#hero-xp');
const $heroAtt = document.querySelector('#hero-att');

const $message = document.querySelector('#message');
const $monsterName = document.querySelector('#monster-name');
const $monsterHp = document.querySelector('#monser-hp');
const $monsterAtt = document.querySelector('#monster-att');

const hero = {
    name: '',
    lev: 1,
    maxHp: 100,
    hp: 100,
    xp: 0,
    att: 10,
};

let monster = null;
const monsterList = [
    { name: '달팽이', hp: 25, att: 10, xp: 10 },
    { name: '슬라임', hp: 50, att: 15, xp: 20 },
    { name: '핑크빈', hp: 150, att: 35, xp: 50 },
];

// 버튼 submit 말고 click을 달아야 하나
// console.log(event.target) 찍어볼 것
$startScreen.addEventListener('submit', (event) => {
    event.preventDefault();  // submit 누르면 새로고침되는 기본 성질 제거
    const name = event.target['name-input'].value;  // form에서는 target['id']로 타겟 불러올 수 있음
    $startScreen.style.display = 'none';
    $gameMenu.style.display = 'block';
    $heroName.textContent = name;
    $heroLev.textContent = `${hero.lev}Lev`;
    $heroHp.textContent = `HP: ${hero.hp}/${hero.maxHp}`;
    $heroXp.textContent = `XP: ${hero.xp}/${hero.lev * 15}`;
    $heroAtt.textContent = `ATT: ${hero.att}`;
    hero.name = name;
})

$gameMenu.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(event.target);
    const menuChoice = event.target.id;
})