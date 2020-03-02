const express = require('express')
const router = express.Router()

const COURSE_NAME = 'English Functional Skills 2'
const TOPIC_NAME = 'different forms of writing'
const lessonList = [
  {
    id: '1',
    title: 'Writing an email',
    description: [
      'In this lesson you will be learning about how to write a formal email.',
      'Knowing how to write a formal email is a key skill required in many industries and in everyday life.',
      'You may already write emails, so some of the information in this lesson may be familiar to you, but some of it should also be new.'
    ],
    url: '/v4/topic/lesson/lesson-objective',
    videos: [
      {
        id: '1',
        description:
          'In this video, you will learn how to start a formal email.',
        url: 'https://www.youtube.com/embed/nXIZzBuDzTg',
        backLink: '/v4/topic/lesson/1/select-learning-content',
        nextLink: '/v4/topic/lesson/1/practice/1'
      },
      {
        id: '2',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor diam sit nibh consequat morbi vel.',
        url: 'https://www.youtube.com/embed/nXIZzBuDzTg',
        backLink: '/v4/topic/lesson/1/video/1',
        nextLink: '/v4/topic/lesson/1/practice/2'
      },
      {
        id: '3',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor diam sit nibh consequat morbi vel.',
        url: 'https://www.youtube.com/embed/nXIZzBuDzTg',
        backLink: '/v4/topic/lesson/1/video/2',
        nextLink: '/v4/topic/lesson/1/practice/3'
      }
    ],
    practiceQuestions: [
      {
        id: '1',
        name: 'practice-question',
        type: 'multiplechoice',
        title: '',
        text: '',
        html:
          '<p>James has four children. The children are aged between 16, 18, 4, 10.</p><p><strong>Select the ages that are in order from the smallest to the largest.</strong></p>',
        correctAnswerId: '1',
        answers: [
          {
            id: '1',
            value: '4, 10, 16, 18',
            text: '4, 10, 16, 18',
            isCorrect: true,
            feedback:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor diam sit nibh consequat morbi vel.'
          },
          {
            id: '2',
            value: '10, 16, 18, 4',
            text: '10, 16, 18, 4',
            isCorrect: false,
            feedback:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor diam sit nibh consequat morbi vel.'
          },
          {
            id: '3',
            value: '18, 16, 10, 4',
            text: '18, 16, 10, 4',
            isCorrect: false,
            feedback:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor diam sit nibh consequat morbi vel.'
          },
          {
            id: '4',
            value: '16, 18 , 4, 10',
            text: '16, 18 , 4, 10',
            isCorrect: false,
            feedback:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor diam sit nibh consequat morbi vel.'
          }
        ],
        backLink: '/v4/topic/lesson/1/video/1',
        nextLink: '/v4/topic/lesson/1/video/2'
      },
      {
        id: '2',
        name: 'practice-question',
        type: 'multiplechoice',
        title: '',
        text: '',
        html:
          '<p>James has four children. The children are aged between 16, 18, 4, 10.</p><p><strong>Select the ages that are in order from the smallest to the largest.</strong></p>',
        correctAnswerId: '1',
        answers: [
          {
            id: '1',
            value: '4, 10, 16, 18',
            text: '4, 10, 16, 18',
            isCorrect: true,
            feedback:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor diam sit nibh consequat morbi vel.'
          },
          {
            id: '2',
            value: '10, 16, 18, 4',
            text: '10, 16, 18, 4',
            isCorrect: false,
            feedback:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor diam sit nibh consequat morbi vel.'
          },
          {
            id: '3',
            value: '18, 16, 10, 4',
            text: '18, 16, 10, 4',
            isCorrect: false,
            feedback:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor diam sit nibh consequat morbi vel.'
          },
          {
            id: '4',
            value: '16, 18 , 4, 10',
            text: '16, 18 , 4, 10',
            isCorrect: false,
            feedback:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor diam sit nibh consequat morbi vel.'
          }
        ],
        backLink: '/v4/topic/lesson/1/video/2',
        nextLink: '/v4/topic/lesson/1/video/3'
      },
      {
        id: '3',
        name: 'practice-question',
        type: 'multiplechoice',
        title: '',
        text: '',
        html:
          '<p>James has four children. The children are aged between 16, 18, 4, 10.</p><p><strong>Select the ages that are in order from the smallest to the largest.</strong></p>',
        correctAnswerId: '1',
        answers: [
          {
            id: '1',
            value: '4, 10, 16, 18',
            text: '4, 10, 16, 18',
            isCorrect: true,
            feedback:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor diam sit nibh consequat morbi vel.'
          },
          {
            id: '2',
            value: '10, 16, 18, 4',
            text: '10, 16, 18, 4',
            isCorrect: false,
            feedback:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor diam sit nibh consequat morbi vel.'
          },
          {
            id: '3',
            value: '18, 16, 10, 4',
            text: '18, 16, 10, 4',
            isCorrect: false,
            feedback:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor diam sit nibh consequat morbi vel.'
          },
          {
            id: '4',
            value: '16, 18 , 4, 10',
            text: '16, 18 , 4, 10',
            isCorrect: false,
            feedback:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor diam sit nibh consequat morbi vel.'
          }
        ],
        backLink: '/v4/topic/lesson/1/video/3',
        nextLink: '/v4/topic/lesson/1/start-quiz'
      }
    ],
    assessmentQuestions: [
      {
        id: '1',
        name: 'assessment-question',
        type: 'multiplechoice',
        title: '',
        text: '',
        html:
          '<p>James has four children. The children are aged between 16, 18, 4, 10.</p><p><strong>Select the ages that are in order from the smallest to the largest.</strong></p>',
        correctAnswerId: '1',
        answers: [
          {
            id: '1',
            value: '4, 10, 16, 18',
            text: '4, 10, 16, 18',
            isCorrect: true,
            feedback:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor diam sit nibh consequat morbi vel.'
          },
          {
            id: '2',
            value: '10, 16, 18, 4',
            text: '10, 16, 18, 4',
            isCorrect: false,
            feedback:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor diam sit nibh consequat morbi vel.'
          },
          {
            id: '3',
            value: '18, 16, 10, 4',
            text: '18, 16, 10, 4',
            isCorrect: false,
            feedback:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor diam sit nibh consequat morbi vel.'
          },
          {
            id: '4',
            value: '16, 18 , 4, 10',
            text: '16, 18 , 4, 10',
            isCorrect: false,
            feedback:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor diam sit nibh consequat morbi vel.'
          }
        ],
        backLink: '#',
        nextLink: '/v4/topic/lesson/1/assessment/2'
      },
      {
        id: '2',
        name: 'assessment-question',
        type: 'multiplechoice',
        title: '',
        text: '',
        html:
          '<p>James has four children. The children are aged between 16, 18, 4, 10.</p><p><strong>Select the ages that are in order from the smallest to the largest.</strong></p>',
        correctAnswerId: '1',
        answers: [
          {
            id: '1',
            value: '4, 10, 16, 18',
            text: '4, 10, 16, 18',
            isCorrect: true,
            feedback:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor diam sit nibh consequat morbi vel.'
          },
          {
            id: '2',
            value: '10, 16, 18, 4',
            text: '10, 16, 18, 4',
            isCorrect: false,
            feedback:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor diam sit nibh consequat morbi vel.'
          },
          {
            id: '3',
            value: '18, 16, 10, 4',
            text: '18, 16, 10, 4',
            isCorrect: false,
            feedback:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor diam sit nibh consequat morbi vel.'
          },
          {
            id: '4',
            value: '16, 18 , 4, 10',
            text: '16, 18 , 4, 10',
            isCorrect: false,
            feedback:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor diam sit nibh consequat morbi vel.'
          }
        ],
        backLink: '#',
        nextLink: '/v4/topic/lesson/1/assessment/3'
      }
    ]
  },
  {
    id: '2',
    title: 'Writing a letter',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada arcu nibh sit.',
    url: '#',
    videos: []
  },
  {
    id: '3',
    title: 'Writing in a forum',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada arcu nibh sit.',
    url: '#',
    videos: []
  },
  {
    id: '4',
    title: 'Writing a speech',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada arcu nibh sit.',
    url: '#',
    videos: []
  },
  {
    id: '5',
    title: 'Writing a blog',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada arcu nibh sit.',
    url: '#',
    videos: []
  },
  {
    id: '6',
    title: 'Writing a report',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada arcu nibh sit.',
    url: '#',
    videos: []
  },
  {
    id: '7',
    title: 'Writing a leaflet',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada arcu nibh sit.',
    url: '#',
    videos: []
  },
  {
    id: '8',
    title: 'Structuring writing',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada arcu nibh sit.',
    url: '#',
    videos: []
  }
]

const helpLinks = [
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
        text: 'Change media type',
        href: '#'
      },
      {
        text: 'View knowledge base',
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

// Utilities
var shuffleArray = function(array) {
  var currentIndex = array.length
  var temporaryValue, randomIndex

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1

    temporaryValue = array[currentIndex]
    array[currentIndex] = array[randomIndex]
    array[randomIndex] = temporaryValue
  }

  return array
}

// Add your routes here - above the module.exports line
router.get('/v4/topic/select-lesson', function(req, res) {
  res.render('main/v4/topic/select-lesson', {
    heading: COURSE_NAME,
    topicName: TOPIC_NAME,
    lessonUrl: '/v4/topic/lesson/1/lesson-objective'
    // lessons
    // lessons: [
    //   {
    //     title: '[lesson name]',
    //     description:
    //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada arcu nibh sit.'
    //   },
    //   {
    //     title: '[lesson name]',
    //     description:
    //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada arcu nibh sit.'
    //   },
    //   {
    //     title: '[lesson name]',
    //     description:
    //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada arcu nibh sit.'
    //   }
    // ]
  })
})

router.get('/v4/topic/lesson/:lessonId/lesson-objective', function(req, res) {
  const lessonId = req.params.lessonId
  const lesson = lessonList.find(x => x.id === lessonId)
  if (!lesson) {
    res.redirect('/v4/topic/select-lesson')
  }
  res.render('main/v4/topic/lesson/lesson-objective', {
    back: {
      text: 'Back',
      href: '/v4/topic/select-lesson'
    },
    lesson
  })
})

router.get('/v4/topic/lesson/:lessonId/select-learning-content', function(
  req,
  res
) {
  const lessonId = req.params.lessonId
  const lesson = lessonList.find(x => x.id === lessonId)
  if (!lesson) {
    res.redirect('/v4/topic/select-lesson')
  }
  res.render('main/v4/topic/lesson/select-learning-content', {
    back: {
      text: 'Back',
      href: `/v4/topic/lesson/${lessonId}/lesson-objective`
    },
    lesson,
    title: 'How would you like to learn?',
    description:
      'Once you’re ready, select how you would like the lesson delivered.',
    help: helpLinks
  })
})

router.get('/v4/topic/lesson/:lessonId/video/:videoId', function(req, res) {
  const lessonId = req.params.lessonId
  const lesson = lessonList.find(x => x.id === lessonId)
  if (!lesson) {
    res.redirect('/v4/topic/select-lesson')
  }

  const videoId = req.params.videoId
  const video = lesson.videos.find(x => x.id === videoId)
  if (!video) {
    res.redirect(`/v4/topic/lesson/${lessonId}/select-learning-content`)
  }

  res.render('main/v4/templates/video', {
    back: {
      text: 'Back',
      href: video.backLink
    },
    heading: lesson.title,
    video,
    videoNo: lesson.videos.indexOf(video) + 1,
    totalVideos: lesson.videos.length,
    help: helpLinks
  })
})

router.get('/v4/topic/lesson/:lessonId/practice/:questionId', function(
  req,
  res
) {
  const lessonId = req.params.lessonId
  const lesson = lessonList.find(x => x.id === lessonId)
  if (!lesson) {
    res.redirect('/v4/topic/select-lesson')
  }

  const questionId = req.params.questionId
  const question = lesson.practiceQuestions.find(x => x.id === questionId)
  if (!question) {
    res.redirect(`/v4/topic/lesson/${lessonId}/select-learning-content`)
  }

  res.render('main/v4/templates/question', {
    back: {
      text: 'Back to video (part 1)',
      href: '#' // videoContent.backLink
    },
    heading: {
      sub: lesson.title,
      main: `Practice question ${questionId}`
    },
    description:
      'Here is a quick practise question to see if you understand what you have been taught so far.',
    question: {
      ...question,
      answers: shuffleArray(question.answers)
    },
    help: helpLinks
  })
})

router.get('/v4/topic/lesson/:lessonId/learning-content', function(req, res) {
  const lessonId = req.params.lessonId
  const lesson = lessonList.find(x => x.id === lessonId)
  if (!lesson) {
    res.redirect('/v4/topic/select-lesson')
  }

  const video = lesson.videos[0]
  if (!video) {
    res.redirect(`/v4/topic/lesson/${lessonId}/select-learning-content`)
  }

  let learningContent = req.session.data['select-learning-material']
  if (learningContent === 'slideshow') {
    res.redirect('')
  } else if (learningContent === 'text') {
    res.redirect('')
  } else if (learningContent === 'video') {
    res.redirect(`/v4/topic/lesson/${lessonId}/video/${video.id}`)
  } else {
    res.redirect(`/v4/topic/lesson/${lessonId}/select-learning-content`)
  }
})

router.get('/v4/topic/lesson/:lessonId/start-quiz', function(req, res) {
  const lessonId = req.params.lessonId
  const lesson = lessonList.find(x => x.id === lessonId)
  if (!lesson) {
    res.redirect('/v4/topic/select-lesson')
  }
  res.render('main/v4/topic/lesson/start-quiz', {
    back: {
      text: 'Back to lesson',
      href: '/v4/topic/lesson/select-learning-content'
    },
    heading: {
      sub: lesson.title,
      main: "Let's test your knowledge"
    },
    lesson
  })
})

router.get('/v4/topic/lesson/:lessonId/assessment/:questionId', function(
  req,
  res
) {
  const lessonId = req.params.lessonId
  const lesson = lessonList.find(x => x.id === lessonId)
  if (!lesson) {
    res.redirect('/v4/topic/select-lesson')
  }

  const questionId = req.params.questionId
  const question = lesson.assessmentQuestions.find(x => x.id === questionId)
  if (!question) {
    res.redirect(`/v4/topic/lesson/${lessonId}/select-learning-content`)
  }

  const questionNo = lesson.assessmentQuestions.indexOf(question) + 1

  res.render('main/v4/templates/question', {
    back: {
      text: 'Back to lesson',
      href: '#' // videoContent.backLink
    },
    heading: {
      sub: lesson.title,
      main: `Question ${questionId} (out of 10)`,
      html: `Question<br />(${questionNo} of 10)`
    },
    question: {
      ...question,
      answers: shuffleArray(question.answers)
    },
    help: helpLinks
  })
})

module.exports = router
