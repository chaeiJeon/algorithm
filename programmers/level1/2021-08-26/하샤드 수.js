function solution(n) {
    return !(n % (n + "").split("").reduce((a, b) => (+a + +b)));
}
