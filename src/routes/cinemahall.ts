import express  from "express";
import {getCinemaHalls,getCinemaHallsByCityAndMovie} from "../controllers/cinemahall.js";

const router = express.Router();

router.get("/cinemahall/:cityId", getCinemaHalls);
router.get("/cinemahall/:cityId/movies/:movieId", getCinemaHallsByCityAndMovie);

export default router;