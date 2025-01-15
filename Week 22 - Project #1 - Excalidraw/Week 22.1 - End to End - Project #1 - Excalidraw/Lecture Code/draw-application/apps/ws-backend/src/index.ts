import { WebSocketServer } from 'ws';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { JWT_SECRET } from './config';

const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', (ws, request) => {
    const url = request.url;

    if (!url) {
        return;
    }

    const queryParams = new URLSearchParams(url.split('?')[1]);
    const token = queryParams.get('token');

    if (!token) {
        ws.send(JSON.stringify({
            message: "Unauthorized"
        }));
        ws.close();
        return;
    }

    let decoded;
    try {
        decoded = jwt.verify(token, JWT_SECRET);
    } catch (err) {
        ws.send(JSON.stringify({
            message: "Invalid token"
        }));
        ws.close();
        return;
    }

    if (typeof decoded === "string") {
        return;
    }

    if (!decoded || !(decoded as JwtPayload).username) {
        ws.close();
        return;
    }

    ws.on('message', (message) => {
        console.log(`Received message: ${message}`);
    });

    ws.on('close', () => {
        console.log('Client disconnected');
    });
});
