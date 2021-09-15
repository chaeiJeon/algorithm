function solution(s) {
    // sort는 문자열을 유니코드 기준으로 정렬한다
    return s.split('').sort().reverse().join('');
}