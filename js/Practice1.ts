function needleInHayStack(needle:string, haystack: string) : number {
    let arr = haystack.split('');

    for(let i=0; i<haystack.length; i++) {
        if(arr[i] == needle.charAt(0)) {
            for(let j=0; j<needle.length; j++) {
                if((arr[i+j] == needle.charAt(j)) && (j < needle.length)) {
                    if(j == (needle.length -1))
                        return i;
                }
            }
        }
        
    }
    return -1;
}

console.log(needleInHayStack("a","a"));
console.log(needleInHayStack("abc","c"));

