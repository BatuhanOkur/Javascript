const getAverage = (a:number,b:number, c?:number):string => {
    const res = (a + b + (typeof c !== 'undefined'? c: 0)) / (typeof c !== 'undefined'? 3: 2);
    return `result : ${res}`
}

