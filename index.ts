import { readFile, unlinkSync, writeFile } from 'fs'
import lapas,{ helloMain } from './main'
import { readFile as rf, writeFile as wf } from 'fs/promises'
import { error } from 'console';
console.log('Hello, world!');
helloMain();
readFile('./.gitignore', { encoding: 'utf-8' }, (err, data) => {
    if (!err) {
        writeFile('./.new file', data, (err) => {
            console.log(err);
        })
    }
});
console.log('After read');

rf('./.gitignore', { encoding: 'utf-8' })
    .then((data) => wf('./.new file 2', data))
    .catch(console.error)