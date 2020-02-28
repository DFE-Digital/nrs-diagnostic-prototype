const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line
router.get('/v4/topic/select-lesson', function(req, res) {
  res.render('main/v4/topic/select-lesson', {
    back: {
      text: 'Back',
      href: '#'
    },
    heading: '[Course name]',
    topicName: '[topic name]',
    lessons: [
      {
        title: '[lesson name]',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada arcu nibh sit.'
      },
      {
        title: '[lesson name]',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada arcu nibh sit.'
      },
      {
        title: '[lesson name]',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada arcu nibh sit.'
      }
    ]
  })
})

router.get('/v4/topic/lesson/lesson-objective', function(req, res) {
  res.render('main/v4/topic/lesson/lesson-objective', {
    back: {
      text: 'Back',
      href: '#'
    },
    heading: '[Lesson name]'
  })
})

router.get('/v4/topic/lesson/select-learning-content', function(req, res) {
  res.render('main/v4/topic/lesson/select-learning-content', {
    back: {
      text: 'Back',
      href: '#'
    },
    heading: '[Lesson name]',
    title: 'How would you like to learn?',
    description:
      'Once you’re ready, select how you would like the lesson delivered.',
    help: {
      description:
        'If you’re confident, you may skip the learning material and go straight to the lesson quiz.',
      links: [
        {
          text: 'Skip lesson and go to quiz',
          href: '#'
        }
      ]
    }
  })
})

router.get('/v4/topic/lesson/learning-content', function(req, res) {
  let learningContent = req.session.data['select-learning-material']
  if (learningContent === 'slideshow') {
    res.redirect('')
  } else if (learningContent === 'text') {
    res.redirect('')
  } else if (learningContent === 'video') {
    res.redirect('')
  } else {
    res.redirect('/v4/topic/lesson/select-learning-content')
  }
})

router.get('/question/:questionNo', function(req, res) {
  res.render('main/v4/templates/question', {
    back: {
      text: 'Back to lesson',
      href: '/lesson'
    },
    heading: '[Lesson name]',
    questionNo: req.params.questionNo
  })
})

module.exports = router
