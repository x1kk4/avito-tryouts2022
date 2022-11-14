import app from "./config";

const PORT = process.env.PORT || "9000";

try {
  app.listen(PORT, () => console.info(`Running on port ${PORT}`));
} catch {
  console.error(`Error when starting app on port ${PORT}`);
}
