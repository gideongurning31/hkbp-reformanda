export const menuConfig: Array<Menu> = [
  {
    title: 'RENUNGAN',
    route: ['renungan'],
  },
  {
    title: 'WARTA',
    route: ['warta'],
  },
  {
    title: 'KEGIATAN',
    route: ['kegiatan'],
  },
  {
    title: 'INFO',
    route: ['info'],
  },
];

export interface Menu {
  title: string;
  route: Array<string>;
}
