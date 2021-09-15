function solution(table, languages, preference) {
    let answer = 'Z';
    let max=-999999;
    let sum;
    let findIndex;
    table.forEach((arr,index)=>{
        sum=0;
        var [lang, ...row] = arr.split(' ');
        languages.forEach((language,languageIndex)=>{
            findIndex = row.findIndex(lang=>lang===language);
            if(findIndex>=0) {
                sum+=(5-findIndex)*preference[languageIndex];
            }
        })
        if(max===sum) answer = answer>lang ? lang : answer;
        if(max<sum) {
            max=sum;
            answer = lang;
        }  
    })
    // table.forEach((arr,index)=>{
    //     sum=0;
    //     languages.forEach((language,languageIndex)=>{
    //         arr.split(' ').forEach((e,i)=>{
    //             if(language===e) {
    //                 sum+=(6-i)*preference[languageIndex];
    //             }
    //         })
    //     })
    //     lang=arr.split(' ')[0];
    //     if(max===sum) answer = answer>lang ? lang : answer;
    //     if(max<sum) {
    //         max=sum;
    //         answer=lang;
    //     }   
    // });
    return answer;
}