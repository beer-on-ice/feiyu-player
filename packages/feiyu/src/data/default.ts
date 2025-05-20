import { FeiyuConfig } from './config/types';

export default {
  proxy: 'https://feiyu-proxy.666986.xyz/api/proxy',
  videoSources: [
    {
      "key": "🔵电影天堂资源",
      "api": "http://caiji.dyttzyapi.com/api.php/provide/vod"
    },
    {
      "key": "🔵如意资源",
      "api": "https://cj.rycjapi.com/api.php/provide/vod"
    },
    {
      "key": "🔵华为吧",
      "api": "https://cjhwba.com/api.php/provide/vod"
    },
  ],
  hotMovies: [
    {
      id: '25848328',
      isNew: false,
      title: '最后生还者 第一季',
      cover:
        'https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2884221114.jpg',
      rate: '9.1',
    }
  ],
} as FeiyuConfig;
