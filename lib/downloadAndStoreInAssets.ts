import * as process from "process";
import fs from "fs";

const { Readable } = require('stream');
const { finished } = require('stream/promises');


export async function downloadAndStoreInPublic(url: string, outputFolder: string, name: string) {
    const root = process.cwd() + "/public"

    if (!fs.existsSync(root))
        console.error("Could not find public folder", root)

    const dir = `${root}/${outputFolder}`;
    if (!fs.existsSync(dir))
        fs.mkdirSync(dir);

    const path = `${dir}/${name}`;

    const { body, status } = await fetch(url);

    if (status != 200) {
        console.error("Failed to fetch file from:", url)
        return
    }

    const stream = fs.createWriteStream(path);
    await finished(Readable.fromWeb(body).pipe(stream));

}
