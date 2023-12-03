import { http } from 'msw'
import { ResponseResolver } from 'msw';

export const handlers = [
  http.post('/login', (req, res, ctx) => {

    if (req.body.email === 'test@example.com' && req.body.password === 'password123') {
      return res(ctx.status(200), ctx.json({ data: { message: 'Logowanie pomyślne.' } }));
    }

    return res(ctx.status(401), ctx.json({ error: { data: 'Błędny email lub hasło. Spróbuj ponownie.' } }));
  }),
];
