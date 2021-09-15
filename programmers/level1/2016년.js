//Date 객체 써도 됨
function solution(a, b) {
    var month=[0,31,29,31,30,31,30,31,31,30,31,30,31];
    var day = ['THU','FRI','SAT','SUN','MON','TUE','WED'];
    var sum=0;
    month.forEach((e,i)=>{
        if(i<a) sum+=e;
    });
    sum+=b;
    return day[sum%7];
}
