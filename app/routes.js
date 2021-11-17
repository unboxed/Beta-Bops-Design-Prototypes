const express = require('express')
const router = express.Router()


// Branching for managers to say they don't agree with the recommendation 
// Found on permitted-dev-reqs-manager
router.post('/approve-recommendation-answer', function(req, res) {
    // Get the answer from session data
    // The name between the quotes is the same as the 'name' attribute on the input elements
    // However in JavaScript we can't use hyphens in variable names

    let over18 = req.session.data['how-contacted']

    if (over18 === 'phone') {
        res.redirect('v08/application-list-manager-amendments#amendment')
    } else {
        res.redirect('v08/review-recommendation')
    }
})

module.exports = router



// Branching for officers to say if they think the recommendation should be approved or not
// Found on permitted-dev-reqs-manager
router.post('/refuse-or-approve', function(req, res) {
    // Get the answer from session data
    // The name between the quotes is the same as the 'name' attribute on the input elements
    // However in JavaScript we can't use hyphens in variable names

    let over19 = req.session.data['how-contacted']

    if (over19 === 'phone') {
        res.redirect('v08/make-recommendation')
    } else {
        res.redirect('v08/make-recommendation-grant')
    }
})

module.exports = router

// Branching for type of evidence entry
// Found on set-date-type
router.post('/date-type-check', function(req, res) {
    // Get the answer from session data
    // The name between the quotes is the same as the 'name' attribute on the input elements
    // However in JavaScript we can't use hyphens in variable names

    let over20 = req.session.data['date-type']

    if (over20 === 'range') {
        res.redirect('v19/immunity-bills')
    } else {
        res.redirect('v19/immunity-tax')
    }
})

module.exports = router