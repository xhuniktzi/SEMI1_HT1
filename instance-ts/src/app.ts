import express, { Request, Response } from 'express';
import cors from 'cors';

import morgan from 'morgan';

const app = express();
app.set('port', process.env.PORT || 5000);
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.json({
        Instancia: "Instance 1",
        Curso: "Seminario de Sistemas 1",
        Estudiante: "Xhunik Miguel - 201900462",
    });
});

app.get('/check', (req: Request, res: Response) => {
    res.status(200);
});

app.listen(app.get('port'), () => {
    console.log(`Server is running on port ${app.get('port')}`);
});