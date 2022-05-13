import { useRoutes } from 'react-router-dom';
import Discover from '@/pages/discover'
import Friend from '@/pages/friend'
import Mine from '@/pages/mine'


const GetRoutes = () => {
  return  useRoutes([
    {
      path: '/',
      exact: true,
      element: <Discover/>
    },
    {
      path: '/friend',
      element: <Friend/>
    },
    {
      path: '/mine',
      element: <Mine/>
    }
  ])
}
export default GetRoutes