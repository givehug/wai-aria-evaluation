const util = require('util');
const exec = util.promisify(require('child_process').exec);

async function main() {
    console.log('cleanup...')
    await exec('cd server/build && rm -rf react && rm -rf vue && rm -rf angular && rm -rf svelte');

    console.log('building react...')
    await exec('cd react && yarn build-static && mv out ../server/build/react')

    console.log('DONE')
}

main();
