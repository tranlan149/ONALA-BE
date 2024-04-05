import * as crypto from 'crypto';

export function randomHexCrypto(number: number) {
  return crypto.randomBytes(number).toString('hex');
}
