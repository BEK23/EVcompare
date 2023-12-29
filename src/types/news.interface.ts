export interface INews {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

export interface INewsResponse {
  products: INews[];
  total: number;
  skip: number;
  limit: number;
}

export interface INewsRequestParams {
  skip?: number;
  limit?: number;
  q?: string;
}
