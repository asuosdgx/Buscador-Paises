import type { Pais } from './types/pais';
declare module './server' {
  const chamarApi: (pais: string) => Promise<Pais[]>;
  export default chamarApi;
}
