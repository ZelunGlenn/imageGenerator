import * as dotenv from 'dotenv';
dotenv.config();

import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey:process.env.OpenAI,
});

const openai = new OpenAIApi(configuration);

import express from 'express';

const app = express();

