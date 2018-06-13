var express = require('express');
var router = express.Router();
let {auth, permit} = require('../../functions/authentication');
let Course = require('../../models/course.model');
let Happen = require('../../models/happen.model');


router.delete('/:id', auth, permit('teacher'), (req, res) => {
    Happen.findByIdAndRemove(req.params.id).then((happen) => {
        res.send({
            status: 'success',
            data: {
                happen: happen
            }
        })

    }).catch((error) => {
        res.send({
            status: 'error',
            error: error
        })
    })

});


router.get('/:id', (req, res) => {

    Happen.findById(req.params.id, (err, happen) => {
        if (err)
            return res.send({
                status: "error",
                error: err
            });
        return res.send({
            status: "success",
            data: {
                happen: happen
            }
        })


    });

});


router.get('/', (req, res) => {

    Happen.find({}).then((happen) => {
        res.send({
            status: "success",
            data: {
                happen: happen
            }
        })
    }).catch(error => {
        res.send({
            status: "error",
            error: err
        })
    })

});


router.post('/', auth, permit('teacher'), (req, res) => {

    let happen = new Happen(req.body);
    happen.save(err => {
        if (err)
            res.send({
                status: "error",
                error: err
            });
        res.send({
            status: "success",
            data: {
                message: "happen added successfully"
            }
        })
    })


});




module.exports = router;