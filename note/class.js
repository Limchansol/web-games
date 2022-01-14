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
}
let human;
human = new Human('chansol', 23);
human.showName();  // chansol
human.showAge();  // 23

