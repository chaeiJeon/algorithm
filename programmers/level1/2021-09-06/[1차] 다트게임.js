function solution(dartResult) {
    let i=0;
    let answer = dartResult.split(/[S|D|T|*|#]/).filter(e=>e!=='');
    answer = answer.map(e=>+e);
    dartResult.split("").forEach((element,index)=>{
        if(!isNaN(element)) {
            i++;
            if(!isNaN(dartResult[index-1])) i--;
        }
        //S,D,T면 앞 배열에 제곱
        else if(element==='D') answer[i-1]=Math.pow(answer[i-1],2);
        else if(element==='T') answer[i-1]=Math.pow(answer[i-1],3);
        //옵션
        else if(element==='*'){
            answer[i-1]*=2;
            if(answer.length>=1) answer[i-2]*=2;
        }
        else if(element==='#') answer[i-1]=-answer[i-1];
    });
    return answer.reduce((accumulator, curr) => accumulator + curr);
}