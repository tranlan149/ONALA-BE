import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';


export function authenticateJWT(req: Request, res: Response, next: NextFunction) {
  // Lấy token từ header hoặc query parameter hoặc cookie
  const token = req.header('Authorization')?.split(' ')[1] || req.query.token || req.cookies.token;

  if (token) {
    // Giải mã token và kiểm tra tính hợp lệ
    jwt.verify(token, 'your-secret-key', (err, decoded) => {
      if (err) {
        return res.status(401).json({ message: 'Unauthorized' });
      }
      // Lưu thông tin người dùng từ token vào req để sử dụng sau này
      req.user = decoded;
      next();
    });
  } else {
    return res.status(401).json({ message: 'Unauthorized' });
  }
}
