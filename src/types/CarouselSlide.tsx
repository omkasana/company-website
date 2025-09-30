export interface CarouselSlide {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
  buttonLink?: string; //
  backgroundImage: string;
  buttonStyle: "primary" | "secondary";
}
