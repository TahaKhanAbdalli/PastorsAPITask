import request from './ajax';

const deleteService = (route, params) => request({
  method: 'DELETE',
  route,
  params,
});

export default deleteService;
