export const grabValue = (arr: Array<any>, val: string, field: string): Array<any> => [
    arr.find(n => n[field].toString() === val),
    arr.filter(n => n[field].toString() !== val)
]