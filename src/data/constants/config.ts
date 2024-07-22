interface Config {
  baseUrl: string;
  hashkey: string;
}

const config: Config = {
  baseUrl: import.meta.env.VITE_PUBLIC_URL_BACK,
  hashkey: import.meta.env.VITE_PUBLIC_HASH_KEY,
};

export default config;
