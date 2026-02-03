import app from '../server/index.js';  // Adjust path if your server file is deeper

export default function handler(req: any, res: any) {
  app(req, res);
}
