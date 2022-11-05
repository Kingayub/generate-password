const uniqRandNumbers = (number: number): number[] => {
    let res: number[] = [];
    do {
        let num: number = Math.round(Math.random() * number);
        if (!res.includes(num)) {
            res.push(num)
        }
    } while (res.length < number)
    return res.sort((a, b) => {
        return a - b
    })
}
console.log(uniqRandNumbers(20))