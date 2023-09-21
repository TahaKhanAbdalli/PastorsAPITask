import axios from 'axios';

const headers = {
  'Content-Type': 'application/json',
  Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjU2MCwiZXhwIjoxNzI2NTY3MTc5LCJ0eXBlIjoiYWNjZXNzIiwidGltZXN0YW1wIjoxNjk1MDMxMTc5fQ.0y7NtuVDCvcPvmWbliMs1q02sov2oFC6u2Hi6H4A2W4`,
};
const baseUrl= 'https://api.dev.pastorsline.com/api/'
export default function request(dta) {
  const reqData = dta;
  reqData.headers = { ...headers, ...reqData.headers };
  reqData.url = `${baseUrl}${reqData.route}`;
  return new Promise((resolve, reject) => {
    axios(reqData)
      .then(resp => {
        resolve(resp);
      })
      .catch(err => {
        reject(err);
      });
  });
}
