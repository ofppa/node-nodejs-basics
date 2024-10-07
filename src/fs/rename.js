import fs from 'node:fs/promises';

const rename = async () => {
    const oldFilename = 'src/fs/files/wrongFilename.txt';
    const newFilename = 'src/fs/files/properFilename.md';

    try {

        await fs.access(oldFilename);

        try {
            await fs.access(newFilename);
            throw new Error('FS operation failed');
        } catch (err) {
            if (err.code !== 'ENOENT') throw err;
        }

        await fs.rename(oldFilename, newFilename);

    } catch (err) {
        throw new Error('FS operation failed');
    }

};

await rename();