import express from 'express';
import { getCommit } from '../controller/CommitController';

const router = express.Router();

router.get('/api/commits', getCommit);

export default router;