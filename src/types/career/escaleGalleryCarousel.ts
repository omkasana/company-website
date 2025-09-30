export interface GalleryCarouselImage {
  id: string;
  src: string;
  alt: string;
  title?: string;
}

export interface EscaleGalleryCarouselData {
  images: GalleryCarouselImage[];
}
