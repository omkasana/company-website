export interface CareerPageVideoData {
  title: string;
  subtitle: string;
  buttons: {
    primary: {
      text: string;
      href: string;
    };
    secondary: {
      text: string;
      href: string;
    };
  };
  videoSrc: string;
}
