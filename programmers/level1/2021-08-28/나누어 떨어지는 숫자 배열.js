function solution(arr, divisor) {
    // 그냥 sort하면 유니코드 순서에 따라 값을 정렬해버림
    return arr.filter(element=>element%divisor===0?true:false).length===0?
        [-1]:arr.filter(element=>element%divisor===0?true:false)
        .sort((a,b)=>a>b?1:a==b?0:-1);
}