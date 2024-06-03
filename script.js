function toCase(str) {
    if (str === "") {
        return "-";
    }
    const lowerCase = str.toLowerCase();
    const upperCase = str.toUpperCase();
    return `${lowerCase}-${upperCase}`;
}

// Examples
console.log(toCase('Mthatha'));      // Output: 'mthatha-MTHATHA'
console.log(toCase('HelloWorld'));   // Output: 'helloworld-HELLOWORLD'
console.log(toCase('OpenAI'));       // Output: 'openai-OPENAI'
console.log(toCase(''));             // Output: '-'
console.log(toCase('Hello World'));  // Output: 'hello world-HELLO WORLD'
