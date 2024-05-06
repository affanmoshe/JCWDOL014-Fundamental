let
stringToCap = "hello world";
words = stringToCap.split(" ");

for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
}

console.log(`"${stringToCap}" with each word capitalized is "${words.join(" ")}"\n`);