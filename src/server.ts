import { app } from './app';

const PORT = 6549;

app.listen(PORT, () => {
  console.log(`Fala que eu te escuto na porta ${PORT}`);
});
