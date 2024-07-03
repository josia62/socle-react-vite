import CryptoJS from 'crypto-js';
import config from '../../data/constants/config';

export const encryptData = (dataJSON: any) => {
  const encryptedData = CryptoJS.AES.encrypt(
    JSON.stringify(dataJSON),
    config.hashkey?.toString() || '',
  ).toString();
  return encryptedData;
};

export const decryptData = (encryptedData: any) => {
  const bytes = CryptoJS.AES.decrypt(encryptedData, config.hashkey?.toString() || '');
  const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
  return decryptedData;
};
