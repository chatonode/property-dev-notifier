import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'

interface UserPayload {
    id: string;
    email: string;
}

// Augmenting Type Definition
declare global {
    namespace Express {
        interface Request {
            currentUser?: UserPayload;
        }
    }
}

export const currentUser = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    // Not logged in
    if (!req.session?.jwt) {
        return next()
    }

    try {
        const payload = jwt.verify(req.session.jwt, process.env.JWT_KEY!) as UserPayload

        // Logged in
        req.currentUser = payload
    } catch (err) {
        // next()   // Better to call it as below. We want it to go next middleware no matter what.
    }

    next()
}
