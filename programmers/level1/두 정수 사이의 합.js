//양끝의 합 * 양 끝의 합의 개수
function solution(a, b) {
    // var answer = 0;
    // if(b<a){
    //     var temp=b;
    //     b=a;
    //     a=temp;
    // }
    // for(let i=a;i<=b;i++){
    //     answer+=i;
    // }
    // return answer;
    return (a+b)*(Math.abs(b-a)+1)/2;
}