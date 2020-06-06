export interface Links {
  icon: string;
  text: string;
  path: Array<string>;
  description?: string;
}

export const links: Array<Links> = [
  {
    icon: 'gg-pray',
    text: 'Renungan harian yang ditulis oleh Hamba-hamba Tuhan yang melayani di Gereja HKBP.',
    path: ['renungan'],
  },
  {
    icon: 'gg-bible',
    text: 'Artikel Rohani Kristen yang ditulis oleh Pendeta, Penatua, dan Jemaat Gereja, serta saduran dan terjemahan dari tulisan lain.',
    path: ['artikel'],
  },
  {
    icon: 'gg-warta',
    text: 'Warta jemaat resmi dari HKBP Bandung Reformanda, dapat dilihat dan diunduh langsung, update setiap Hari Sabtu.',
    path: ['warta'],
  },
  {
    icon: 'gg-gallery',
    text: 'Foto dan hasil dokumentasi kegiatan gereja yang dapat diunduh ke perangkat Anda.',
    path: ['kegiatan'],
  },
];
