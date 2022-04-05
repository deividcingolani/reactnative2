import moment from 'moment';
import RNFetchBlob from 'rn-fetch-blob';

const SPEED_TESTER_FILE =
  'https://test-4k-photo.s3.us-east-2.amazonaws.com/1mb.png';
const POOR = 75; // 150
const MODERATE = 275; // 550
const GOOD = 500; // 2000

export const toArray = obj => {
  if (!obj) return [];
  if (!Object.keys(obj).length) return [];
  return Object.keys(obj).map(k => ({label: obj[k], value: k}));
};

export const formatDate = (value, format = 'DD/MM/YYYY') => {
  if (!value) return '';
  return moment(value).format(format);
};

export const getNetworkSpeed = (ref) => {
  let startTime, endTime;

  startTime = new Date().getTime();
  return new Promise((resolve, reject) => {
    RNFetchBlob.config({
      fileCache: true,
    })
      .fetch('GET', SPEED_TESTER_FILE, {
        'Content-Type': 'application/octet-stream',
      })
      // .then(res => res.json())
      .then(res => {
        if (ref.current) {
          const totalSize = 2690392 * 8;
          const status = res.info().status;
          let quality = 'Mala';

          if (status === 200) {
            endTime = new Date().getTime();

            const late = (endTime - startTime) / 1000;
            const speed = totalSize / late;
            const speedKps = speed / 1024;
            const speedMps = speedKps / 1024;

            const kbPerSecond = Math.floor(1024 / ((endTime - startTime) / 1000));
            console.log('===> other ::: ', kbPerSecond, speedMps);
            if (kbPerSecond <= POOR) {
              quality = 'Mala';
            } else if (kbPerSecond >= POOR && kbPerSecond <= MODERATE) {
              quality = 'Regular';
            } else if (kbPerSecond >= MODERATE && kbPerSecond <= GOOD) {
              quality = 'Buena';
            } else if (kbPerSecond > GOOD) {
              quality = 'Excelente';
            } else {
              quality = 'Mala';
            }
            resolve(quality);
          }
        }
      });
  });
};
