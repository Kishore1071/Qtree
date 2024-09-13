// Write a JavaScript program to convert a string to title case (capitalize the first letter of each word)


// Method 1: Using BuiltIns

const TitleCase1 = sentence => { 

    return sentence.replace(/\b\w/g, l => l.toUpperCase()); 
  
}

console.log(TitleCase1("this is the sample text"))


// Method 2: Manual

const TitleCase2 = sentence => {

    let sentence_to_array = sentence.split(' ')
    let capitalized_array = sentence_to_array.map(x => x[0].toUpperCase() + x.slice(1))
    sentence = capitalized_array.join(' ')

    return sentence
}

console.log(TitleCase2("this is the sample text"))