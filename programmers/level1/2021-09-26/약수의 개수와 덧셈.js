function solution(left, right){
    var result=0;
    // 완전제곱수면 약수의 개수가 홀수개이다.
    for(let i=left;i<=right;i++){
        var num=Math.floor(Math.sqrt(i));
        result+=num*num==i?-i:i;
    }
    return result;
}
// 제곱근이 정수면 약수의 개수가 홀수개이다.
// isInteger(Math.sqrt(i)) 사용하면 Math함수 두번 사용 안해도됨

// 처음 푼 방법
// function isEven(num){
//     var count=0;
//     if(num==1) return false;
//     for(let i=1;i<=num/2;i++){
//         if(i*i==num)count++;
//         else if(num%i==0) count+=2;
//     }
//     return count%2==0?true:false;
// }
// function solution(left, right) {
//     var result=0;
//     for(let i=left;i<=right;i++){
//         result+=isEven(i)?i:-i;
//     }
//     return result;
// }