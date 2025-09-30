export interface CultureCarouselImage {
  id: string;
  src: string;
  alt: string;
}

export interface CultureCarouselData {
  preTitle: string;
  title: string;
  highlightedWord: string;
  images: CultureCarouselImage[];
}
