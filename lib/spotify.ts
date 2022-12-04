const getAccessToken = async () => {
  const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization: `Basic ${Buffer.from(
        `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
      ).toString("base64")}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    // @ts-ignore
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token,
    }),
  });
  return response.json();
};

export const getPlaylist = async () => {
  const { access_token } = await getAccessToken();
  const playlist_id = process.env.SPOTIFY_PLAYLIST_SOTW_ID;
  const res = await fetch(`https://api.spotify.com/v1/playlists/${playlist_id}/tracks`, {
    headers: {
      Authorization: `Bearer ${access_token}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();
  console.log(data);
  
  return await data;
};

// const data = {
//   album: {
//     album_type: "album",
//     artists: [
//       {
//         external_urls: {
//           spotify: "https://open.spotify.com/artist/1yxSLGMDHlW21z4YXirZDS",
//         },
//         href: "https://api.spotify.com/v1/artists/1yxSLGMDHlW21z4YXirZDS",
//         id: "1yxSLGMDHlW21z4YXirZDS",
//         name: "Black Eyed Peas",
//         type: "artist",
//         uri: "spotify:artist:1yxSLGMDHlW21z4YXirZDS",
//       },
//     ],
//     available_markets: [],
//     external_urls: {
//       spotify: "https://open.spotify.com/album/4wBDclsxFzGnR4kVAAMI7K",
//     },
//     href: "https://api.spotify.com/v1/albums/4wBDclsxFzGnR4kVAAMI7K",
//     id: "4wBDclsxFzGnR4kVAAMI7K",
//     images: [
//       {
//         height: 640,
//         url: "https://i.scdn.co/image/ab67616d0000b273e435b4dfdcf5e3c4a25663df",
//         width: 640,
//       },
//       {
//         height: 300,
//         url: "https://i.scdn.co/image/ab67616d00001e02e435b4dfdcf5e3c4a25663df",
//         width: 300,
//       },
//       {
//         height: 64,
//         url: "https://i.scdn.co/image/ab67616d00004851e435b4dfdcf5e3c4a25663df",
//         width: 64,
//       },
//     ],
//     name: "Elephunk",
//     release_date: "2003",
//     release_date_precision: "year",
//     total_tracks: 15,
//     type: "album",
//     uri: "spotify:album:4wBDclsxFzGnR4kVAAMI7K",
//   },
//   artists: [
//     {
//       external_urls: {
//         spotify: "https://open.spotify.com/artist/1yxSLGMDHlW21z4YXirZDS",
//       },
//       href: "https://api.spotify.com/v1/artists/1yxSLGMDHlW21z4YXirZDS",
//       id: "1yxSLGMDHlW21z4YXirZDS",
//       name: "Black Eyed Peas",
//       type: "artist",
//       uri: "spotify:artist:1yxSLGMDHlW21z4YXirZDS",
//     },
//   ],
//   available_markets: [],
//   disc_number: 1,
//   duration_ms: 272533,
//   episode: false,
//   explicit: false,
//   external_ids: { isrc: "USIR10311862" },
//   external_urls: {
//     spotify: "https://open.spotify.com/track/3CNqo3gYrfexdrtjFmC9he",
//   },
//   href: "https://api.spotify.com/v1/tracks/3CNqo3gYrfexdrtjFmC9he",
//   id: "3CNqo3gYrfexdrtjFmC9he",
//   is_local: false,
//   name: "Where Is The Love?",
//   popularity: 5,
//   preview_url: null,
//   track: true,
//   track_number: 13,
//   type: "track",
//   uri: "spotify:track:3CNqo3gYrfexdrtjFmC9he",
// };
