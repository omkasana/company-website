

export interface MicroCategory {
  name: string;
  description: string;
  link:string;
}

export interface SubCategory {
  description?: string;
  name: string;
  microCategories?: MicroCategory[];
}

export interface MainCategory {
  id: string;
  name: string;
  icon: string;
  subCategories: SubCategory[];
}
