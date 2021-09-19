function solution(n) {
    console.log([..."010101"]);
    return parseInt(n.toString(3).split('').reverse().join(''), 3);
}
// 전개 연산자 ... 사용 가능
// function solution(n) {
//     return parseInt([...n.toString(3)].reverse().join(''), 3);
// }
