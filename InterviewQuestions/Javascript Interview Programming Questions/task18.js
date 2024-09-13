let numbers = [5, 8, 12, 15, 20, 23, 25, 30, 35, 38, 5, 12, 15, 20, 40, 45, 5, 50, 55, 60, 65, 70, 75, 80, 85, 90, 25, 30, 95, 100]

let result = []

for (let x of numbers) {

    let check = result.find(data => data.key === x)

    let count = (numbers.filter(data => data === x)).length

    if (count > 1) {

        check ?? result.push({
            key: x,
            count: (numbers.filter(data => data === x)).length
        })
    }

}

console.log(result) 