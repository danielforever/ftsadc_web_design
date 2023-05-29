
let mongoose = require('mongoose'),
    express = require('express'),
    router = express.Router();
const user = require('../models/blog');

router.post('/create', async(req, res) => {
    const userInd = new user(req.body);
    try {
        await userInd.save();
        res.send(userInd);
        console.log(userInd);
      } catch (error) {
        res.status(500).send(error);
      }
}); 
/*     user.create(req.body, (error, data) => {
        if (error) {
            return console.log(error)
        } else {
            console.log(data)
            res.json(data)
        }
    }) */

router.route('/').get((req, res) => {
    user.find()
        .then( function (data) {
            console.log(data);
        })
        .catch(function (error) {
            console.log(error);
        });
/*     user.find((error, data) => {
            if (error) {
                return console.log(error)
            } else {
                res.json(data)
            }
        }) */
})

router.route('/edit/:id').get((req, res) => {
    user.findById(req.params.id, (error, data) => {
        if (error) {
            return console.log(error)
        } else {
            res.json(data)
        }
    })
})

router.route('/update/:id').put((req, res) => {
    user.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if (error) {
            return console.log(error)
        } else {
            res.json(data)
            console.log('User updated successfully !')
        }
    })
})
router.route('/delete/:id').delete((req, res) => {
    user.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            return console.log(error)
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
})
module.exports = router;