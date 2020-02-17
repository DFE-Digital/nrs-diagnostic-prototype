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
  var course = {
    answers: []
  }

  setLocalStorageObject(name, course)
}

function addAnswer(courseName, answer) {
  var course = getLocalStorageObject(courseName)
  if (!course) {
    console.log('Could not find course ' + courseName)
    return
  }

  var answers = course.answers
  answers.push(answer)
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

  var correct = answers.filter(answer => answer === 'correct').length
  var incorrect = answers.filter(answer => answer === 'incorrect').length
  var skipped = answers.filter(answer => answer === 'skipped').length

  var percentage = ((correct / answers.length) * 100).toFixed(0)

  return {
    correct,
    incorrect,
    skipped,
    percentage
  }
}
