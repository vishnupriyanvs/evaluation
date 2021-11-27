const registrationDao = require('../dao/Registration.dao');
var employeeRegistrationController = {
    addEmployeeRegistration: addEmployeeRegistration,
    findEmployeeRegistrations: findEmployeeRegistrations,
    findEmployeeRegistrationByEmpRequestId: findEmployeeRegistrationByEmpRequestId,
    updateEmployeeRegistration: updateEmployeeRegistration,
    deleteByEmpRequestId: deleteByEmpRequestId
}

function addEmployeeRegistration(req, res) {
    let employeeRegistration = req.body;
    registrationDao.create(employeeRegistration).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function findEmployeeRegistrationByEmpRequestId(req, res) {
    registrationDao.findByEmpRequestId(req.params.emp_id).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function deleteByEmpRequestId(req, res) {
    registrationDao.deleteByEmpRequestId(req.params.emp_id).
        then((data) => {
            res.status(200).json({
                message: "EmployeeRegistration deleted successfully",
                employeeRegistration: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

function updateEmployeeRegistration(req, res) {
    registrationDao.updateEmployeeRegistration(req.body, req.params.emp_id).
        then((data) => {
            res.status(200).json({
                message: "EmployeeRegistration updated successfully",
                employeeRegistration: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

function findEmployeeRegistrations(req, res) {
    registrationDao.findAll().
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

module.exports = employeeRegistrationController;