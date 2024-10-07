import fs from 'node:fs/promises';

const list = async () => {
    
    const folderPath = 'src/fs/files';

    try {
        
        await fs.access(folderPath);

        const folderContent = await fs.readdir(folderPath);
        folderContent.forEach(element => {
            console.log(element);
        });

    } catch(err) {
        throw new Error('FS operation failed');
    }

};

await list();