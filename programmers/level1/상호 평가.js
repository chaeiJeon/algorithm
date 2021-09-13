function solution(scores) {
    var answer = '';
    var rotate=[];
    var max, min;
    var avg;
    var me;
    var temp;
    var isTrue;
    for(let i=0;i<scores[0].length;i++){
        rotate=[];
        for(let j=0;j<scores[0].length;j++){
            if(i==j){
                tempIndex=i;
                me=scores[i][j];
            }
            rotate[j]=scores[j][i];
        }
        max=Math.max(...rotate);
        min=Math.min(...rotate);
        if(max==me || min==me){
            temp=rotate.slice();
            temp.splice(tempIndex,1);
            isTrue = Math.max(...temp)===me || Math.min(...temp)===me;
            if(!isTrue) {
                rotate=temp;
            }
        }
        avg=rotate.reduce((acc,cur)=>acc+cur)/rotate.length;
        if(avg>=90) answer+="A";
        else if(avg>=80) answer+="B";
        else if(avg>=70) answer+="C";
        else if(avg>=50) answer+="D";
        else answer+="F";
        //return 'FFFFFDDCBAA'[Math.floor(avg/10)] 이렇게 해결 가능
    }
    return answer;
}