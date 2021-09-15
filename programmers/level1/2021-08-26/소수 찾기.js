function solution(n) {
    //배열을 만들어서 저장해놓기
    let arr=[];
    let flag=false;
    arr[1]=0;
    arr[2]=1;
    for(let i=3;i<=n;i++){
        flag=false;
        // console.log(`--- [${i}] ---`);
        arr[i]=arr[i-1];
        // i가 소수인지 확인
        for(let j=2;j<Math.sqrt(i)+1;j++){
            // console.log(j+")");
            if(i%j==0) {
                // console.log("true!");
                flag=true;
                break;
            }
        }
        if(flag==false) {
            // console.log("false!");
            arr[i]++;
        }
        // console.log(`arr : ${arr[i]}`)
    }
    return arr[n];
}