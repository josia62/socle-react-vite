interface Config {
  baseUrl: string;
  hashkey: string;
}

const config: Config = {
  baseUrl: process.env.EXPO_PUBLIC_URL_BACK ?? '',
  hashkey: process.env.EXPO_PUBLIC_HASH_KEY ?? '',
};

export default config;
