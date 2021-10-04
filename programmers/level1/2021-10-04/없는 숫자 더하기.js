function solution(numbers) {
    return [1,2,3,4,5,6,7,8,9].filter((n,i)=>{
        return !numbers.includes(n)?true:false;
    }).reduce((a,i)=>a+i);
}
// 45에서 현재 numbers에 있는 숫자를 모두 빼도 답이 나옴