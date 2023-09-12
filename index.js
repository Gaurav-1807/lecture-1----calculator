

let data = process.argv


let selector = data[2]
let a = data[3]
let b = data[4]
switch (selector) {
    case "add":
        console.log(Number(a) + Number(b))
        break;
    case "sub":
        console.log(Number(a) - Number(b))
        break;
    case "multiply":
        console.log(Number(a) * Number(b))
        break;
    case "dis":
        console.log(Number(a) / Number(b))
        break;

    default:
        break;
}