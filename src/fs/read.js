import fs from 'node:fs/promises';

const read = async () => {
    
    const filename = 'src/fs/files/fileToRead.txt';

    try {
        
        await fs.access(filename);

        const fileContent = await fs.readFile(filename, 'utf8');
        console.log(fileContent);
        // folderContent.forEach(element => {
        // });

    } catch(err) {
        throw new Error('FS operation failed');
    } 
};

await read();