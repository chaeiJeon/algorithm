//시저 암호 2021-08-26
//처음에 var="abcd~ abcd~ ABCD~ ABCD~" 이렇게 만들어서 +n 해주는 방법도 있음
function solution(s, n) {
    var answer = '';
    s.split("").forEach(element=>{
        if(element==" ") answer+=" ";
        else{
            let e=element.charCodeAt(0);
            if(e+n>=91&&e<=90) answer+=String.fromCharCode((e+n)%91+65);
            else if(e+n>=123) answer+=String.fromCharCode((e+n)%123+97);
            else answer+=String.fromCharCode((e+n));
        }
    });
    return answer;
}