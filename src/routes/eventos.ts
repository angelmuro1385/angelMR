import express, { Request, Response, Router } from 'express';

const router: Router = express.Router();

/**
 * @swagger
 * /api/v1/products:
 *   get:
 *     summary: Obtener todos los productos
 *     responses:
 *       200:
 *         description: Lista de productos
 */
router.get('/api/v1/products', (req: Request, res: Response) => {
  res.json([
    {
      name: "string",
      quantity: 1,
      unit_id: 0,
      expiration_date: "2025-04-06T14:29:46.526Z",
      category_id: 0,
      notes: "string",
      image_url: "string",
      id: 0,
      purchase_date: "2025-04-06T14:29:46.526Z",
      unit: {
        name: "string",
        symbol: "string",
        description: "string",
        conversion_factor: 1,
        id: 0
      },
      category: {
        name: "string",
        description: "string",
        parent_id: 0,
        id: 0
      }
    }
  ]);
});

export default router;

