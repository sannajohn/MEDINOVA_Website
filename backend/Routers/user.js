import express from "express";
import {
    updateUser, 
    deleteUser,
    getAllUser,
    getMyAppointments,
    getSingleUser, 
    getUserProfile} from "../Controllers/UserController.js";

import { authenticate, restrict } from "../auth/verifyToken.js";
const router = express.Router();

router.get('/:id', authenticate, restrict(["patient"]), getSingleUser);
router.get('/', authenticate, restrict(["admin"]), getAllUser);
router.put('/:id',authenticate, restrict(["patient"]), updateUser);
router.delete('/:id',authenticate , restrict(["patient"]), deleteUser);
router.get('/profile/me', restrict(["patient"]), getUserProfile);
router.get(
    '/appointments/my-appointments', 
    restrict(["patient"]), 
    getMyAppointments
);

export default router;