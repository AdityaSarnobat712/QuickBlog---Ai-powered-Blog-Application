import express from 'express';
import { adminLogin, approveCommentbyId, deleteCommentbyId, getAllBlogsAdmin, getAllComments, getDashboard } from '../controllers/adminController.js';
import auth from '../middlewares/auth.js';

const adminRouter = express.Router();

adminRouter.post('/login',adminLogin)
adminRouter.get('/comments',auth,getAllComments)
adminRouter.get('/blogs',getAllBlogsAdmin)
adminRouter.post('/delete-comment',deleteCommentbyId)
adminRouter.post('/approve-comment',approveCommentbyId)
adminRouter.get('/dashboard',auth,getDashboard)

export default adminRouter;