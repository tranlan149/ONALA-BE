import * as bcrypt from 'bcrypt';

const saltOrRounds = 10;

export const SecureUtils = {
  /**
   * improve more later
   * @param password
   * @returns hashing password
   */
  hashPassword: (password: string) => {
    return bcrypt.hash(password, saltOrRounds);
  },
  
  comparePasswords: (password: string, hash: string) => {
    return bcrypt.compare(password, hash);
  },
};

