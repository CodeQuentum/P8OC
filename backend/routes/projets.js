const express = require('express');
const ctrlProjects = require('../controllers/projets')
const auth = require('../middleware/auth');

const router = express.Router();

router.get('/', ctrlProjects.getAllProject);
router.post('/', auth, ctrlProjects.createProject);
router.get('/:id', ctrlProjects.getOneProject);
router.put('/:id', auth, ctrlProjects.modifyProject);
router.delete('/:id', auth, ctrlProjects.deleteProject);

module.exports = router;