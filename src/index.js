const crypto = require('crypto');
const random = require('secure-random');
const leftpad = require('left-pad');

const ENTROPY_FACTOR = 32;
const ENTROPY_SIZE = 16;
const BIT_SIZE = 8

// get entropy
const entropy = random(ENTROPY_SIZE, {type: 'Array'}).map((ent) => {
    const ent_bin = Number(ent).toString(2);
    return leftpad(ent_bin, BIT_SIZE, 0);
});

const checksum_size = (ENTROPY_SIZE * BIT_SIZE)/ENTROPY_FACTOR;
const entropy_hash = crypto.createHash('sha256').update(entropy.join("")).digest('hex');