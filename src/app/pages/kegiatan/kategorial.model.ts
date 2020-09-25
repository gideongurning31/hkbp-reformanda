export interface Kategorial {
  id: string;
  nama: string;
  thumbnail: string;
  pengurus: KategorialPengurus;
  deskripsi?: Array<string>;
}

export interface KategorialPengurus {
  ketua?: string;
  sekretaris?: string;
  bendahara?: string;
}
