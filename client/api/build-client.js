// client/api/build-client.js
import axios from 'axios';

const buildClient = ({ req }) => {
  if (typeof window === 'undefined') {
    // ✅ 在 k8s 集群里，Next 服务端渲染时走 ingress 的 service
    return axios.create({
      baseURL:
        'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local',
      headers: req.headers,
    });
  }

  // ✅ 浏览器环境，直接让浏览器去访问 ticketing.dev
  return axios.create({
    baseURL: '/',
  });
};

export default buildClient;