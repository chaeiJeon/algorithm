function solution(a, b) {
    let result=0;
     a.forEach((e,i)=>result+=e*b[i]);
    return result;
}
    // a.reduce((acc,_,i)=>acc+=a[i]*b[i],0); 이렇게도 가능