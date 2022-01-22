class Organism {
    constructor(name, age, say) {
        this.name = name;
        this.age = age;
        this.say = say;
    }
    showName() {
        console.log(this.name);
    }
}

// 클래스 상속 (다중 상속은 안됨)
class Human extends Organism {
    constructor(name, age) {
        super(name, age, 'hi');  // super가 부모 클래스
    }
    showAge() {
        console.log(this.age);
    }
    showName() {
        super.showName();
        console.log('human');
    }
}
const human = new Human('chansol', 23);
human.showName();  // chansol
human.showAge();  // 23
const organism1 = new Organism('asdf', 1, 'hi');
if (organism1 instanceof Human) console.log(true);  // false


