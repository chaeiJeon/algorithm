function solution(d, budget) {
    var answer = 0;
    var sum=0;
    d=d.sort((a,b)=>a-b)
    for(let i=0;i<d.length;i++){
        if(sum+d[i]<=budget){
            sum+=d[i];
            answer++;
        }
        else break;
    }
    return answer;
}
// while (d.reduce((a, b) => (a + b), 0) > budget) d.pop();