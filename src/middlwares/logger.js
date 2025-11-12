import { v4 as uuid4 } from "uuid";
import { fileURLToPath } from "url";
import path from "path";
import fs, { appendFile } from "fs";
import fsPromises from "fs/promises";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


import { format } from "date-fns";


const logEvents = async (message, logFileName) => {
  // "2025-11-04   19:55:13"
  const dateTime = `${format(new Date(), "yyyy-MM-dd\tHH:mm:ss")}`;

  // "2025-11-04   19:55:13   ID   message"
  const finalLog = `${dateTime}\t${uuid4()}\t${message}\n`;

  try {
    const logsDir = path.join(__dirname, "..", "logs");
    if (!fs.existsSync(logsDir)) {
      await fsPromises.mkdir(logsDir);
    }

    await fsPromises.appendFile(path.join(logsDir, logFileName), finalLog);
  } catch (error) {
    console.log("Erro na função logEvents", error);
  }
};

export const logger = (req, res, next) => {
  logEvents(
    `${req.method}\t${req.body}\t${req.url}\t${req.headers.origin}`,
    "req.log"
  );
  next();
};