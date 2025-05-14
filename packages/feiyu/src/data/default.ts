import { FeiyuConfig } from './config/types';

export default {
  proxy: 'https://feiyu-player-eight.vercel.app/api/proxy',
  videoSources: [
    {
      key: '豆瓣资源',
      api: 'https: //caiji.dbzy.tv/api.php/provide/vod/from/dbm3u8/at/xml',
    },
  ],
  hotMovies: [
    {
      id: '35588177',
      isNew: false,
      title: '漫长的季节',
      cover:
        'https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2890906384.jpg',
      rate: '9.4',
    },
  ],
} as FeiyuConfig;
