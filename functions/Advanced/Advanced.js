//1.  Write a function which generates a secret code from a given string, by shifting characters of alphabet by N places. Example:
//  Input: encodeString("neogcamp", 2) ––> Output: pgqiecor

const encodeString = (str, N) => {
    let encoded = " ";
    for (let i = 0; i < str.length; i++) {

        encoded += String.fromCharCode(str.charCodeAt(i) + N);
    }
    return encoded;

}
console.log(encodeString("neogcamp", 2));
//2. Given a sentence, return a sentence with first letter of all words as capital.

const toSentenceCase = (sentence) => {
    let newSentece = "";
    for (let i = 0; i < sentence.length; i++) {
        if (i === 0) {
            newSentece += sentence[i].toUpperCase();

        } else if (i < sentence.length && sentence[i - 1] === " ") {
            newSentece += sentence[i].toUpperCase();
        } else {
            newSentece += sentence[i]
        }

    }
    return newSentece;
}
console.log(toSentenceCase('we are neoGrammers'));

//3.Given an array of numbers, your function should return an array in the ascending order

const sortArray=(arr)=>{
    for(let i=0;i<arr.length;i++){
        let currpos=i;
        let min=arr[0];
        for(let j=curretpos;j<arr.length;j++){
          if()
        }
    }
}