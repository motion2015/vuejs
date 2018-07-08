function newsDelivery() {
    let news = [
        {id: '13', title: '문재인 대통령 방중'},
        {id: '25', title: '무인 은행 인가 신청'},
        {id: '55', title: '제주도 한라산 분화 조짐'}
    ];

    let newsDataBase =[];

    function saveNews(item) {
        newsDataBase.push(item)
    }
    // imperative
    // for (var i = 0; i< news.length ; i++) {
    //     saveNews(news[i]);
    // }

    // declative
    news.forEach(item => {
        newsDataBase.push(item)
    })

    console.log(newsDataBase);
}

newsDelivery();



let images = [
    { height: 10, width: 30 },
    { height: 20, width: 90 },
    { height: 54, width: 32 }
]

let areas = []

// for (var i = 0; i< images.length ; i++) {
//     let area = images[i].height * images[i].width
//     areas.push(area)
// }

images.forEach(item => {
    let area = item.height * item.width
    areas.push(area)
})

console.log(areas);
