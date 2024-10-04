import fs from 'node:fs/promises';

const create = async () => {
    try {
        return await fs.writeFile('src/fs/files/fresh.txt', 'I am fresh and young', { flag: 'wx' });
    } catch (err) {
        throw new Error('FS operation failed');
    }
};

await create();