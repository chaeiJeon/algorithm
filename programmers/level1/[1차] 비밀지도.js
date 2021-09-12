function solution(n, arr1, arr2) {
    var answer = [];
    var ARR1 = arr1.map(e=>e.toString(2).padStart(n,'0'));
    var ARR2 = arr2.map(e=>e.toString(2).padStart(n,'0'));
    for(let i=0;i<n;i++){
        var temp= '';
        for(let j=0;j<n;j++){
            //둘중 하나라도 '1'이면 벽
            temp += ARR1[i][j]+ARR2[i][j]==='00' ? ' ' : '#';
        }
        answer[i]=temp;
    }
    return answer;
}