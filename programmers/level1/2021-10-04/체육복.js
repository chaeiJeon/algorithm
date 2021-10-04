function solution(n, lost, reserve) {
    var answer = 0;
    lost.sort();
    reserve.sort();
    for(let j=1;j<=n;j++){
        if(lost.includes(j)&&reserve.includes(j)){
            reserve.splice(reserve.indexOf(j),1);
            lost.splice(lost.indexOf(j),1);
        }
    }
    lost.forEach(e=>{
        for(let i=0;i<reserve.length;i++){
            if(e==reserve[i]-1||e==reserve[i]+1){
                reserve[i]=-1;
                answer++;
                break;
            }
        }
    })
    return n-lost.length+answer;
}