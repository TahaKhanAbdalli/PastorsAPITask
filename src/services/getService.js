import request from './ajax';

const getService = async (
  route,
  params,
  headers,
  responseType = undefined
) => request({
  method: 'GET',
  route,
  params,
  headers,
  responseType
});

export default getService;
