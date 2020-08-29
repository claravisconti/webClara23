const fs = require("fs");
const path = require("path");
//Editorial
const projectsEditorialFilePath = path.join(__dirname, '../json/projectsEditorial.json');
const projectsEditorial = JSON.parse(fs.readFileSync(projectsEditorialFilePath, 'utf-8'));
//Publicidad
const projectsPublicidadFilePath = path.join(__dirname, '../json/projectsPublicidad.json');
const projectsPublicidad = JSON.parse(fs.readFileSync(projectsPublicidadFilePath, 'utf-8'));
//Marcas
const projectsMarcasFilePath = path.join(__dirname, '../json/projectsMarcas.json');
const projectsMarcas = JSON.parse(fs.readFileSync(projectsMarcasFilePath, 'utf-8'));
//Packaging
const projectsPackagingFilePath = path.join(__dirname, '../json/projectsPackaging.json');
const projectsPackaging = JSON.parse(fs.readFileSync(projectsPackagingFilePath, 'utf-8'));
//Web
const projectsWebFilePath = path.join(__dirname, '../json/projectsWeb.json');
const projectsWeb = JSON.parse(fs.readFileSync(projectsWebFilePath, 'utf-8'));

const projectController = {
    index: (req, res) => {

        res.render('project', {
            projectsEditorial: projectsEditorial,
            projectsPublicidad: projectsPublicidad,
            projectsMarcas: projectsMarcas,
            projectsPackaging:projectsPackaging,
            projectsWeb:projectsWeb,
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