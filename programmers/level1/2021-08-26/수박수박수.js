function solution(n) {
    let ans='수박'.repeat(n/2);
    return n%2==1?ans+='수':ans;
}