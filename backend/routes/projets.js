const express = require('express');
const ctrlProjects = require('../controllers/projets')
//const auth = require('../middleware/auth');

const router = express.Router();

router.get('/', ctrlProjects.getAllProject);
router.post('/', ctrlProjects.createProject);
router.get('/:id', ctrlProjects.getOneProject);
router.put('/:id', ctrlProjects.modifyProject);
router.delete('/:id', ctrlProjects.deleteProject);

module.exports = router;