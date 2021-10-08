function solution(board, moves) {
    let acc=[];
    let answer=0;
    moves.forEach(e=>{
        for(let arr of board){
                if(arr[e-1]!=0){
                    if(acc[acc.length-1]==arr[e-1]){
                        answer+=2;
                        acc.length=acc.length-1;
                    }
                    else acc.push(arr[e-1]);
                    arr[e-1]=0;
                    break;
                }
        }
    })
    return answer;
}