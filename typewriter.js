const sentence = "hello there from lighthouse labs \n";

let after = 0;
for (const word of sentence) {
    setTimeout(() => {
        process.stdout.write(word)
    }, after);
    after += 50;
}