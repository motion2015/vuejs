let heroes = [
    { balance: 10000, id: 1, name: 'superman', type: 'Flying', feePerMinL: 100},
    { balance: 7000, id: 6, name: 'superman', type: 'Flying', feePerMinL: 100},
    { balance: 8000, id: 2, name: 'Batman', type: 'Flying', feePerMinL: 120},
    { balance: 9000, id: 3, name: 'Ironman', type: 'Metal', feePerMinL: 130},
    { balance: 8000, id: 4, name: 'x-man', type: 'Mutant', feePerMinL: 140},
    { balance: 9000, id: 5, name: 'Antman', type: 'Insect', feePerMinL: 150}
];

let comments = [
    { writerId: 1, coments: '철도로 러시아까지 가고 싶다'},
    { writerId: 2, coments: '기성용 멋지다.'},
    { writerId: 1, coments: '파리에 가서 한달 살기'},
    { writerId: 3, coments: '싱카폴은 언제 가보나'},
    { writerId: 5, coments: '터키도 가고보 싶긴한데'},
    { writerId: 4, coments: '나 이렇게 늙어 버리는걸까'},
    { writerId: 4, coments: '지금 제 재밌는건 프로그래밍 공부야.'},
    { writerId: 2, coments: '이거 재밌으면 됐잖아.'},
]

let AllEatZzajang = true;
let NotAllEatZzajang= false;
for (var i = 0; i< heroes.length ; i++) {
    if(heroes[i].balance <5000){
        AllEatZzajang = false;
        NotAllEatZzajang= true;
    }
}

console.log("AllEatZzajang = " + AllEatZzajang)
console.log("NotAllEatZzajang = " + NotAllEatZzajang)
let AllEatZzajang_every = heroes.every(hero => hero.balance <= 10000)
let NotAllEatZzajang_some = heroes.some(hero => hero.balance < 8000)
console.log("AllEatZzajang_every = " + AllEatZzajang_every)
console.log("NotAllEatZzajang_some = " + NotAllEatZzajang_some)