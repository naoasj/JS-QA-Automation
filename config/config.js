import dotenv from 'dotenv';
dotenv.config();

const config = {
  baseURL: process.env.BASE_URL,

  credentials: {
    username: process.env.API_USERNAME,
    password: process.env.API_PASSWORD,
  },
};

export default config;
