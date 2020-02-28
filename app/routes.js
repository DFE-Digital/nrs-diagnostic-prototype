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
    help: [
      {
        title: 'Feeling confident?',
        description:
          'If you’re confident, you may skip the learning material and go straight to the lesson quiz.',
        links: [
          {
            text: 'Skip lesson and go to quiz',
            href: '#'
          }
        ]
      }
    ]
  })
})

const videoContentList = [
  {
    id: '1',
    lessonName: '[Lesson name]',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor diam sit nibh consequat morbi vel.',
    url: 'https://www.youtube.com/embed/nXIZzBuDzTg',
    backLink: '',
    nextLink: '',
    help: [
      {
        title: 'Need help?',
        description:
          'The options below are available to you should you need help in regards to the lesson or more broader questions.',
        links: [
          {
            text: 'Speak to a tutor (via email)',
            href: '#'
          },
          {
            text: 'Return to lesson',
            href: '#'
          },
          {
            text: 'View comments by other users',
            href: '#'
          }
        ]
      },
      {
        title: 'Feeling confident?',
        description:
          'If you’re confident, you may skip the learning material and go straight to the lesson quiz.',
        links: [
          {
            text: 'Skip lesson and go to quiz',
            href: '#'
          }
        ]
      }
    ]
  }
]

router.get('/topic/lesson/video/:videoNo', function(req, res) {
  const videoNo = req.params.videoNo
  const videoContent = videoContentList.find(x => x.id === videoNo)
  if (!videoContent) {
    res.redirect('/v4/topic/lesson/select-learning-content')
  }

  res.render('main/v4/templates/video', {
    back: {
      text: 'Back',
      href: videoContent.backLink
    },
    heading: videoContent.lessonName,
    videoNo,
    totalVideos: videoContentList.length,
    description: videoContent.description,
    url: videoContent.url,
    nextLink: videoContent.nextLink,
    help: videoContent.help
  })
})

router.get('/v4/topic/lesson/learning-content', function(req, res) {
  let learningContent = req.session.data['select-learning-material']
  if (learningContent === 'slideshow') {
    res.redirect('')
  } else if (learningContent === 'text') {
    res.redirect('')
  } else if (learningContent === 'video') {
    res.redirect('/topic/lesson/video/1')
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
