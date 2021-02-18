const fs = require('fs');

const filename = './typings/rebilly/generated.d.ts';

console.log('✂️  Commenting headers');

fs.readFile(filename, 'utf8', (error, data) => {
    if (error) throw error;
    data = data.replace(
        `"Rate-Limit-Limit":`, 
        `// Rate-Limit-Limit":`
    );

    data = data.replace(
        `"Rate-Limit-Remaining":`, 
        `// "Rate-Limit-Remaining":`
    );
    
    data = data.replace(
        `"Rate-Limit-Reset":`, 
        `// "Rate-Limit-Remaining":`
    );

    fs.writeFile(filename, data, 'utf8', (err) => {
        if (err) return console.log(err);
    });
});
