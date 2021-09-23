function solution(participant, completion) {
    participant.sort();
    completion.sort();
    return participant.filter((e,i)=>e!=completion[i])[0];
    // 효율성 테스트 탈락
    // var result = participant.slice();
    // participant.forEach((e,i)=>{
    //     if(completion.includes(e)){
    //         result.splice(result.indexOf(e),1);
    //         completion.splice(completion.indexOf(e),1);
    //     }
    // });
    // return result.join('');
}