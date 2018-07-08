let heroes = [
    { id: 1, name: 'superman', type: 'Flying', feePerMinL: 100},
    { id: 2, name: 'Batman', type: 'Flying', feePerMinL: 120},
    { id: 3, name: 'Ironman', type: 'Metal', feePerMinL: 130},
    { id: 4, name: 'x-man', type: 'Mutant', feePerMinL: 140},
    { id: 5, name: 'Antman', type: 'Insect', feePerMinL: 150}
];

let filteredHeroes = []

// for (let i = 0; i< heroes.length ; i++) {
//     (heroes[i].type === 'Flying' && heroes[i].feePerMinL > 100 )? filteredHeroes.push(heroes[i]): ''
// }



filteredHeroes = heroes.filter(item => item.type=='Flying' && item.feePerMinL > 100)

console.log(filteredHeroes)


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


function commentsPerWriter(comments, name) {

    function searchId(heroes, name) {
        return heroes.filter((hero) => hero.name === name )
    }
    
    let searchedHero = searchId(heroes, name)
    console.log(searchedHero[0].id);

    return comments.filter(comment => comment.writerId === searchedHero[0].id)

};

console.log(commentsPerWriter(comments, 'x-man'))