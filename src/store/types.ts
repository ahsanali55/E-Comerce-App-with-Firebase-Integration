export interface ProductItem {
  id: number;
  name: string;
  category: string;
  brand: string;
  price: number;
  basePrice: number;
  orgPrice: number;
  stock: number;
  description: string;
  image: string;
  quantity: number;
  addToCart: boolean;
  isStockFull?: boolean;
}

export interface ProductState {
  stockFull: boolean;
  isfetch: boolean;
  productItem: ProductItem[];
}

export interface CartState {
  summarySubTotalPrice: number;
  cartItem: ProductItem[];
  stockFull: boolean;
}

export interface NavbarState {
  isShow: boolean;
}

export interface ProfileState {
  isDropDown: boolean;
}

export interface HeroState {
  title: string;
  mainTitle: string;
  description: string;
  btnName: string;
  image: string;
}

export interface SaleItem {
  title: string;
  percent: string;
  show: string;
  image: string;
}

export interface WhyChooseItem {
  id: number;
  title: string;
  description: string;
}

export interface WhyChooseState {
  left: WhyChooseItem[];
  right: WhyChooseItem[];
}

export interface FooterSection {
  title: string;
  value: string[];
}

export interface FooterState {
  shopping: FooterSection;
  experience: FooterSection;
  newsLetter: {
    title: string;
    description: string;
  };
}

