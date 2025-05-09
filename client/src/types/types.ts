export interface Product {
  name: string;
  price: number;
  stock: number;
  image: string;
}

export interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
}

export interface Order {
  product: Product;
  quantity: number;
}

export interface ProductsState {
  items: Product[];
  loading: boolean;
  error: string | null;
  searchTerm: string;
}

export interface OrderState {
  orders: { product: Product; quantity: number }[];
  totalItems: number;
  totalPrice: number;
  isLoading: boolean;
  error: string | null;
  successMessage: { message: string } | null;
}
