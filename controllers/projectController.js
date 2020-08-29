const fs = require("fs");
const path = require("path");
const projectsEditorialFilePath = path.join(__dirname, '../json/projectsEditorial.json');
const projectsEditorial = JSON.parse(fs.readFileSync(projectsEditorialFilePath, 'utf-8'));
const projectsPublicidadFilePath = path.join(__dirname, '../json/projectsPublicidad.json');
const projectsPublicidad = JSON.parse(fs.readFileSync(projectsPublicidadFilePath, 'utf-8'));

const projectController = {
    index: (req, res) => {

        res.render('project', {
            projectsEditorial: projectsEditorial,
            projectsPublicidad: projectsPublicidad,
        });
    }
    ,
    option: (req, res) => {

        var idProject = req.params.idProject;

        const projectsFound = projects.find(project => project.id == idProject);
        // console.log(projectsFound);
        // console.log(idProject);

        res.render('result', {
            project: projectsFound
        });
    }
    // ,
    // categories: (req, res) => {

    //     var idProject = req.params.idProject;

    //     const projectsCategories = projects.find(project => project.categories == idProject);
    //     // console.log(projectsFound);
    //     // console.log(idProject);

    //     res.render('result', {
    //         project: projectsFound
    //     });
    // }
}

module.exports = projectController;