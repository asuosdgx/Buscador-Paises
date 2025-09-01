export interface Pais {
  name: {
    common: string;
    official: string;
  };
  capital: string[];
  population: number;
  area: number;
  subregion: string;
  languages: {
    [key: string]: string;

  };
  borders: string[];
  currencies: {
    [key: string]: {
      name: string;
      symbol: string;
    };
  };
  flags: {
    png: string;
    svg: string;
  };
  coatOfArms: {
    png: string;
    svg: string;
  };
}
