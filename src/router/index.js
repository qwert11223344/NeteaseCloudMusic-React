import { Redirect } from 'react-router';
import React from 'react';
const Discover = React.lazy(() => import('@/views/discover'));
const Friend = React.lazy(() => import('@/views/friend'));
const Mine = React.lazy(() => import('@/views/mine'));
const Error = React.lazy(() => import('@/views/error'));
const SongDetail = React.lazy(() => import('@/views/song'));
const SearchDetail = React.lazy(() => import('@/views/search'));
const PlaylistDetail = React.lazy(() => import('@/views/playlist'));
const ArtistDetail = React.lazy(() => import('@/views/artist'));
const User = React.lazy(() => import('@/views/user'));

const Recommend = React.lazy(() =>
  import('@/views/discover/children/recommend')
);
const Album = React.lazy(() => import('@/views/discover/children/album'));
const Djradio = React.lazy(() => import('@/views/discover/children/djradio'));
const Toplist = React.lazy(() => import('@/views/discover/children/toplist'));
const Artist = React.lazy(() => import('@/views/discover/children/artist'));
const Playlist = React.lazy(() => import('@/views/discover/children/playlist'));

const ArtistHotSong = React.lazy(() =>
  import('@/views/artist/children/hot-song')
);
const ArtistAllAlbum = React.lazy(() =>
  import('@/views/artist/children/all-album')
);
const ArtistMV = React.lazy(() => import('@/views/artist/children/mv'));
const ArtistDesc = React.lazy(() => import('@/views/artist/children/desc'));

const UserHome = React.lazy(() => import('@/views/user/home'));
const routes = [
  {
    path: '/',
    exact: true,
    render: () => <Redirect to='/discover' />
  },
  {
    path: '/discover',
    component: Discover,
    routes: [
      {
        path: '/discover',
        exact: true,
        render: () => <Redirect to='/discover/recommend' />
      },
      {
        path: '/discover/recommend',
        component: Recommend
      },
      {
        path: '/discover/album',
        component: Album
      },
      {
        path: '/discover/djradio',
        component: Djradio
      },
      {
        path: '/discover/toplist',
        component: Toplist
      },
      {
        path: '/discover/artist',
        component: Artist
      },
      {
        path: '/discover/playlist',
        component: Playlist
      }
    ]
  },
  {
    path: '/user',
    component: User,

    routes: [
      {
        path: '/user',
        exact: true,
        render: () => <Redirect to='/user/home' />
      },
      {
        path: '/user/home',
        component: UserHome
      }
    ]
  },
  {
    path: '/artist',
    component: ArtistDetail,
    routes: [
      {
        path: '/artist/',
        exact: true,
        component: ArtistHotSong
      },
      {
        path: '/artist/album',
        component: ArtistAllAlbum
      },
      {
        path: '/artist/mv',
        component: ArtistMV
      },
      {
        path: '/artist/desc',
        component: ArtistDesc
      }
    ]
  },
  {
    path: '/mine',
    component: Mine
  },
  {
    path: '/friend',
    component: Friend
  },
  {
    path: '/song',
    component: SongDetail
  },
  {
    path: '/search',
    component: SearchDetail
  },
  {
    path: '/playlist',
    component: PlaylistDetail
  },

  {
    component: Error
  }
];
export default routes;
