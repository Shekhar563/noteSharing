import multer from "multer";
import path from "path";

// Storage config
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/temp"); // Ensure this folder exists
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

// File filter for PDFs only
function fileFilter(req, file, cb) {
  const ext = path.extname(file.originalname);
  if (ext !== ".pdf") {
    return cb(new Error("Only PDF files are allowed"), false);
  }
  cb(null, true);
}

// Export configured multer instance
export const upload = multer({
  storage,
  fileFilter,
});