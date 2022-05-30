import {lazy} from 'react'
import { useRoutes } from 'react-router-dom';
const HYDiscover = lazy(_ => import("@/pages/discover"));
const HYRecommend = lazy(_ => import("@/pages/discover/c-pages/recommend"));
const HYRanking = lazy(_ => import("@/pages/discover/c-pages/ranking"));
const HYSongs = lazy(_ => import("@/pages/discover/c-pages/songs"));
const HYDjradio = lazy(_ => import("@/pages/discover/c-pages/djradio"));
const HYArtist = lazy(_ => import("@/pages/discover/c-pages/artist"));
const HYAlbum = lazy(_ => import("@/pages/discover/c-pages/album"));
const HYPlayer = lazy(_ => import("@/pages/player"));


const HYFriend = lazy(_ => import("@/pages/friend"));
const HYMine = lazy(_ => import("@/pages/mine"));



const GetRoutes = () => {
  return  useRoutes([
    {
      path: '/',
      exact: true,
      element: <HYDiscover/>
    },
    {
      path: '/discover',
      element: <HYDiscover/>,
      children: [
        {
          path: "/discover/recommend",
          element: <HYRecommend/>
        },
        {
          path: "/discover/ranking",
          element: <HYRanking/>
        },
        {
          path: "/discover/songs",
          element: <HYSongs/>
        },
        {
          path: "/discover/djradio",
          exact: true,
          element: <HYDjradio/>
        },
        {
          path: "/discover/artist",
          element: <HYArtist/>
        },
        {
          path: "/discover/album",
          element: <HYAlbum/>
        },
        {
          path: "/discover/player",
          element: <HYPlayer/>
        }
      ]
    },
    
    {
      path: '/friend',
      element: <HYFriend/>
    },
    {
      path: '/mine',
      element: <HYMine/>
    }
  ])
}
export default GetRoutes