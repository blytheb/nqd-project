import express from "express";
import {
    createChild,
    getChildrenByParent,
    updateChild,
    deleteChild,
} from '../controllers/child.controller.js';

const router = express.Router();

//create new child profile
router.post('/', createChild);

//get all child from parent
router.get('/:parentId', getChildrenByParent);

//update child profile
router.put('/:id', updateChild);

//delete child profile
router.delete('/:id', deleteChild);

export default router;