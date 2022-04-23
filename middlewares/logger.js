export default function logger(req, res, next) {
  console.log(`[${new Date().toLocaleString()}]:: ${req.url}`);
  next();
}
