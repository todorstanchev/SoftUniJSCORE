function sumByTown(strArray) {
    let obj = {};
    for (let i = 0; i < strArray.length; i += 2) {
        let town = strArray[i];
        let income = Number(strArray[i + 1]);
        if(!obj.hasOwnProperty(town)){
            obj[town] = income;
        } else {
            obj[town] += income;
        }
    }
    console.log(JSON.stringify(obj));
}

sumByTown(['Sofia',
    '20',
    'Varna',
    '3',
    'Sofia',
    '5',
    'Varna',
    '4'
]);