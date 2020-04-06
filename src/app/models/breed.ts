export interface Breed {
  breed: string;
  country: string;
  origin: string;
  coat: string;
  pattern: string;
}

export interface BreedResponse {
  values: {
    'data': Breed[];
  };
}
