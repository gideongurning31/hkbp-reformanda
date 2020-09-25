import { Kategorial } from './kategorial.model';

export interface Kegiatan {
  id: string;
  title: string;
  url: string;
  type: JenisKegiatan;
  kategorial?: Kategorial;
  startDate?: any;
  endDate?: any;
}

export enum JenisKegiatan {
  LIVESTREAM = 'Livestream',
  PODCAST = 'Podcast',
  CONVERENCE = 'Converence',
}
