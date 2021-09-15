function solution(numbers) {
    var sum=[];
    numbers.forEach((e,index)=>{
        for(let i=index+1;i<numbers.length;i++){
            sum.push(e+numbers[i]);
        }
    });
    return Array.from(new Set(sum.sort((a,b)=>a-b)));
}

    // 배열에서 중복값 제거 이 방법도 가능
    // indexOf은 처음부터 찾으니까 만약에 [3, 3] 이 있으면 1번 인덱스의 indexOf은 0이 나옴
    // sum = sum.sort((a,b)=>a-b).filter((element, index) => {
    //     return sum.indexOf(element) === index;
    // });