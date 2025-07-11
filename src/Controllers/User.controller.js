import express from 'express'
import { createUser, getAllUsers, getUser, updateUser, deleteUser } from '../Services/User.service.js'

const router = express.Router();

// userRouter.post('/', createUser);
// userRouter.post('/', getAllUsers);
// userRouter.post('/:id', getUser);
// userRouter.post('/:id', updateUser);
// userRouter.post('/:id', deleteUser);

router.route('/').get(getAllUsers).post(createUser);
router.route('/:id').get(getUser).patch(updateUser).delete(deleteUser);


export default router;