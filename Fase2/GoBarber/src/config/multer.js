import multer from 'multer';
import crypto from 'crypto';
import { extname, resolve } from 'path';
// extname é uma função que pega a extensão de um arquivo

export default {
  storage: multer.diskStorage({
    destination: resolve(__dirname, '..', '..', 'tmp', 'uploads'),
    filename: (req, file, cb) => {
      crypto.randomBytes(16, (err, res) => {
        if (err) return cb(err);
        // primeiro parametro do callback é o erro

        return cb(null, res.toString('hex') + extname(file.originalname));
      });
    },
  }),
};
