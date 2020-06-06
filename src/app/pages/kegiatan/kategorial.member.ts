const pre = '../../../assets/kategorial/';
const post = '-thumb.jpg';

export const kategorial: Array<Kategorial> = [
  {
    nama: 'Seksi Ama',
    thumbnail: `${pre}ama${post}`,
    route: ['kegiatan', 'kategorial', 'ama'],
  },
  {
    nama: 'Seksi Parompuan',
    thumbnail: `${pre}parompuan${post}`,
    route: ['kegiatan', 'kategorial', 'parompuan'],
  },
  {
    nama: 'Naposobulung',
    thumbnail: `${pre}naposo${post}`,
    route: ['kegiatan', 'kategorial', 'naposobulung'],
  },
  {
    nama: 'Seksi Remaja',
    thumbnail: `${pre}remaja${post}`,
    route: ['kegiatan', 'kategorial', 'remaja'],
  },
  {
    nama: 'Sekolah Minggu',
    thumbnail: `${pre}sekolah-minggu${post}`,
    route: ['kegiatan', 'kategorial', 'ama'],
  },
];

export interface Kategorial {
  nama: string;
  route: Array<string>;
  thumbnail: string;
  ketua?: string;
  sekretaris?: string;
  bendahara?: string;
  deskripsi?: string;
}
