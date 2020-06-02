const express = require('express')
const router = express.Router()


// Branching
router.post('/approve-recomendation-answer', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  let over18 = req.session.data['over-18']

  if (over18 === 'false') {
    res.redirect('v05/approve-recommendation-no')
  } else {
    res.redirect('v05/approve-recommendation-yes')
  }
})

module.exports = router




// Branching
router.post('/approve-recomendation-answer-dv02', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  let over18 = req.session.data['over-18']

  if (over18 === 'false') {
    res.redirect('dv02/approve-recommendation-no')
  } else {
    res.redirect('dv02/approve-recommendation-yes')
  }
})

module.exports = router