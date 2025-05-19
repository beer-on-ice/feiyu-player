import { FeiyuConfig } from './config/types';

export default {
  proxy: 'https://feiyu-proxy.666986.xyz/api/proxy',
  videoSources: [
    {
      "key": "视频源",
      "api": "https://fqzy.me/api.php/provide/vod/at/xml"
    },
    {
        "key": "视频源2",
        "api": "https://mozhuazy.com/api.php/provide/vod/at/xml"
    },
    {
        "key": "视频源3",
        "api": "https://json.heimuer.xyz/api.php/provide/vod/at/xml"
    },
    {
        "key": "视频源4",
        "api": "https://cjhwba.com/api.php/provide/vod/at/xml"
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
