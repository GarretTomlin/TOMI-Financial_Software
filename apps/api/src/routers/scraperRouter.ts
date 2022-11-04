import { Router } from "express";
import scraperQuotes from "../services/JSE-Data-Scraper/scraper";

const router = Router();

router.get('/quotes', scraperQuotes);

export default router;
