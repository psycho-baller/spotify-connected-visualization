
import { Canvas } from "@react-three/fiber";
import type { ItemType, SongType } from "../lib/types";
import { getPlaylist } from "../lib/spotify";
import Experience from "../components/experience";

export default function Home({ data }: { data: SongType[] }) {

  return (
      <Canvas id="canvas">
        <Experience data={data} />
      </Canvas>
  );
}

export async function getStaticProps() {
  const playlist = (await getPlaylist()) as { items: ItemType[] };
  const playlistTracks = playlist.items as ItemType[];

  const tracks = playlistTracks.map((item: any) => item.track.id);
  const names = playlistTracks.map((item: any) => item.track.name);
  const images = playlistTracks.map((item: any) => {
    if (item.track.album.images.length > 0) {
      return {
        url: item.track.album.images[0].url,
        height: item.track.album.images[0].height,
        width: item.track.album.images[0].width,
      };
    }
    return { url: "", height: 0, width: 0 };
  });
  const data = [] as SongType[];
  tracks.forEach((track: any, index: any) => {
    data.push({ id: track, name: names[index], image: images[index], connections: { instagram: [], spotify: [] } });
  });
  

  data[0].connections.instagram = [
    "keana.gigliotti",
    "danamaalouf",
  ];
  data[2].connections.instagram = [
    "_ab.i__",
  ];
  data[4].connections.instagram = [
    "jujeedee_",
    "youssefxclusive",
    "_gracemccue",
  ];
  data[5].connections.instagram = [
    "youssefxclusive",
  ];
  data[8].connections.instagram = [
    "danamaalouf",
  ];
  data[11].connections.instagram = [
    "danamaalouf",
    "cindy.art",
        "_ab.i__",
  ];
  data[12].connections.instagram = [
    "keana.gigliotti",
    "sanjith.pp",
    "liam_abid_hill",
    "frazerw_77",
    "itsprobablyzidaan"
  ];
  data[13].connections.instagram = [
    "keana.gigliotti",
  ];
  data[14].connections.instagram = [
    "naheenkabir",
  ];
  data[15].connections.instagram = [
    "rundle.floor3",
  ];
  data[16].connections.instagram = ["naheenkabir", "_ab.i__"];
  data[17].connections.instagram = [
    "_ab.i__",
    "rundle.floor3",
  ];
  data[19].connections.instagram = [
    "claudia_lee03", 
    "ante9a", 
    "haroontanveer01", 
    "aileenmulaw"];
  data[23].connections.instagram = [
    "ante9a",
  ];
  data[24].connections.instagram = [
    "ante9a",
    "haroontanveer01",
    "aileenmulaw",
    "claudia_lee03",
  ];
  data[26].connections.instagram = [
    "_ab.i__",
    "naheenkabir",
    "nicholas_bonato",
    "sanjith.pp",
  ];
  data[27].connections.instagram = [
    "danamaalouf",
    "noureddinenakib",
  ];
  data[28].connections.instagram = [
    "mohd_ere",
  ]
  data[29].connections.instagram = [
    "danamaalouf",
  ];
  data[30].connections.instagram = [
    "laaadlgd",
  ];
  data[31].connections.instagram = [
    "danamaalouf",
  ];
  data[33].connections.instagram = [
    "rxalawie",
  ];
  data[34].connections.instagram = [
    "danamaalouf",
  ];
  data[35].connections.instagram = [
    "tiyaalmurr",
  ];
  data[37].connections.instagram = [
    "_ab.i__",
  ];
  data[38].connections.instagram = [
    "laaadlgd",
    "_ab.i__"
  ];
  data[39].connections.instagram = [
    "_ab.i__",
  ];
  data[40].connections.instagram = [
    "_ab.i__",
  ];
  data[41].connections.instagram = [
    "danamaalouf",
  ];
  data[42].connections.instagram = [
    "laaadlgd",
  ];
  data[43].connections.instagram = [
    "_ab.i__",
  ];
  data[45].connections.instagram = [
    "_ab.i__",
    "naheenkabir",
    "nicholas_bonato",
  ];
  data[46].connections.instagram = [
    "youssefxclusive", "m_abuali_s"
  ];
  // data[47].connections.instagram = [
  //   "",
  // ];
  

  return {
    props: {
      data,
    },
  };
}
