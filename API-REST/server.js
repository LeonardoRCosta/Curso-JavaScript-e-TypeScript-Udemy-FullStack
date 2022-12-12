import app from "./app";

const port = 3334;
app.listen(port, () => {
  console.log(`\nServer running on port ${port}`);
  console.log(`CTRL + Click on http://localhost:${port}`);
});
