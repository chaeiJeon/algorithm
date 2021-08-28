function solution(arr)
{
    return arr.filter((element,index)=>{
        if(element===arr[index+1]) {
            return false; 
        }else return true;
    });
}