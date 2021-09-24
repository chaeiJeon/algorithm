function solution(answers) {
    var answer = [];
    var _1=[1,2,3,4,5];
    var _2=[2,1,2,3,2,4,2,5];
    var _3=[3,3,1,1,2,2,4,4,5,5];
    var score=[0,0,0];
    answers.forEach((e,i)=>{
        if(e==_1[i%5]) score[0]++;
        if(e==_2[i%8]) score[1]++;
        if(e==_3[i%10]) score[2]++;
    });
    var max=Math.max(...score);
    score.forEach((e,i)=>{
        if(e>=max) answer.push(i+1);
    })
    return answer;
}
// 맞는 답을 필터로 거른다음 그 배열의 길이를 담는 방법도 가능
//     var a1c = answers.filter((a,i)=> a === a1[i%a1.length]).length;
//     var a2c = answers.filter((a,i)=> a === a2[i%a2.length]).length;
//     var a3c = answers.filter((a,i)=> a === a3[i%a3.length]).length;
//     var max = Math.max(a1c,a2c,a3c);