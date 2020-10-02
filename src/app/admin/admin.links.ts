export interface Links {
  icon: string;
  text: string;
  path: Array<string>;
  description?: string;
}

export const adminlinks: Array<Links> = [
  {
    icon: 'gg gg-bible',
    text: 'Renungan Harian',
    path: ['admin', 'renungan'],
  },
  {
    icon: 'gg gg-warta',
    text: 'Warta Jemaat',
    path: ['admin', 'warta'],
  },
  {
    icon: 'fa fa-calendar-plus-o',
    text: 'Kegiatan',
    path: ['admin', 'kegiatan'],
  },
  {
    icon: 'gg gg-gallery',
    text: 'Profil Kategorial',
    path: ['admin', 'kategorial'],
  },
];
