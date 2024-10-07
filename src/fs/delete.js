import fs from 'node:fs/promises';

const remove = async () => {
     const filename = 'src/fs/files/fileToRemove.txt';

     try {
        await fs.access(filename);
        await fs.unlink(filename);
     } catch(err) {
        throw new Error('FS operation failed');
     }
};

await remove();