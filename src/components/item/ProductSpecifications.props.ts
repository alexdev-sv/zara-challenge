export interface Specs {
  screen: string;
  resolution: string;
  processor: string;
  mainCamera: string;
  selfieCamera: string;
  battery: string;
  os: string;
  screenRefreshRate: string;
}

export interface ProductSpecificationsProps {
  brand: string;
  name: string;
  description: string;
  specs: Specs;
}