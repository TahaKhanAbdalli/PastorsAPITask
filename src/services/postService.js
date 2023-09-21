import request from './ajax';

const postService = (route, data, params) => request({
  method: 'POST',
  route,
  params,
  data,
});

export default postService;
