function solution(s){
    // var answer = true;
    // let p=0;
    // let y=0;
    // s.split('').forEach(element=>{
    //     if(element=='p' || element=='P') p++;
    //     else if(element=='y' || element=='Y') y++;
    // });
    // return p==y;
    return s.toUpperCase().split('P').length === s.toUpperCase().split('Y').length;
}