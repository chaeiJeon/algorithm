function solution(absolutes, signs) {
    return absolutes.reduce((a,c,i)=>a+=signs[i]?c:-c,0);
}
// reduce 함수는 초기값을 제공하지 않으면 배열의 첫 번째 요소를 사용한다. 첫번째 요소도 음양 확인을 해야하기 때문에 초기값을 0으로 준다.