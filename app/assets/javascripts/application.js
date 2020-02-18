/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function() {
  window.GOVUKFrontend.initAll()
})

function setLocalStorageObject(name, value) {
  localStorage.setItem(name, JSON.stringify(value))
}

function getLocalStorageObject(name) {
  var object = localStorage.getItem(name)

  return object ? JSON.parse(object) : null
}

function addToLocalStorageObject(name, key, value) {
  var existing = localStorage.getItem(name)

  existing = existing ? JSON.parse(existing) : {}

  existing[key] = value

  setLocalStorageObject(name, existing)
}

function addCourseToLocalStorage(name) {
  var existing = localStorage.getItem(name)
  if (existing) {
    return
  }

  var course = {
    answers: [],
    steps: getLessonSteps(name)
  }

  setLocalStorageObject(name, course)
}

function getLessonSteps(name) {
  var data = []
  var length = 0
  if (name === 'maths') {
    length = 21
  } else if (name === 'english') {
    length = 25
  }

  for (var i = 0; i < length; i++) {
    data.push(0)
  }

  return data
}

function updateProgress(course, indexArray, value) {
  var existing = getLocalStorageObject(course)

  if (!existing) {
    return
  }

  indexArray.forEach(element => {
    existing.steps[element] = value
  })

  setLocalStorageObject(course, existing)
}

function getLessonProgress(courseName) {
  var course = getLocalStorageObject(courseName)
  if (!course) {
    return
  }

  var steps = course.steps
  var completedSteps = steps.filter(x => x === 1).length

  return ((completedSteps / steps.length) * 100).toFixed(0)
}

function addAnswer(courseName, question, answer, result) {
  var course = getLocalStorageObject(courseName)
  if (!course) {
    console.log('Could not find course ' + courseName)
    return
  }

  var answers = course.answers

  answers.push({
    question,
    answer,
    result
  })

  course.answers = answers

  localStorage.setItem(courseName, JSON.stringify(course))
}

function getAssessmentResults(courseName) {
  var course = getLocalStorageObject(courseName)
  if (!course) {
    console.log(
      'Could not get score for course ' + courseName + ', course not found.'
    )
    return
  }

  var answers = course.answers
  if (answers.length <= 0) {
    return 0
  }

  var correct = answers.filter(x => x.result === 'correct').length
  var incorrect = answers.filter(x => x.result === 'incorrect').length
  var skipped = answers.filter(x => x.result === 'skipped').length

  var percentage = ((correct / answers.length) * 100).toFixed(0)

  return {
    correct,
    incorrect,
    skipped,
    percentage
  }
}

function submitAnswer(course, question, correctAnswer) {
  if (!$('input:radio[name=' + question + ']').is(':checked')) {
    return false
  }

  $('[name=question-feedback]').addClass('hidden')
  var $radio = $('input[name=' + question + ']:checked')
  var id = $radio.attr('id')

  if (id === correctAnswer) {
    addAnswer(course, question, id, 'correct')
  } else {
    addAnswer(course, question, id, 'incorrect')
  }

  showFeedback(id)
  lockQuestion(question)

  return false
}

function skipAnswer(course, question) {
  addAnswer(course, question, '', 'skipped')
  return true
}

function showFeedback(id) {
  $('#' + id + '-feedback').removeClass('hidden')
}

function lockQuestion(question) {
  $('input[name=' + question + ']').attr('disabled', true)
  $('#submitButton').addClass('hidden')
  $('#iDontKnowButton').addClass('hidden')
  $('#continueButton').removeClass('hidden')
}

function validateQuestion(course, question) {
  var course = getLocalStorageObject(course)
  var answers = course.answers
  var currentAnswer = answers.find(x => x.question === question)
  if (currentAnswer) {
    showFeedback(currentAnswer.answer)
    lockQuestion(question)
    $('#' + currentAnswer.answer).prop('checked', true)
  }
}
