export const validateTrack = (req, res, next) => {
  const { name, action } = req.body;
  if (!name || !action) {
    return res.status(400).json({ message: "name y action son requeridos" });
  }
  next();
};
