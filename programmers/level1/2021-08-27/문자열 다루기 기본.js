function solution(s) {
    var answer = true;
    if(s.length!=4 && s.length!=6) return false;
    answer=s.split('').find(element=>isNaN(element));
    return answer?false:true;
}