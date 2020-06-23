const express = require('express')
const router = express.Router()


// Branching
router.post('/approve-recomendation-answer', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  let over18 = req.session.data['over-18']

  if (over18 === 'false') {
    res.redirect('v08/approve-recommendation-no')
  } else {
    res.redirect('v08/approve-recommendation')
  }
})

module.exports = router



// Branching
router.post('/refuse-or-approve', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  let over19 = req.session.data['how-contacted']

  if (over19 === 'phone') {
    res.redirect('dv04-ut/make-recommendation')
  } else {
    res.redirect('dv04-ut/make-recommendation-grant')
  }
})

module.exports = router