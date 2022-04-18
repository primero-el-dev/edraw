const randomInt = (min: number, max: number): number => {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min)) + min
}

const isEmpty = (value: any): boolean => value === null || value === undefined

export default {
    randomInt: randomInt,
    isEmpty: isEmpty
}