export interface Kategorial {
  id: string;
  nama: string;
  route: Array<string>;
  thumbnail: string;
  ketua?: string;
  sekretaris?: string;
  bendahara?: string;
  deskripsi?: Array<string>;
}
