const fs = require("fs");

const { program } = require("commander");


program.name("counter").description("CLI to do file based tasks").version("0.8.0");

program
    .command("count_words")
    .description("Count the number of words in a file")
    .argument("<file>", "file to count the number of words")
    .action((file) => {
        fs.readFile(file, "utf-8", function (err, data) {
            if (err) {
                console.log(err);
                return;
            } else {
                // let words = 0;

                // for (let i = 0; i < data.length; i++) {
                //     if (data[i] === " ") {
                //         words++;
                //     }
                // }

                // words++;

                const words = data.split(" ").length;
                console.log(`There are total ${words} words in file ${file}.`);                
            }
        });
    });

program
    .command("count_sentences")
    .description("Count the number of lines in a file")
    .argument("<file>", "file to count the number of lines")
    .action((file) => {
        fs.readFile(file, "utf-8", function (err, data) {
            if (err) {
                console.log(err);
                return;
            } else {
                const lines = data.split("\n").length;
                console.log(`There are total ${lines} lines in file ${file}.`);                
            }
        });
    });

program.parse();