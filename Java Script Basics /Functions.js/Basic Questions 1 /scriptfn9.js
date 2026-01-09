function repeatWord(word,count)

{let result = "";
    for (let i=0; i<count; i++){
        result = result + word;
    }
 return result;
}

console.log(repeatWord("hi", 3));
