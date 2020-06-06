const pre = '../../../assets/kategorial/';
const post = '-thumb.jpg';

export const kategorial: Array<Kategorial> = [
  {
    nama: 'Seksi Ama',
    thumbnail: `${pre}ama${post}`,
    route: [''],
  },
  {
    nama: 'Seksi Parompuan',
    thumbnail: `${pre}parompuan${post}`,
    route: [''],
  },
  {
    nama: 'Naposobulung',
    thumbnail: `${pre}naposo${post}`,
    route: [''],
  },
  {
    nama: 'Seksi Remaja',
    thumbnail: `${pre}remaja${post}`,
    route: [''],
  },
  {
    nama: 'Sekolah Minggu',
    thumbnail: `${pre}sekolah-minggu${post}`,
    route: [''],
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
