// indexOf 함수 써서 바로 index 찾아서 출력 가능
function solution(seoul) {
    let ans='';
    seoul.find((element,index)=>{
        if(element==="Kim") {
            ans+=`김서방은 ${index}에 있다`; 
    return ans;
        }
    });
}