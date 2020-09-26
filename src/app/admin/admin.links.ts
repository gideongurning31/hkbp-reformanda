import { Links } from '../pages/beranda/beranda.links';

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
    icon: 'fa fa-object-group',
    text: 'Profil Kategorial',
    path: ['admin', 'kategorial'],
  },
  {
    icon: 'fa fa-users',
    text: 'Database Jemaat',
    path: ['admin', 'database'],
  },
];
