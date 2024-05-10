// upload.js
import {exec} from 'child_process';
import {server, username} from "../secrets.js";


const command = `scp -r .output/* ${username}@${server}:/var/www/kaw-solutions/printservice-qs`;

exec(command, (error, stdout, stderr) => {
    if (error) {
        console.error(`Error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.error(`STDERR: ${stderr}`);
        return;
    }
    console.log(`Upload successful: ${stdout}`);
});