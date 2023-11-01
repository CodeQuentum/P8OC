const Thing = require('../models/projets');

exports.createProject = (req, res) => {
  const project = new Project({
    title: req.body.title,
    cover: req.body.cover,
    description: req.body.description,
    tags: req.body.tags,
    repo: req.body.repo,
    figma: req.body.figma
  });
  project.save().then(
    () => {
      res.status(201).json({
        message: 'Post saved successfully!'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};

exports.getOneProject = (req, res) => {
  Project.findOne({
    _id: req.params.id
  }).then(
    (project) => {
      res.status(200).json(project);
    }
  ).catch(
    (error) => {
      res.status(404).json({
        error: error
      });
    }
  );
};

exports.modifyProject = (req, res) => {
  const project = new Project({
    _id: req.params.id,
    title: req.body.title,
    cover: req.body.cover,
    description: req.body.description,
    tags: req.body.tags,
    repo: req.body.repo,
    figma: req.body.figma
  });
  Project.updateOne({_id: req.params.id}, project).then(
    () => {
      res.status(201).json({
        message: 'project updated successfully!'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};

exports.deleteProject = (req, res) => {
  Project.deleteOne({_id: req.params.id}).then(
    () => {
      res.status(200).json({
        message: 'Deleted!'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};

exports.getAllProject = (req, res) => {
  Project.find().then(
    (projects) => {
      res.status(200).json(projects);
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};