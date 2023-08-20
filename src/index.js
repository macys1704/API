import 'dotenv/config';
import express from 'express';
import cors from 'cors';

import controleAgenda from './controller/controleAgenda.js'


let servidor = express();
servidor.use(cors());
servidor.use(express.json());

servidor.use(controleAgenda)

servidor.listen(process.env.PORT, () => console.log('API subiu'))