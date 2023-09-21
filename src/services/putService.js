import request from './ajax';

const putService = (route, data, params) => request({
  method: 'PUT',
  route,
  data,
  params,
});

export default putService;
