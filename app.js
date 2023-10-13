const express = require('express');
const {validateNums, mean, median, mode} = require('./calculator')

const app = express();

app.get('/mean', (req, res, next) => {
    try {
        let nums = validateNums(req.query['nums'])

        response = {
            operation: 'mean',
            value: mean(nums)
        }
        return res.json(response)

    } catch(err) {
        next(err);
    }
});

app.get('/median', (req, res, next) => {
    try {
        let nums = validateNums(req.query['nums'])

        response = {
            operation: 'median',
            value: median(nums)
        }
        return res.json(response)
        
    } catch(err) {
        next(err);
    }
});

app.get('/mode', (req, res, next) => {
    try {
        let nums = validateNums(req.query['nums'])

        response = {
            operation: 'mode',
            value: mode(nums)
        }
        return res.json(response)
        
    } catch(err) {
        next(err);
    }
});

app.use( function(err, req, res, next) {
    statusCode = err.status || 500
    errorMsg = err.message || ''
    return res.status(statusCode).send(errorMsg);
});

app.listen(3000, () => {
    console.log('Server listening on port 3000...')
})