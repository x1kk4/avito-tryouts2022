export function startApp(app: any, PORT: string) {
  try {
    app.listen(PORT, () => console.log(`Running on port ${PORT}`));
  } catch (e) {
    console.log(e);
  }
}
