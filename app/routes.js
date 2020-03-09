const express = require('express')
let router = express.Router()

function generateRoutesV4(router) {
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
          url: 'https://www.youtube.com/embed/DzjrzefdYOw',
          backLink: '/v4/topic/lesson/1/select-learning-content',
          nextLink: '/v4/topic/lesson/1/video/practice/1'
        },
        {
          id: '2',
          description:
            'In this video, you will learn how to write the main part of an email.',
          url: 'https://www.youtube.com/embed/Ckgy0yrL6VE',
          backLink: '/v4/topic/lesson/1/video/1',
          nextLink: '/v4/topic/lesson/1/video/practice/2'
        },
        {
          id: '3',
          description:
            'In this final video, you will learn how to end a formal email appropriately.',
          url: 'https://www.youtube.com/embed/kZIrEVDYPOI',
          backLink: '/v4/topic/lesson/1/video/2',
          nextLink: '/v4/topic/lesson/1/video/practice/3'
        }
      ],
      slideshows: [
        {
          id: '1',
          description:
            'In this slideshow, you will learn how to start a formal email.',
          slides: [
            '/public/images/slideshow/1/slideshow-1-slide-1.jpeg',
            '/public/images/slideshow/1/slideshow-1-slide-2.jpeg',
            '/public/images/slideshow/1/slideshow-1-slide-3.jpeg',
            '/public/images/slideshow/1/slideshow-1-slide-4.jpeg',
            '/public/images/slideshow/1/slideshow-1-slide-5.jpeg',
            '/public/images/slideshow/1/slideshow-1-slide-6.jpeg',
            // '/public/images/slideshow/1/slideshow-1-slide-7.jpeg',
            '/public/images/slideshow/1/slideshow-1-slide-8.jpeg',
            '/public/images/slideshow/1/slideshow-1-slide-9.jpeg',
            '/public/images/slideshow/1/slideshow-1-slide-10.jpeg',
            '/public/images/slideshow/1/slideshow-1-slide-11.jpeg'
          ],
          backLink: '/v4/topic/lesson/1/select-learning-content',
          nextLink: '/v4/topic/lesson/1/slideshow/practice/1'
        },
        {
          id: '2',
          description:
            'In this slideshow, you will learn how to write the main part of an email.',
          slides: [
            '/public/images/slideshow/1/slideshow-2-slide-1.jpeg',
            '/public/images/slideshow/1/slideshow-2-slide-2.jpeg'
            // '/public/images/slideshow/1/slideshow-2-slide-3.jpeg'
          ],
          backLink: '/v4/topic/lesson/1/slideshow/1',
          nextLink: '/v4/topic/lesson/1/slideshow/practice/2'
        },
        {
          id: '3',
          description:
            'In this final slideshow, you will learn how to end a formal email appropriately.',
          slides: [
            // '/public/images/slideshow/1/slideshow-3-slide-1.jpeg',
            '/public/images/slideshow/1/slideshow-3-slide-2.jpeg',
            '/public/images/slideshow/1/slideshow-3-slide-3.jpeg',
            '/public/images/slideshow/1/slideshow-3-slide-4.jpeg'
          ],
          backLink: '/v4/topic/lesson/1/slideshow/2',
          nextLink: '/v4/topic/lesson/1/slideshow/practice/3'
        }
      ],
      practiceVideoQuestions: [
        {
          id: '1',
          name: 'practice-question-one',
          type: 'multiplechoice',
          title: '',
          text: '',
          html:
            '<p>You are writing an email to apply for a job as a Construction Manager at Red Bricks Builders. The name of the person you are sending your email to is Mr Jones.</p><p><strong>Which of the following would be an appropriate way to start your email?</strong></p>',
          correctAnswerId: '1',
          answers: [
            {
              id: '1',
              value:
                'Dear Mr Jones, I am writing to apply for the Construction Manager role with Red Bricks Builders.',
              text:
                'Dear Mr Jones, I am writing to apply for the Construction Manager role with Red Bricks Builders.',
              isCorrect: true,
              feedback:
                'A formal email should use the greeting ‘Dear’ instead of an informal greeting such as ‘Hi’ or ‘Hello’. As you know the name of the person you are writing to, you can use their name instead of ‘Sir/Madam’.'
            },
            {
              id: '2',
              value:
                'Dear Sir/Madam, I am writing to apply for the Construction Manager role with Red Bricks Builders.',
              text:
                'Dear Sir/Madam, I am writing to apply for the Construction Manager role with Red Bricks Builders.',
              isCorrect: false,
              feedback:
                'The question informs you that you know the person you are sending your email to. You only use the title ‘Sir/ Madam’ when you do not know the name of the person you are sending it to.'
            },
            {
              id: '3',
              value:
                'Dear Mr Jones, I am writing because I think I am the right person for the Construction Manager role with Red Bricks Builders.',
              text:
                'Dear Mr Jones, I am writing because I think I am the right person for the Construction Manager role with Red Bricks Builders.',
              isCorrect: false,
              feedback:
                'Although your greeting is correct, your opening line is not appropriate for a formal email. You should immediately state why you are writing, for example “I am writing to apply for...” The person who receives the email will decide whether you are ‘the right person’ for the job, you should not state this.'
            },
            {
              id: '4',
              value:
                'Hi Mr Jones, I am writing to apply for the Construction Manager role with Red Bricks Builders.',
              text:
                'Hi Mr Jones, I am writing to apply for the Construction Manager role with Red Bricks Builders.',
              isCorrect: false,
              feedback:
                'Using the greeting ‘Hi’ or ‘Hello’ is too informal for a formal email. You might use this greeting in an email to a friend. You should use the greeting ‘Dear...’ when writing a formal email.'
            }
          ],
          backLink: '/v4/topic/lesson/1/video/1',
          nextLink: '/v4/topic/lesson/1/video/2'
        },
        {
          id: '2',
          name: 'practice-question-two',
          type: 'multiplechoice',
          title: '',
          text: '',
          html:
            '<p>You are writing an email to apply for a job as a Retail Assistant in a local cosmetics store called Carly’s Cosmetics.</p><p><strong>Which of the following would be best to include in your email?</strong></p>',
          correctAnswerId: '1',
          answers: [
            {
              id: '1',
              value:
                'Having been in a Junior Retail Assistant role for nearly 18 months, I have developed skills in sales and customer communication.',
              text:
                'Having been in a Junior Retail Assistant role for nearly 18 months, I have developed skills in sales and customer communication.',
              isCorrect: true,
              feedback:
                'This gives clear and relevant information outlining the skills and experience which make you eligible for the role.'
            },
            {
              id: '2',
              value:
                'I’ve been working in a cosmetics store nearby for the last 18 months and I feel like now is the ideal time to make a move.',
              text:
                'I’ve been working in a cosmetics store nearby for the last 18 months and I feel like now is the ideal time to make a move.',
              isCorrect: false,
              feedback:
                'The phrase “ideal time to make a move” is too informal for a formal email. A job application should use formal language so it sounds professional.'
            },
            {
              id: '3',
              value:
                'I believe I have the relevant experience because I currently work as a Junior Retail Assistant.',
              text:
                'I believe I have the relevant experience because I currently work as a Junior Retail Assistant.',
              isCorrect: false,
              feedback:
                'Although this answer states the experience you have, it does not go into enough detail. You need to explain how your skills have developed because of the experience you have.'
            }
          ],
          backLink: '/v4/topic/lesson/1/video/2',
          nextLink: '/v4/topic/lesson/1/video/3'
        },
        {
          id: '3',
          name: 'practice-question-three',
          type: 'input',
          title: '',
          text: '',
          html:
            '<p>You are writing an email to a local restaurant applying for a job as Front of House Manager. You need to end your email with an appropriate closing line and sign off. You <strong>do not know</strong> the name of the person you are writing to.</p><p><strong>Write the end of your email, making sure you include closing line and a sign off.  use for this email?</strong></p>',
          correctAnswerId: '1',
          answers: [],
          inputAnswers: [],
          genericFeedback: {
            html:
              '<h3 class="govuk-heading-m">Compare the end of your email to the example below:</h3><p>It would be greatly appreciated if you could take a moment to consider my CV, which is attached to this email. I look forward to hearing from you and I hope to discuss the role with you in more detail.<br /><br />Yours sincerely,<br />Paul Smith</p><hr /><h3 class="govuk-heading-m">How did you do on this question?</h3><p>Feedback: When you are writing a formal email, you should use a closing line such as ‘I look forward to hearing from you’ rather than ‘speak soon!’</p><p>When you do not know the name of the person you are writing to then you should use either of the following sign offs:</p><ul class="govuk-list govuk-list--bullet"><li>Yours sincerely</li><li>Yours faithfully</li></ul><p>If you did not give either of these answers, perhaps return to the learning content to remind yourself of this part of a formal email.</p>',
            main: ''
          },
          // correctFeedback: {
          //   html:
          //     "<p>When you do not know the name of the person you are writing to, you should use a sign off such as 'Yours sincerely' or 'Yours faithfully'</p>",
          //   main: ''
          // },
          // incorrectFeedback: {
          //   html:
          //     "<p>When you do not know the name of the person you are writing to, you should use a sign off such as 'Yours sincerely' or 'Yours faithfully'</p>",
          //   main: ''
          // },
          backLink: '/v4/topic/lesson/1/video/3',
          nextLink: '/v4/topic/lesson/1/start-quiz'
        }
      ],
      practiceSlideshowQuestions: [
        {
          id: '1',
          name: 'practice-question-one',
          type: 'multiplechoice',
          title: '',
          text: '',
          html:
            '<p>You are writing an email to apply for a job as a Construction Manager at Red Bricks Builders. The name of the person you are sending your email to is Mr Jones.</p><p><strong>Which of the following would be an appropriate way to start your email?</strong></p>',
          correctAnswerId: '1',
          answers: [
            {
              id: '1',
              value:
                'Dear Mr Jones, I am writing to apply for the Construction Manager role with Red Bricks Builders.',
              text:
                'Dear Mr Jones, I am writing to apply for the Construction Manager role with Red Bricks Builders.',
              isCorrect: true,
              feedback:
                'A formal email should use the greeting ‘Dear’ instead of an informal greeting such as ‘Hi’ or ‘Hello’. As you know the name of the person you are writing to, you can use their name instead of ‘Sir/Madam’.'
            },
            {
              id: '2',
              value:
                'Dear Sir/Madam, I am writing to apply for the Construction Manager role with Red Bricks Builders.',
              text:
                'Dear Sir/Madam, I am writing to apply for the Construction Manager role with Red Bricks Builders.',
              isCorrect: false,
              feedback:
                'The question informs you that you know the person you are sending your email to. You only use the title ‘Sir/ Madam’ when you do not know the name of the person you are sending it to.'
            },
            {
              id: '3',
              value:
                'Dear Mr Jones, I am writing because I think I am the right person for the Construction Manager role with Red Bricks Builders.',
              text:
                'Dear Mr Jones, I am writing because I think I am the right person for the Construction Manager role with Red Bricks Builders.',
              isCorrect: false,
              feedback:
                'Although your greeting is correct, your opening line is not appropriate for a formal email. You should immediately state why you are writing, for example “I am writing to apply for...” The person who receives the email will decide whether you are ‘the right person’ for the job, you should not state this.'
            },
            {
              id: '4',
              value:
                'Hi Mr Jones, I am writing to apply for the Construction Manager role with Red Bricks Builders.',
              text:
                'Hi Mr Jones, I am writing to apply for the Construction Manager role with Red Bricks Builders.',
              isCorrect: false,
              feedback:
                'Using the greeting ‘Hi’ or ‘Hello’ is too informal for a formal email. You might use this greeting in an email to a friend. You should use the greeting ‘Dear...’ when writing a formal email.'
            }
          ],
          backLink: '/v4/topic/lesson/1/slideshow/1',
          nextLink: '/v4/topic/lesson/1/slideshow/2'
        },
        {
          id: '2',
          name: 'practice-question-two',
          type: 'multiplechoice',
          title: '',
          text: '',
          html:
            '<p>You are writing an email to apply for a job as a Retail Assistant in a local cosmetics store called Carly’s Cosmetics.</p><p><strong>Which of the following would be best to include in your email?</strong></p>',
          correctAnswerId: '1',
          answers: [
            {
              id: '1',
              value:
                'Having been in a Junior Retail Assistant role for nearly 18 months, I have developed skills in sales and customer communication.',
              text:
                'Having been in a Junior Retail Assistant role for nearly 18 months, I have developed skills in sales and customer communication.',
              isCorrect: true,
              feedback:
                'This gives clear and relevant information outlining the skills and experience which make you eligible for the role.'
            },
            {
              id: '2',
              value:
                'I’ve been working in a cosmetics store nearby for the last 18 months and I feel like now is the ideal time to make a move.',
              text:
                'I’ve been working in a cosmetics store nearby for the last 18 months and I feel like now is the ideal time to make a move.',
              isCorrect: false,
              feedback:
                'The phrase “ideal time to make a move” is too informal for a formal email. A job application should use formal language so it sounds professional.'
            },
            {
              id: '3',
              value:
                'I believe I have the relevant experience because I currently work as a Junior Retail Assistant.',
              text:
                'I believe I have the relevant experience because I currently work as a Junior Retail Assistant.',
              isCorrect: false,
              feedback:
                'Although this answer states the experience you have, it does not go into enough detail. You need to explain how your skills have developed because of the experience you have.'
            }
          ],
          backLink: '/v4/topic/lesson/1/slideshow/2',
          nextLink: '/v4/topic/lesson/1/slideshow/3'
        },
        {
          id: '3',
          name: 'practice-question-three',
          type: 'input',
          title: '',
          text: '',
          html:
            '<p>You are writing an email to a local restaurant applying for a job as Front of House Manager. You need to end your email with an appropriate closing line and sign off. You <strong>do not know</strong> the name of the person you are writing to.</p><p><strong>Write the end of your email, making sure you include closing line and a sign off.  use for this email?</strong></p>',
          correctAnswerId: '1',
          answers: [],
          inputAnswers: [],
          genericFeedback: {
            html:
              '<h3 class="govuk-heading-m">Compare the end of your email to the example below:</h3><p>It would be greatly appreciated if you could take a moment to consider my CV, which is attached to this email. I look forward to hearing from you and I hope to discuss the role with you in more detail.<br /><br />Yours sincerely,<br />Paul Smith</p><hr /><h3 class="govuk-heading-m">How did you do on this question?</h3><p>Feedback: When you are writing a formal email, you should use a closing line such as ‘I look forward to hearing from you’ rather than ‘speak soon!’</p><p>When you do not know the name of the person you are writing to then you should use either of the following sign offs:</p><ul class="govuk-list govuk-list--bullet"><li>Yours sincerely</li><li>Yours faithfully</li></ul><p>If you did not give either of these answers, perhaps return to the learning content to remind yourself of this part of a formal email.</p>',
            main: ''
          },
          // correctFeedback: {
          //   html:
          //     "<p>When you do not know the name of the person you are writing to, you should use a sign off such as 'Yours sincerely' or 'Yours faithfully'</p>",
          //   main: ''
          // },
          // incorrectFeedback: {
          //   html:
          //     "<p>When you do not know the name of the person you are writing to, you should use a sign off such as 'Yours sincerely' or 'Yours faithfully'</p>",
          //   main: ''
          // },
          backLink: '/v4/topic/lesson/1/slideshow/3',
          nextLink: '/v4/topic/lesson/1/start-quiz'
        }
      ],
      practiceTextQuestions: [
        {
          id: '1',
          name: 'practice-question-one',
          type: 'multiplechoice',
          title: '',
          text: '',
          html:
            '<p>You are writing an email to apply for a job as a Construction Manager at Red Bricks Builders. The name of the person you are sending your email to is Mr Jones.</p><p><strong>Which of the following would be an appropriate way to start your email?</strong></p>',
          correctAnswerId: '1',
          answers: [
            {
              id: '1',
              value:
                'Dear Mr Jones, I am writing to apply for the Construction Manager role with Red Bricks Builders.',
              text:
                'Dear Mr Jones, I am writing to apply for the Construction Manager role with Red Bricks Builders.',
              isCorrect: true,
              feedback:
                'A formal email should use the greeting ‘Dear’ instead of an informal greeting such as ‘Hi’ or ‘Hello’. As you know the name of the person you are writing to, you can use their name instead of ‘Sir/Madam’.'
            },
            {
              id: '2',
              value:
                'Dear Sir/Madam, I am writing to apply for the Construction Manager role with Red Bricks Builders.',
              text:
                'Dear Sir/Madam, I am writing to apply for the Construction Manager role with Red Bricks Builders.',
              isCorrect: false,
              feedback:
                'The question informs you that you know the person you are sending your email to. You only use the title ‘Sir/ Madam’ when you do not know the name of the person you are sending it to.'
            },
            {
              id: '3',
              value:
                'Dear Mr Jones, I am writing because I think I am the right person for the Construction Manager role with Red Bricks Builders.',
              text:
                'Dear Mr Jones, I am writing because I think I am the right person for the Construction Manager role with Red Bricks Builders.',
              isCorrect: false,
              feedback:
                'Although your greeting is correct, your opening line is not appropriate for a formal email. You should immediately state why you are writing, for example “I am writing to apply for...” The person who receives the email will decide whether you are ‘the right person’ for the job, you should not state this.'
            },
            {
              id: '4',
              value:
                'Hi Mr Jones, I am writing to apply for the Construction Manager role with Red Bricks Builders.',
              text:
                'Hi Mr Jones, I am writing to apply for the Construction Manager role with Red Bricks Builders.',
              isCorrect: false,
              feedback:
                'Using the greeting ‘Hi’ or ‘Hello’ is too informal for a formal email. You might use this greeting in an email to a friend. You should use the greeting ‘Dear...’ when writing a formal email.'
            }
          ],
          backLink: '/v4/topic/lesson/1/text/1',
          nextLink: '/v4/topic/lesson/1/text/2'
        },
        {
          id: '2',
          name: 'practice-question-two',
          type: 'multiplechoice',
          title: '',
          text: '',
          html:
            '<p>You are writing an email to apply for a job as a Retail Assistant in a local cosmetics store called Carly’s Cosmetics.</p><p><strong>Which of the following would be best to include in your email?</strong></p>',
          correctAnswerId: '1',
          answers: [
            {
              id: '1',
              value:
                'Having been in a Junior Retail Assistant role for nearly 18 months, I have developed skills in sales and customer communication.',
              text:
                'Having been in a Junior Retail Assistant role for nearly 18 months, I have developed skills in sales and customer communication.',
              isCorrect: true,
              feedback:
                'This gives clear and relevant information outlining the skills and experience which make you eligible for the role.'
            },
            {
              id: '2',
              value:
                'I’ve been working in a cosmetics store nearby for the last 18 months and I feel like now is the ideal time to make a move.',
              text:
                'I’ve been working in a cosmetics store nearby for the last 18 months and I feel like now is the ideal time to make a move.',
              isCorrect: false,
              feedback:
                'The phrase “ideal time to make a move” is too informal for a formal email. A job application should use formal language so it sounds professional.'
            },
            {
              id: '3',
              value:
                'I believe I have the relevant experience because I currently work as a Junior Retail Assistant.',
              text:
                'I believe I have the relevant experience because I currently work as a Junior Retail Assistant.',
              isCorrect: false,
              feedback:
                'Although this answer states the experience you have, it does not go into enough detail. You need to explain how your skills have developed because of the experience you have.'
            }
          ],
          backLink: '/v4/topic/lesson/1/text/2',
          nextLink: '/v4/topic/lesson/1/text/3'
        },
        {
          id: '3',
          name: 'practice-question-three',
          type: 'input',
          title: '',
          text: '',
          html:
            '<p>You are writing an email to a local restaurant applying for a job as Front of House Manager. You need to end your email with an appropriate closing line and sign off. You <strong>do not know</strong> the name of the person you are writing to.</p><p><strong>Write the end of your email, making sure you include closing line and a sign off.  use for this email?</strong></p>',
          correctAnswerId: '1',
          answers: [],
          inputAnswers: [],
          genericFeedback: {
            html:
              '<h3 class="govuk-heading-m">Compare the end of your email to the example below:</h3><p>It would be greatly appreciated if you could take a moment to consider my CV, which is attached to this email. I look forward to hearing from you and I hope to discuss the role with you in more detail.<br /><br />Yours sincerely,<br />Paul Smith</p><hr /><h3 class="govuk-heading-m">How did you do on this question?</h3><p>Feedback: When you are writing a formal email, you should use a closing line such as ‘I look forward to hearing from you’ rather than ‘speak soon!’</p><p>When you do not know the name of the person you are writing to then you should use either of the following sign offs:</p><ul class="govuk-list govuk-list--bullet"><li>Yours sincerely</li><li>Yours faithfully</li></ul><p>If you did not give either of these answers, perhaps return to the learning content to remind yourself of this part of a formal email.</p>',
            main: ''
          },
          // correctFeedback: {
          //   html:
          //     "<p>When you do not know the name of the person you are writing to, you should use a sign off such as 'Yours sincerely' or 'Yours faithfully'</p>",
          //   main: ''
          // },
          // incorrectFeedback: {
          //   html:
          //     "<p>When you do not know the name of the person you are writing to, you should use a sign off such as 'Yours sincerely' or 'Yours faithfully'</p>",
          //   main: ''
          // },
          backLink: '/v4/topic/lesson/1/text/3',
          nextLink: '/v4/topic/lesson/1/start-quiz'
        }
      ],
      assessmentQuestions: [
        {
          id: '1',
          name: 'assessment-question-one',
          type: 'multiplechoice',
          title: '',
          text: '',
          html:
            '<p>You are writing an email to apply for a job as a Salon Assistant at a local hair salon.</p><p>You need to write a subject line to summarise the contents of your email.</p><p><strong>Which of the following would be an appropriate subject line for this email?</strong></p>',
          correctAnswerId: '1',
          answers: [
            {
              id: '1',
              value: 'Application for Salon Assistant role.',
              text: 'Application for Salon Assistant role.',
              isCorrect: true,
              feedback:
                'A formal email should include a brief subject line that clearly summarises the content of the email for the recipient.'
            },
            {
              id: '2',
              value: 'Job application.',
              text: 'Job application.',
              isCorrect: false,
              feedback:
                'The language here is too informal. In a formal email, even the subject must use formal language.'
            },
            {
              id: '3',
              value: 'I am writing to apply for the Salon Assistant role.',
              text: 'I am writing to apply for the Salon Assistant role.',
              isCorrect: false,
              feedback:
                'The subject of your email must contain only a brief summary of what the email will be about. This is too detailed. It would be more appropriate as the opening line.'
            },
            {
              id: '4',
              value: 'Dear Sir/Madam.',
              text: 'Dear Sir/Madam.',
              isCorrect: false,
              feedback:
                'The subject of an email must tell the reader what the email will be about. This would be an appropriate greeting to use at the start of a formal email.'
            }
          ],
          backLink: '#',
          nextLink: '/v4/topic/lesson/1/assessment/2'
        },
        {
          id: '2',
          name: 'assessment-question-two',
          type: 'multiplechoice',
          title: '',
          text: '',
          html:
            '<p>You are writing an email to apply for a job as a Sales Assistant at a local retailer. You do not know the name of the person you are sending the email to.</p><p><strong>Which of the following greetings would you use at the start of your email?</strong></p>',
          correctAnswerId: '1',
          answers: [
            {
              id: '1',
              value: 'Dear Sir/ Madam',
              text: 'Dear Sir/ Madam',
              isCorrect: true,
              feedback:
                "A formal email should begin with a greeting such as 'Dear'. When you do not know the name of ther person you are writing to, you should use the title 'Sir' or 'Madam'."
            },
            {
              id: '2',
              value: 'Hi Sir/ Madam',
              text: 'Hi Sir/ Madam',
              isCorrect: false,
              feedback:
                "The use of 'Hi' is too informal here. Remember, the purpose of this email is to apply for a job, so you should use a formal greeting such as 'Dear....'"
            },
            {
              id: '3',
              value: 'Hello,',
              text: 'Hello,',
              isCorrect: false,
              feedback:
                "The use of 'Hello' is too informal here. Remember, the purpose of this email is to apply for a job, so you should use a formal greeting such as 'Dear...'."
            },
            {
              id: '4',
              value: 'Dear Mr Jones',
              text: 'Dear Mr Jones',
              isCorrect: false,
              feedback:
                "You have not been given the name of the person you are writing you email to, so you should use the title 'Sir/Madam' instead."
            }
          ],
          backLink: '#',
          nextLink: '/v4/topic/lesson/1/assessment/3'
        },
        {
          id: '3',
          name: 'assessment-question-three',
          type: 'multiplechoice',
          title: '',
          text: '',
          html:
            '<p>You are asked to write an email applying for a job as a social worker at a local community centre.</p><p>After your greeting, the first line of your email should introduce your purpose for writing.</p><p><strong>Which of the following would be an appropriate first sentence to introduce your purpose for writing?</strong></p>',
          correctAnswerId: '1',
          answers: [
            {
              id: '1',
              value:
                'I am writing to apply for the role of Social Worker at Cranfield Community Centre.',
              text:
                'I am writing to apply for the role of Social Worker at Cranfield Community Centre.',
              isCorrect: true,
              feedback:
                'This opening line makes the reason for your email immediately clear. The reader learns that this is a job application for a specific role at a specific plcae of work.'
            },
            {
              id: '2',
              value: 'Do you have any jobs available at the community centre?',
              text: 'Do you have any jobs available at the community centre?',
              isCorrect: false,
              feedback:
                'This is too informal for a job application. A formal email should begin with an opening line which clearly explains your reason for writing.'
            },
            {
              id: '3',
              value: 'I am writing because I want a job as a social worker.',
              text: 'I am writing because I want a job as a social worker.',
              isCorrect: false,
              feedback:
                'The language used here is too informal. A job application is a formal piece of writing. A formal email should begin with an opening line which clearly explains your reason for writing.'
            },
            {
              id: '4',
              value:
                'I believe I have the appropraite skills to make me eligible for a role as a social worker.',
              text:
                'I believe I have the appropraite skills to make me eligible for a role as a social worker.',
              isCorrect: false,
              feedback:
                'Before giving more detail about your skills and experience, a formal email should begin with an opening line which clearly explains your reason for writing. The sentence you have selected would be good to use after your opening line.'
            }
          ],
          backLink: '#',
          nextLink: '/v4/topic/lesson/1/assessment/4'
        },
        {
          id: '4',
          name: 'assessment-question-four',
          type: 'multiplechoice',
          title: '',
          text: '',
          html:
            '<p>You are applying for a job as a secretary at the local gym.</p><p><strong>Which of the following would be an appropriate closing line to include in your email?</strong></p>',
          correctAnswerId: '1',
          answers: [
            {
              id: '1',
              value:
                'I have attached my CV for you to review. I look forward to hearing from you.',
              text:
                'I have attached my CV for you to review. I look forward to hearing from you.',
              isCorrect: true,
              feedback:
                "The closing line in your email should give a brief summary or 'next steps' statement, followed by a closing line such as 'I look forward to hearing from you.'"
            },
            {
              id: '2',
              value: 'I have attached my CV for you to review. Speak soon!',
              text: 'I have attached my CV for you to review. Speak soon!',
              isCorrect: false,
              feedback:
                "The phrase 'Speak soon!' is too informal for a job aplication email as you have not necessarily met the person you are writing to. It would be better to use a closing line such as 'I look forward to hearing from you'."
            },
            {
              id: '3',
              value: 'I have attached my CV. Hopefully speak to you soon!',
              text: 'I have attached my CV. Hopefully speak to you soon!',
              isCorrect: false,
              feedback:
                "The phrase 'Hopefully speak to you soon!' is too informal for a job aplication email as you have not necessarily met the person you are writing to. It would be better to use a closing line such as 'I look forward to hearing from you'."
            },
            {
              id: '4',
              value: 'Thanks for everything. ',
              text: 'Thanks for everything. ',
              isCorrect: false,
              feedback:
                'The guy have not done anything you need to thank them for yet. Therefore it would be better to use a more formal sign off.'
            }
          ],
          backLink: '#',
          nextLink: '/v4/topic/lesson/1/assessment/5'
        },
        {
          id: '5',
          name: 'assessment-question-five',
          type: 'input',
          title: '',
          text: '',
          html:
            '<p>You are writing an email to apply for a job at a restaurant. When you do not know the name of the person you are writing to.</p><p>Fill in the word to complete the appropriate sign off to this email.</p><p><strong>Yours __________</strong></p>',
          correctAnswerId: '1',
          answers: [],
          inputAnswers: [
            'sincerely',
            'yours sincerely',
            'yours  sincerely',
            'yours   sincerely',
            'faithfully',
            'yours faithfully',
            'yours  faithfully',
            'yours   faithfully'
          ],
          genericFeedback: {
            html:
              "<p>When you do not know the name of the person you are writing to, you should use a sign off such as 'Yours sincerely' or 'Yours faithfully'</p>",
            main: ''
          },
          correctFeedback: {
            html:
              "<p>When you do not know the name of the person you are writing to, you should use a sign off such as 'Yours sincerely' or 'Yours faithfully'</p>",
            main: ''
          },
          incorrectFeedback: {
            html:
              "<p>When you do not know the name of the person you are writing to, you should use a sign off such as 'Yours sincerely' or 'Yours faithfully'</p>",
            main: ''
          },
          backLink: '#',
          nextLink: '/v4/topic/lesson/1/feedback'
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
        'Choose one of the options below if you need any help with the lesson.',
      links: [
        {
          text: 'View knowledge base',
          href: '#'
        },
        {
          text: 'Speak to a tutor (via email)',
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
          href: '/v4/topic/lesson/1/start-quiz'
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
  router.get('/v4', function(req, res) {
    res.render('main/v4/start', {
      heading: {
        main: 'This is a prototype'
      },
      nextLink: '/v4/context'
    })
  })

  router.get('/v4/end', function(req, res) {
    res.render('main/v4/end', {
      heading: {
        main: 'This is the end of the prototype'
      },
      nextLink: '/v4'
    })
  })

  router.get('/v4/context', function(req, res) {
    res.render('main/v4/context-page', {
      heading: {
        main: 'English Functional Skills 2 course'
      },
      nextLink: '/v4/topic/select-lesson'
    })
  })

  router.get('/v4/start-part-two', function(req, res) {
    res.render('main/v4/start-part-two', {
      heading: {
        main: 'This is the end of this part of the prototype'
      },
      nextLink: '/v4/course/completed'
    })
  })

  router.get('/v4/course/completed', function(req, res) {
    res.render('main/v4/course/completed', {
      heading: {
        sub: COURSE_NAME,
        main: 'Congratulations, you have completed the course!'
      }
    })
  })

  router.get('/v4/course/actions', function(req, res) {
    res.render('main/v4/course/actions', {
      back: {
        text: 'Return to course',
        href: `/v4/course/completed`
      },
      heading: {
        main: 'What do you need to do next?'
      },
      description:
        'You have completed a course. Now you can look for a test centre to sit an exam. Alternatively, if you don’t feel quite ready, you can continue learning by going back through the course or by downloading a practice paper.',
      help: [
        {
          title: 'Need help?',
          description:
            'We can help you book an exam and apply for jobs. Find out more about the different ways we can support you.',
          links: [
            {
              text: 'Finding a test centre',
              href: '/v4/course/find-a-centre'
            },
            {
              text: 'Getting a qualification',
              href: '#'
            },
            {
              html:
                '<span class="govuk-body-s"><a class="small-link">Use webchat </a><strong>or Call</strong> 0800 100 900</span><br /><span class="media-type-label">9am to 10pm, 7 days a week</span><br />'
            }
          ]
        }
      ]
    })
  })

  router.get('/v4/course/find-a-centre', function(req, res) {
    res.render('main/v4/course/find-a-centre', {
      back: {
        text: 'Back',
        href: `/v4/course/actions`
      },
      heading: {
        main: 'Find a test centre'
      },
      description:
        'You have completed a course. Now you can look for a test centre to sit an exam. Alternatively, if you don’t feel quite ready, you can continue learning by going back through the course or by downloading a practice paper.',
      lessonUrl: '/v4/topic/lesson/1/lesson-objective',
      help: [
        {
          title: 'Need help?',
          description:
            'We can help you book an exam and apply for jobs. Find out more about the different ways we can support you.',
          links: [
            {
              text: 'Finding a test centre',
              href: '/v4/course/find-a-centre'
            },
            {
              text: 'Getting a qualification',
              href: '#'
            },
            {
              html:
                '<span class="govuk-body-s"><a class="small-link">Use webchat </a><strong>or Call</strong> 0800 100 900</span><br /><span class="media-type-label">9am to 10pm, 7 days a week</span><br />'
            }
          ]
        }
      ]
    })
  })

  router.get('/v4/course/search-results', function(req, res) {
    res.render('main/v4/course/search-results', {
      back: {
        text: 'Back',
        href: `main/v4/course/find-a-centre`
      },
      heading: {
        main: 'Search results'
      },
      lessonUrl: '/v4/topic/lesson/1/lesson-objective',
      help: [
        {
          title: 'Need help?',
          description:
            'We can help you book an exam and apply for jobs. Find out more about the different ways we can support you.',
          links: [
            {
              text: 'Finding a test centre',
              href: '/v4/course/find-a-centre'
            },
            {
              text: 'Getting a qualification',
              href: '#'
            },
            {
              html:
                '<span class="govuk-body-s"><a class="small-link">Use webchat </a><strong>or Call</strong> 0800 100 900</span><br /><span class="media-type-label">9am to 10pm, 7 days a week</span><br />'
            }
          ]
        }
      ]
    })
  })

  router.get('/v4/topic/select-lesson', function(req, res) {
    res.render('main/v4/topic/select-lesson', {
      heading: COURSE_NAME,
      topicName: TOPIC_NAME,
      description:
        'The lessons in this section will develop your skills in multiple forms of writing. These writing skills will be useful in both your everyday and professional life.',
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
      help: [
        {
          title: 'Need help?',
          description:
            'Choose one of the options below if you need any help with the lesson.',
          links: [
            {
              text: 'View knowledge base',
              href: '#'
            },
            {
              text: 'Speak to a tutor (via email)',
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
              href: `/v4/topic/lesson/${lessonId}/start-quiz`
            }
          ]
        }
      ]
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
      lessonId,
      heading: lesson.title,
      video,
      videoNo: lesson.videos.indexOf(video) + 1,
      totalVideos: lesson.videos.length,
      actions: {
        title: 'You can also:',
        links: [
          {
            text: 'Continue with lesson',
            href: video.nextLink
          },
          {
            text: 'Change learning material',
            href: `/v4/topic/lesson/${lessonId}/select-learning-content`
          }
        ]
      },
      help: helpLinks
    })
  })

  router.get('/v4/topic/lesson/:lessonId/slideshow/:slideshowId', function(
    req,
    res
  ) {
    const lessonId = req.params.lessonId
    const lesson = lessonList.find(x => x.id === lessonId)
    if (!lesson) {
      res.redirect('/v4/topic/select-lesson')
    }

    const slideshowId = req.params.slideshowId
    const slideshow = lesson.slideshows.find(x => x.id === slideshowId)
    if (!slideshow) {
      res.redirect(`/v4/topic/lesson/${lessonId}/select-learning-content`)
    }

    res.render('main/v4/templates/slides', {
      back: {
        text: 'Back',
        href: slideshow.backLink ? slideshow.backLink : '#'
      },
      heading: lesson.title,
      slideshow,
      slideshowNo: lesson.slideshows.indexOf(slideshow) + 1,
      totalSlideshows: lesson.slideshows.length,
      actions: {
        title: 'You can also:',
        links: [
          {
            text: 'Continue with lesson',
            href: slideshow.nextLink,
            isButton: true
          },
          {
            text: 'Change learning material',
            href: `/v4/topic/lesson/${lessonId}/select-learning-content`
          }
        ]
      },
      help: helpLinks
    })
  })

  router.get('/v4/topic/lesson/:lessonId/:media/practice/:questionId', function(
    req,
    res
  ) {
    const media = req.params.media
    const lessonId = req.params.lessonId
    const lesson = lessonList.find(x => x.id === lessonId)
    if (!lesson) {
      res.redirect('/v4/topic/select-lesson')
    }

    const questionId = req.params.questionId
    const practiceQuestions =
      media === 'video'
        ? lesson.practiceVideoQuestions
        : media === 'slideshow'
        ? lesson.practiceSlideshowQuestions
        : lesson.practiceTextQuestions
    const question = practiceQuestions.find(x => x.id === questionId)
    if (!question) {
      res.redirect(`/v4/topic/lesson/${lessonId}/select-learning-content`)
    }

    const template =
      question.type === 'input'
        ? 'main/v4/templates/question-input'
        : 'main/v4/templates/question'

    res.render(template, {
      back: {
        text: `Back to ${media}`,
        href: question.backLink
      },
      heading: {
        sub: lesson.title,
        main: `Practice question ${questionId}`
      },
      description:
        question.type === 'input'
          ? 'Practice what you have been taught so far.'
          : 'Here is a quick practice question to see if you understand what you have been taught so far.',
      lessonId,
      question: {
        ...question,
        answers: shuffleArray(question.answers)
      },
      saveAnswers: false,
      // nextLink: `/v4/topic/lesson/${lessonId}/`,
      actions: {
        title: 'You can also:',
        links: [
          {
            text: 'Continue with lesson',
            href: question.nextLink,
            isButton: true
          },
          {
            text: 'Change learning material',
            href: `/v4/topic/lesson/${lessonId}/select-learning-content`
          },
          {
            text: 'Return to material',
            href: question.backLink
          }
        ]
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

    let learningContent = req.session.data['select-learning-material']
    if (learningContent === 'slideshow') {
      const slideshow = lesson.slideshows[0]
      res.redirect(`/v4/topic/lesson/${lessonId}/slideshow/${slideshow.id}`)
    } else if (learningContent === 'text') {
      res.redirect(`/v4/topic/lesson/${lessonId}/text/1`)
    } else if (learningContent === 'video') {
      const video = lesson.videos[0]
      if (!video) {
        res.redirect(`/v4/topic/lesson/${lessonId}/select-learning-content`)
      }
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
        href: `/v4/topic/lesson/${lessonId}/select-learning-content`
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
    const totalQuestions = lesson.assessmentQuestions.length

    const template =
      question.type === 'input'
        ? 'main/v4/templates/question-input'
        : 'main/v4/templates/question'

    res.render(template, {
      back: {
        text: 'Back to lesson',
        href: '#' // videoContent.backLink
      },
      heading: {
        sub: lesson.title,
        main: `Question ${questionId} (out of ${totalQuestions})`,
        html: `Question<br />(${questionNo} of ${totalQuestions})`
      },
      lessonId,
      question: {
        ...question,
        answers: shuffleArray(question.answers)
      },
      saveAnswers: true,
      actions: {
        title: 'You can also:',
        // description:
        //   'Choose one of the options below if you need any help with the lesson.',
        links: [
          {
            text: 'Continue with quiz',
            href: question.nextLink,
            isButton: true
          },
          {
            text: 'Return to lesson',
            href: question.backLink
          }
        ]
      },
      help: [
        {
          title: 'Need help?',
          description:
            'Choose one of the options below if you need any help with the lesson.',
          links: [
            {
              text: 'View knowledge base',
              href: '#'
            },
            {
              text: 'Speak to a tutor (via email)',
              href: '#'
            },
            {
              text: 'Skip this question',
              // href: question.nextLink,
              onClick: 'return v4SkipQuestion();',
              id: 'skip-link'
            }
          ]
        }
      ]
    })
  })

  router.get('/v4/topic/lesson/:lessonId/feedback', function(req, res) {
    const lessonId = req.params.lessonId
    const lesson = lessonList.find(x => x.id === lessonId)
    if (!lesson) {
      res.redirect('/v4/topic/select-lesson')
    }

    res.render('main/v4/topic/lesson/feedback', {
      back: {
        text: 'Exit lesson',
        href: '#' // videoContent.backLink
      },
      heading: {
        sub: lesson.title,
        main: 'Lesson complete'
        // html: `Question<br />(${questionNo} of 10)`
      },
      lesson,
      actions: {
        title: 'You can also:',
        links: [
          {
            text: 'Next lesson',
            href: '/v4/start-part-two',
            isButton: true
          },
          {
            text: 'Retry lesson',
            href: `/v4/topic/lesson/${lessonId}/select-learning-content`
          }
        ]
      },
      help: [helpLinks[0]]
    })
  })

  router.get('/v4/topic/lesson/:lessonId/text/1', function(req, res) {
    const lessonId = req.params.lessonId
    const lesson = lessonList.find(x => x.id === lessonId)
    if (!lesson) {
      res.redirect('/v4/topic/select-lesson')
    }

    res.render('main/v4/topic/lesson/text/1', {
      back: {
        text: 'Back',
        href: `/v4/topic/lesson/${lessonId}/select-learning-content` // videoContent.backLink
      },
      heading: {
        sub: lesson.title
      },
      nextLink: '/v4/context',
      actions: {
        title: 'You can also:',
        links: [
          {
            text: 'Continue with lesson',
            href: `/v4/topic/lesson/${lessonId}/text/practice/1`,
            isButton: true
          },
          {
            text: 'Change learning material',
            href: `/v4/topic/lesson/${lessonId}/select-learning-content`
          }
        ]
      },
      help: helpLinks
    })
  })

  router.get('/v4/topic/lesson/:lessonId/text/2', function(req, res) {
    const lessonId = req.params.lessonId
    const lesson = lessonList.find(x => x.id === lessonId)
    if (!lesson) {
      res.redirect('/v4/topic/select-lesson')
    }

    res.render('main/v4/topic/lesson/text/2', {
      back: {
        text: 'Back',
        href: `/v4/topic/lesson/${lessonId}/text/1` // videoContent.backLink
      },
      heading: {
        sub: lesson.title
      },
      nextLink: '/v4/context',
      actions: {
        title: 'You can also:',
        links: [
          {
            text: 'Continue with lesson',
            href: `/v4/topic/lesson/${lessonId}/text/practice/2`,
            isButton: true
          },
          {
            text: 'Change learning material',
            href: `/v4/topic/lesson/${lessonId}/select-learning-content`
          }
        ]
      },
      help: helpLinks
    })
  })

  router.get('/v4/topic/lesson/:lessonId/text/3', function(req, res) {
    const lessonId = req.params.lessonId
    const lesson = lessonList.find(x => x.id === lessonId)
    if (!lesson) {
      res.redirect('/v4/topic/select-lesson')
    }

    res.render('main/v4/topic/lesson/text/3', {
      back: {
        text: 'Back',
        href: `/v4/topic/lesson/${lessonId}/text/2` // videoContent.backLink
      },
      heading: {
        sub: lesson.title
      },
      nextLink: '/v4/context',
      actions: {
        title: 'You can also:',
        links: [
          {
            text: 'Continue with lesson',
            href: `/v4/topic/lesson/${lessonId}/text/practice/3`,
            isButton: true
          },
          {
            text: 'Change learning material',
            href: `/v4/topic/lesson/${lessonId}/select-learning-content`
          }
        ]
      },
      help: helpLinks
    })
  })

  return router
}

function generateRoutesv4_2(router) {
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
      url: '/v4-2/topic/lesson/lesson-objective',
      videos: [
        {
          id: '1',
          description:
            'In this video, you will learn how to start a formal email.',
          url: 'https://www.youtube.com/embed/DzjrzefdYOw',
          backLink: '/v4-2/topic/lesson/1/select-learning-content',
          nextLink: '/v4-2/topic/lesson/1/video/practice/1'
        },
        {
          id: '2',
          description:
            'In this video, you will learn how to write the main part of an email.',
          url: 'https://www.youtube.com/embed/Ckgy0yrL6VE',
          backLink: '/v4-2/topic/lesson/1/video/1',
          nextLink: '/v4-2/topic/lesson/1/video/practice/2'
        },
        {
          id: '3',
          description:
            'In this final video, you will learn how to end a formal email appropriately.',
          url: 'https://www.youtube.com/embed/kZIrEVDYPOI',
          backLink: '/v4-2/topic/lesson/1/video/2',
          nextLink: '/v4-2/topic/lesson/1/video/practice/3'
        }
      ],
      slideshows: [
        {
          id: '1',
          description:
            'In this slideshow, you will learn how to start a formal email.',
          slides: [
            '/public/images/slideshow/1/slideshow-1-slide-1.jpeg',
            '/public/images/slideshow/1/slideshow-1-slide-2.jpeg',
            '/public/images/slideshow/1/slideshow-1-slide-3.jpeg',
            '/public/images/slideshow/1/slideshow-1-slide-4.jpeg',
            '/public/images/slideshow/1/slideshow-1-slide-5.jpeg',
            '/public/images/slideshow/1/slideshow-1-slide-6.jpeg',
            // '/public/images/slideshow/1/slideshow-1-slide-7.jpeg',
            '/public/images/slideshow/1/slideshow-1-slide-8.jpeg',
            '/public/images/slideshow/1/slideshow-1-slide-9.jpeg',
            '/public/images/slideshow/1/slideshow-1-slide-10.jpeg',
            '/public/images/slideshow/1/slideshow-1-slide-11.jpeg'
          ],
          backLink: '/v4-2/topic/lesson/1/select-learning-content',
          nextLink: '/v4-2/topic/lesson/1/slideshow/practice/1'
        },
        {
          id: '2',
          description:
            'In this slideshow, you will learn how to write the main part of an email.',
          slides: [
            '/public/images/slideshow/1/slideshow-2-slide-1.jpeg',
            '/public/images/slideshow/1/slideshow-2-slide-2.jpeg'
            // '/public/images/slideshow/1/slideshow-2-slide-3.jpeg'
          ],
          backLink: '/v4-2/topic/lesson/1/slideshow/1',
          nextLink: '/v4-2/topic/lesson/1/slideshow/practice/2'
        },
        {
          id: '3',
          description:
            'In this final slideshow, you will learn how to end a formal email appropriately.',
          slides: [
            // '/public/images/slideshow/1/slideshow-3-slide-1.jpeg',
            '/public/images/slideshow/1/slideshow-3-slide-2.jpeg',
            '/public/images/slideshow/1/slideshow-3-slide-3.jpeg',
            '/public/images/slideshow/1/slideshow-3-slide-4.jpeg'
          ],
          backLink: '/v4-2/topic/lesson/1/slideshow/2',
          nextLink: '/v4-2/topic/lesson/1/slideshow/practice/3'
        }
      ],
      practiceVideoQuestions: [
        {
          id: '1',
          name: 'practice-question-one',
          type: 'multiplechoice',
          title: '',
          text: '',
          html:
            '<p>You are writing an email to apply for a job as a Construction Manager at Red Bricks Builders. The name of the person you are sending your email to is Mr Jones.</p><p><strong>Which of the following would be an appropriate way to start your email?</strong></p>',
          correctAnswerId: '1',
          answers: [
            {
              id: '1',
              value:
                'Dear Mr Jones, I am writing to apply for the Construction Manager role with Red Bricks Builders.',
              text:
                'Dear Mr Jones, I am writing to apply for the Construction Manager role with Red Bricks Builders.',
              isCorrect: true,
              feedback:
                'A formal email should use the greeting ‘Dear’ instead of an informal greeting such as ‘Hi’ or ‘Hello’. As you know the name of the person you are writing to, you can use their name instead of ‘Sir/Madam’.'
            },
            {
              id: '2',
              value:
                'Dear Sir/Madam, I am writing to apply for the Construction Manager role with Red Bricks Builders.',
              text:
                'Dear Sir/Madam, I am writing to apply for the Construction Manager role with Red Bricks Builders.',
              isCorrect: false,
              feedback:
                'The question informs you that you know the person you are sending your email to. You only use the title ‘Sir/ Madam’ when you do not know the name of the person you are sending it to.'
            },
            {
              id: '3',
              value:
                'Dear Mr Jones, I am writing because I think I am the right person for the Construction Manager role with Red Bricks Builders.',
              text:
                'Dear Mr Jones, I am writing because I think I am the right person for the Construction Manager role with Red Bricks Builders.',
              isCorrect: false,
              feedback:
                'Although your greeting is correct, your opening line is not appropriate for a formal email. You should immediately state why you are writing, for example “I am writing to apply for...” The person who receives the email will decide whether you are ‘the right person’ for the job, you should not state this.'
            },
            {
              id: '4',
              value:
                'Hi Mr Jones, I am writing to apply for the Construction Manager role with Red Bricks Builders.',
              text:
                'Hi Mr Jones, I am writing to apply for the Construction Manager role with Red Bricks Builders.',
              isCorrect: false,
              feedback:
                'Using the greeting ‘Hi’ or ‘Hello’ is too informal for a formal email. You might use this greeting in an email to a friend. You should use the greeting ‘Dear...’ when writing a formal email.'
            }
          ],
          backLink: '/v4-2/topic/lesson/1/video/1',
          nextLink: '/v4-2/topic/lesson/1/video/2'
        },
        {
          id: '2',
          name: 'practice-question-two',
          type: 'multiplechoice',
          title: '',
          text: '',
          html:
            '<p>You are writing an email to apply for a job as a Retail Assistant in a local cosmetics store called Carly’s Cosmetics.</p><p><strong>Which of the following would be best to include in your email?</strong></p>',
          correctAnswerId: '1',
          answers: [
            {
              id: '1',
              value:
                'Having been in a Junior Retail Assistant role for nearly 18 months, I have developed skills in sales and customer communication.',
              text:
                'Having been in a Junior Retail Assistant role for nearly 18 months, I have developed skills in sales and customer communication.',
              isCorrect: true,
              feedback:
                'This gives clear and relevant information outlining the skills and experience which make you eligible for the role.'
            },
            {
              id: '2',
              value:
                'I’ve been working in a cosmetics store nearby for the last 18 months and I feel like now is the ideal time to make a move.',
              text:
                'I’ve been working in a cosmetics store nearby for the last 18 months and I feel like now is the ideal time to make a move.',
              isCorrect: false,
              feedback:
                'The phrase “ideal time to make a move” is too informal for a formal email. A job application should use formal language so it sounds professional.'
            },
            {
              id: '3',
              value:
                'I believe I have the relevant experience because I currently work as a Junior Retail Assistant.',
              text:
                'I believe I have the relevant experience because I currently work as a Junior Retail Assistant.',
              isCorrect: false,
              feedback:
                'Although this answer states the experience you have, it does not go into enough detail. You need to explain how your skills have developed because of the experience you have.'
            }
          ],
          backLink: '/v4-2/topic/lesson/1/video/2',
          nextLink: '/v4-2/topic/lesson/1/video/3'
        },
        {
          id: '3',
          name: 'practice-question-three',
          type: 'input',
          title: '',
          text: '',
          html:
            '<p>You are writing an email to a local restaurant applying for a job as Front of House Manager. You need to end your email with an appropriate closing line and sign off. You <strong>do not know</strong> the name of the person you are writing to.</p><p><strong>Write the end of your email, making sure you include closing line and a sign off.  use for this email?</strong></p>',
          correctAnswerId: '1',
          answers: [],
          inputAnswers: [],
          genericFeedback: {
            html:
              '<h3 class="govuk-heading-m">Compare the end of your email to the example below:</h3><p>It would be greatly appreciated if you could take a moment to consider my CV, which is attached to this email. I look forward to hearing from you and I hope to discuss the role with you in more detail.<br /><br />Yours sincerely,<br />Paul Smith</p><hr /><h3 class="govuk-heading-m">How did you do on this question?</h3><p>Feedback: When you are writing a formal email, you should use a closing line such as ‘I look forward to hearing from you’ rather than ‘speak soon!’</p><p>When you do not know the name of the person you are writing to then you should use either of the following sign offs:</p><ul class="govuk-list govuk-list--bullet"><li>Yours sincerely</li><li>Yours faithfully</li></ul><p>If you did not give either of these answers, perhaps return to the learning content to remind yourself of this part of a formal email.</p>',
            main: ''
          },
          // correctFeedback: {
          //   html:
          //     "<p>When you do not know the name of the person you are writing to, you should use a sign off such as 'Yours sincerely' or 'Yours faithfully'</p>",
          //   main: ''
          // },
          // incorrectFeedback: {
          //   html:
          //     "<p>When you do not know the name of the person you are writing to, you should use a sign off such as 'Yours sincerely' or 'Yours faithfully'</p>",
          //   main: ''
          // },
          backLink: '/v4-2/topic/lesson/1/video/3',
          nextLink: '/v4-2/topic/lesson/1/start-quiz'
        }
      ],
      practiceSlideshowQuestions: [
        {
          id: '1',
          name: 'practice-question-one',
          type: 'multiplechoice',
          title: '',
          text: '',
          html:
            '<p>You are writing an email to apply for a job as a Construction Manager at Red Bricks Builders. The name of the person you are sending your email to is Mr Jones.</p><p><strong>Which of the following would be an appropriate way to start your email?</strong></p>',
          correctAnswerId: '1',
          answers: [
            {
              id: '1',
              value:
                'Dear Mr Jones, I am writing to apply for the Construction Manager role with Red Bricks Builders.',
              text:
                'Dear Mr Jones, I am writing to apply for the Construction Manager role with Red Bricks Builders.',
              isCorrect: true,
              feedback:
                'A formal email should use the greeting ‘Dear’ instead of an informal greeting such as ‘Hi’ or ‘Hello’. As you know the name of the person you are writing to, you can use their name instead of ‘Sir/Madam’.'
            },
            {
              id: '2',
              value:
                'Dear Sir/Madam, I am writing to apply for the Construction Manager role with Red Bricks Builders.',
              text:
                'Dear Sir/Madam, I am writing to apply for the Construction Manager role with Red Bricks Builders.',
              isCorrect: false,
              feedback:
                'The question informs you that you know the person you are sending your email to. You only use the title ‘Sir/ Madam’ when you do not know the name of the person you are sending it to.'
            },
            {
              id: '3',
              value:
                'Dear Mr Jones, I am writing because I think I am the right person for the Construction Manager role with Red Bricks Builders.',
              text:
                'Dear Mr Jones, I am writing because I think I am the right person for the Construction Manager role with Red Bricks Builders.',
              isCorrect: false,
              feedback:
                'Although your greeting is correct, your opening line is not appropriate for a formal email. You should immediately state why you are writing, for example “I am writing to apply for...” The person who receives the email will decide whether you are ‘the right person’ for the job, you should not state this.'
            },
            {
              id: '4',
              value:
                'Hi Mr Jones, I am writing to apply for the Construction Manager role with Red Bricks Builders.',
              text:
                'Hi Mr Jones, I am writing to apply for the Construction Manager role with Red Bricks Builders.',
              isCorrect: false,
              feedback:
                'Using the greeting ‘Hi’ or ‘Hello’ is too informal for a formal email. You might use this greeting in an email to a friend. You should use the greeting ‘Dear...’ when writing a formal email.'
            }
          ],
          backLink: '/v4-2/topic/lesson/1/slideshow/1',
          nextLink: '/v4-2/topic/lesson/1/slideshow/2'
        },
        {
          id: '2',
          name: 'practice-question-two',
          type: 'multiplechoice',
          title: '',
          text: '',
          html:
            '<p>You are writing an email to apply for a job as a Retail Assistant in a local cosmetics store called Carly’s Cosmetics.</p><p><strong>Which of the following would be best to include in your email?</strong></p>',
          correctAnswerId: '1',
          answers: [
            {
              id: '1',
              value:
                'Having been in a Junior Retail Assistant role for nearly 18 months, I have developed skills in sales and customer communication.',
              text:
                'Having been in a Junior Retail Assistant role for nearly 18 months, I have developed skills in sales and customer communication.',
              isCorrect: true,
              feedback:
                'This gives clear and relevant information outlining the skills and experience which make you eligible for the role.'
            },
            {
              id: '2',
              value:
                'I’ve been working in a cosmetics store nearby for the last 18 months and I feel like now is the ideal time to make a move.',
              text:
                'I’ve been working in a cosmetics store nearby for the last 18 months and I feel like now is the ideal time to make a move.',
              isCorrect: false,
              feedback:
                'The phrase “ideal time to make a move” is too informal for a formal email. A job application should use formal language so it sounds professional.'
            },
            {
              id: '3',
              value:
                'I believe I have the relevant experience because I currently work as a Junior Retail Assistant.',
              text:
                'I believe I have the relevant experience because I currently work as a Junior Retail Assistant.',
              isCorrect: false,
              feedback:
                'Although this answer states the experience you have, it does not go into enough detail. You need to explain how your skills have developed because of the experience you have.'
            }
          ],
          backLink: '/v4-2/topic/lesson/1/slideshow/2',
          nextLink: '/v4-2/topic/lesson/1/slideshow/3'
        },
        {
          id: '3',
          name: 'practice-question-three',
          type: 'input',
          title: '',
          text: '',
          html:
            '<p>You are writing an email to a local restaurant applying for a job as Front of House Manager. You need to end your email with an appropriate closing line and sign off. You <strong>do not know</strong> the name of the person you are writing to.</p><p><strong>Write the end of your email, making sure you include closing line and a sign off.  use for this email?</strong></p>',
          correctAnswerId: '1',
          answers: [],
          inputAnswers: [],
          genericFeedback: {
            html:
              '<h3 class="govuk-heading-m">Compare the end of your email to the example below:</h3><p>It would be greatly appreciated if you could take a moment to consider my CV, which is attached to this email. I look forward to hearing from you and I hope to discuss the role with you in more detail.<br /><br />Yours sincerely,<br />Paul Smith</p><hr /><h3 class="govuk-heading-m">How did you do on this question?</h3><p>Feedback: When you are writing a formal email, you should use a closing line such as ‘I look forward to hearing from you’ rather than ‘speak soon!’</p><p>When you do not know the name of the person you are writing to then you should use either of the following sign offs:</p><ul class="govuk-list govuk-list--bullet"><li>Yours sincerely</li><li>Yours faithfully</li></ul><p>If you did not give either of these answers, perhaps return to the learning content to remind yourself of this part of a formal email.</p>',
            main: ''
          },
          // correctFeedback: {
          //   html:
          //     "<p>When you do not know the name of the person you are writing to, you should use a sign off such as 'Yours sincerely' or 'Yours faithfully'</p>",
          //   main: ''
          // },
          // incorrectFeedback: {
          //   html:
          //     "<p>When you do not know the name of the person you are writing to, you should use a sign off such as 'Yours sincerely' or 'Yours faithfully'</p>",
          //   main: ''
          // },
          backLink: '/v4-2/topic/lesson/1/slideshow/3',
          nextLink: '/v4-2/topic/lesson/1/start-quiz'
        }
      ],
      practiceTextQuestions: [
        {
          id: '1',
          name: 'practice-question-one',
          type: 'multiplechoice',
          title: '',
          text: '',
          html:
            '<p>You are writing an email to apply for a job as a Construction Manager at Red Bricks Builders. The name of the person you are sending your email to is Mr Jones.</p><p><strong>Which of the following would be an appropriate way to start your email?</strong></p>',
          correctAnswerId: '1',
          answers: [
            {
              id: '1',
              value:
                'Dear Mr Jones, I am writing to apply for the Construction Manager role with Red Bricks Builders.',
              text:
                'Dear Mr Jones, I am writing to apply for the Construction Manager role with Red Bricks Builders.',
              isCorrect: true,
              feedback:
                'A formal email should use the greeting ‘Dear’ instead of an informal greeting such as ‘Hi’ or ‘Hello’. As you know the name of the person you are writing to, you can use their name instead of ‘Sir/Madam’.'
            },
            {
              id: '2',
              value:
                'Dear Sir/Madam, I am writing to apply for the Construction Manager role with Red Bricks Builders.',
              text:
                'Dear Sir/Madam, I am writing to apply for the Construction Manager role with Red Bricks Builders.',
              isCorrect: false,
              feedback:
                'The question informs you that you know the person you are sending your email to. You only use the title ‘Sir/ Madam’ when you do not know the name of the person you are sending it to.'
            },
            {
              id: '3',
              value:
                'Dear Mr Jones, I am writing because I think I am the right person for the Construction Manager role with Red Bricks Builders.',
              text:
                'Dear Mr Jones, I am writing because I think I am the right person for the Construction Manager role with Red Bricks Builders.',
              isCorrect: false,
              feedback:
                'Although your greeting is correct, your opening line is not appropriate for a formal email. You should immediately state why you are writing, for example “I am writing to apply for...” The person who receives the email will decide whether you are ‘the right person’ for the job, you should not state this.'
            },
            {
              id: '4',
              value:
                'Hi Mr Jones, I am writing to apply for the Construction Manager role with Red Bricks Builders.',
              text:
                'Hi Mr Jones, I am writing to apply for the Construction Manager role with Red Bricks Builders.',
              isCorrect: false,
              feedback:
                'Using the greeting ‘Hi’ or ‘Hello’ is too informal for a formal email. You might use this greeting in an email to a friend. You should use the greeting ‘Dear...’ when writing a formal email.'
            }
          ],
          backLink: '/v4-2/topic/lesson/1/text/1',
          nextLink: '/v4-2/topic/lesson/1/text/2'
        },
        {
          id: '2',
          name: 'practice-question-two',
          type: 'multiplechoice',
          title: '',
          text: '',
          html:
            '<p>You are writing an email to apply for a job as a Retail Assistant in a local cosmetics store called Carly’s Cosmetics.</p><p><strong>Which of the following would be best to include in your email?</strong></p>',
          correctAnswerId: '1',
          answers: [
            {
              id: '1',
              value:
                'Having been in a Junior Retail Assistant role for nearly 18 months, I have developed skills in sales and customer communication.',
              text:
                'Having been in a Junior Retail Assistant role for nearly 18 months, I have developed skills in sales and customer communication.',
              isCorrect: true,
              feedback:
                'This gives clear and relevant information outlining the skills and experience which make you eligible for the role.'
            },
            {
              id: '2',
              value:
                'I’ve been working in a cosmetics store nearby for the last 18 months and I feel like now is the ideal time to make a move.',
              text:
                'I’ve been working in a cosmetics store nearby for the last 18 months and I feel like now is the ideal time to make a move.',
              isCorrect: false,
              feedback:
                'The phrase “ideal time to make a move” is too informal for a formal email. A job application should use formal language so it sounds professional.'
            },
            {
              id: '3',
              value:
                'I believe I have the relevant experience because I currently work as a Junior Retail Assistant.',
              text:
                'I believe I have the relevant experience because I currently work as a Junior Retail Assistant.',
              isCorrect: false,
              feedback:
                'Although this answer states the experience you have, it does not go into enough detail. You need to explain how your skills have developed because of the experience you have.'
            }
          ],
          backLink: '/v4-2/topic/lesson/1/text/2',
          nextLink: '/v4-2/topic/lesson/1/text/3'
        },
        {
          id: '3',
          name: 'practice-question-three',
          type: 'input',
          title: '',
          text: '',
          html:
            '<p>You are writing an email to a local restaurant applying for a job as Front of House Manager. You need to end your email with an appropriate closing line and sign off. You <strong>do not know</strong> the name of the person you are writing to.</p><p><strong>Write the end of your email, making sure you include closing line and a sign off.  use for this email?</strong></p>',
          correctAnswerId: '1',
          answers: [],
          inputAnswers: [],
          genericFeedback: {
            html:
              '<h3 class="govuk-heading-m">Compare the end of your email to the example below:</h3><p>It would be greatly appreciated if you could take a moment to consider my CV, which is attached to this email. I look forward to hearing from you and I hope to discuss the role with you in more detail.<br /><br />Yours sincerely,<br />Paul Smith</p><hr /><h3 class="govuk-heading-m">How did you do on this question?</h3><p>Feedback: When you are writing a formal email, you should use a closing line such as ‘I look forward to hearing from you’ rather than ‘speak soon!’</p><p>When you do not know the name of the person you are writing to then you should use either of the following sign offs:</p><ul class="govuk-list govuk-list--bullet"><li>Yours sincerely</li><li>Yours faithfully</li></ul><p>If you did not give either of these answers, perhaps return to the learning content to remind yourself of this part of a formal email.</p>',
            main: ''
          },
          // correctFeedback: {
          //   html:
          //     "<p>When you do not know the name of the person you are writing to, you should use a sign off such as 'Yours sincerely' or 'Yours faithfully'</p>",
          //   main: ''
          // },
          // incorrectFeedback: {
          //   html:
          //     "<p>When you do not know the name of the person you are writing to, you should use a sign off such as 'Yours sincerely' or 'Yours faithfully'</p>",
          //   main: ''
          // },
          backLink: '/v4-2/topic/lesson/1/text/3',
          nextLink: '/v4-2/topic/lesson/1/start-quiz'
        }
      ],
      assessmentQuestions: [
        {
          id: '1',
          name: 'assessment-question-one',
          type: 'multiplechoice',
          title: '',
          text: '',
          html:
            '<p>You are writing an email to apply for a job as a Salon Assistant at a local hair salon.</p><p>You need to write a subject line to summarise the contents of your email.</p><p><strong>Which of the following would be an appropriate subject line for this email?</strong></p>',
          correctAnswerId: '1',
          answers: [
            {
              id: '1',
              value: 'Application for Salon Assistant role.',
              text: 'Application for Salon Assistant role.',
              isCorrect: true,
              feedback:
                'A formal email should include a brief subject line that clearly summarises the content of the email for the recipient.'
            },
            {
              id: '2',
              value: 'Job application.',
              text: 'Job application.',
              isCorrect: false,
              feedback:
                'The language here is too informal. In a formal email, even the subject must use formal language.'
            },
            {
              id: '3',
              value: 'I am writing to apply for the Salon Assistant role.',
              text: 'I am writing to apply for the Salon Assistant role.',
              isCorrect: false,
              feedback:
                'The subject of your email must contain only a brief summary of what the email will be about. This is too detailed. It would be more appropriate as the opening line.'
            },
            {
              id: '4',
              value: 'Dear Sir/Madam.',
              text: 'Dear Sir/Madam.',
              isCorrect: false,
              feedback:
                'The subject of an email must tell the reader what the email will be about. This would be an appropriate greeting to use at the start of a formal email.'
            }
          ],
          backLink: '#',
          nextLink: '/v4-2/topic/lesson/1/assessment/2'
        },
        {
          id: '2',
          name: 'assessment-question-two',
          type: 'multiplechoice',
          title: '',
          text: '',
          html:
            '<p>You are writing an email to apply for a job as a Sales Assistant at a local retailer. You do not know the name of the person you are sending the email to.</p><p><strong>Which of the following greetings would you use at the start of your email?</strong></p>',
          correctAnswerId: '1',
          answers: [
            {
              id: '1',
              value: 'Dear Sir/ Madam',
              text: 'Dear Sir/ Madam',
              isCorrect: true,
              feedback:
                "A formal email should begin with a greeting such as 'Dear'. When you do not know the name of ther person you are writing to, you should use the title 'Sir' or 'Madam'."
            },
            {
              id: '2',
              value: 'Hi Sir/ Madam',
              text: 'Hi Sir/ Madam',
              isCorrect: false,
              feedback:
                "The use of 'Hi' is too informal here. Remember, the purpose of this email is to apply for a job, so you should use a formal greeting such as 'Dear....'"
            },
            {
              id: '3',
              value: 'Hello,',
              text: 'Hello,',
              isCorrect: false,
              feedback:
                "The use of 'Hello' is too informal here. Remember, the purpose of this email is to apply for a job, so you should use a formal greeting such as 'Dear...'."
            },
            {
              id: '4',
              value: 'Dear Mr Jones',
              text: 'Dear Mr Jones',
              isCorrect: false,
              feedback:
                "You have not been given the name of the person you are writing you email to, so you should use the title 'Sir/Madam' instead."
            }
          ],
          backLink: '#',
          nextLink: '/v4-2/topic/lesson/1/assessment/3'
        },
        {
          id: '3',
          name: 'assessment-question-three',
          type: 'multiplechoice',
          title: '',
          text: '',
          html:
            '<p>You are asked to write an email applying for a job as a social worker at a local community centre.</p><p>After your greeting, the first line of your email should introduce your purpose for writing.</p><p><strong>Which of the following would be an appropriate first sentence to introduce your purpose for writing?</strong></p>',
          correctAnswerId: '1',
          answers: [
            {
              id: '1',
              value:
                'I am writing to apply for the role of Social Worker at Cranfield Community Centre.',
              text:
                'I am writing to apply for the role of Social Worker at Cranfield Community Centre.',
              isCorrect: true,
              feedback:
                'This opening line makes the reason for your email immediately clear. The reader learns that this is a job application for a specific role at a specific plcae of work.'
            },
            {
              id: '2',
              value: 'Do you have any jobs available at the community centre?',
              text: 'Do you have any jobs available at the community centre?',
              isCorrect: false,
              feedback:
                'This is too informal for a job application. A formal email should begin with an opening line which clearly explains your reason for writing.'
            },
            {
              id: '3',
              value: 'I am writing because I want a job as a social worker.',
              text: 'I am writing because I want a job as a social worker.',
              isCorrect: false,
              feedback:
                'The language used here is too informal. A job application is a formal piece of writing. A formal email should begin with an opening line which clearly explains your reason for writing.'
            },
            {
              id: '4',
              value:
                'I believe I have the appropraite skills to make me eligible for a role as a social worker.',
              text:
                'I believe I have the appropraite skills to make me eligible for a role as a social worker.',
              isCorrect: false,
              feedback:
                'Before giving more detail about your skills and experience, a formal email should begin with an opening line which clearly explains your reason for writing. The sentence you have selected would be good to use after your opening line.'
            }
          ],
          backLink: '#',
          nextLink: '/v4-2/topic/lesson/1/assessment/4'
        },
        {
          id: '4',
          name: 'assessment-question-four',
          type: 'multiplechoice',
          title: '',
          text: '',
          html:
            '<p>You are applying for a job as a secretary at the local gym.</p><p><strong>Which of the following would be an appropriate closing line to include in your email?</strong></p>',
          correctAnswerId: '1',
          answers: [
            {
              id: '1',
              value:
                'I have attached my CV for you to review. I look forward to hearing from you.',
              text:
                'I have attached my CV for you to review. I look forward to hearing from you.',
              isCorrect: true,
              feedback:
                "The closing line in your email should give a brief summary or 'next steps' statement, followed by a closing line such as 'I look forward to hearing from you.'"
            },
            {
              id: '2',
              value: 'I have attached my CV for you to review. Speak soon!',
              text: 'I have attached my CV for you to review. Speak soon!',
              isCorrect: false,
              feedback:
                "The phrase 'Speak soon!' is too informal for a job aplication email as you have not necessarily met the person you are writing to. It would be better to use a closing line such as 'I look forward to hearing from you'."
            },
            {
              id: '3',
              value: 'I have attached my CV. Hopefully speak to you soon!',
              text: 'I have attached my CV. Hopefully speak to you soon!',
              isCorrect: false,
              feedback:
                "The phrase 'Hopefully speak to you soon!' is too informal for a job aplication email as you have not necessarily met the person you are writing to. It would be better to use a closing line such as 'I look forward to hearing from you'."
            },
            {
              id: '4',
              value: 'Thanks for everything. ',
              text: 'Thanks for everything. ',
              isCorrect: false,
              feedback:
                'The guy have not done anything you need to thank them for yet. Therefore it would be better to use a more formal sign off.'
            }
          ],
          backLink: '#',
          nextLink: '/v4-2/topic/lesson/1/assessment/5'
        },
        {
          id: '5',
          name: 'assessment-question-five',
          type: 'input',
          title: '',
          text: '',
          html:
            '<p>You are writing an email to apply for a job at a restaurant. When you do not know the name of the person you are writing to.</p><p>Fill in the word to complete the appropriate sign off to this email.</p><p><strong>Yours __________</strong></p>',
          correctAnswerId: '1',
          answers: [],
          inputAnswers: [
            'sincerely',
            'yours sincerely',
            'yours  sincerely',
            'yours   sincerely',
            'faithfully',
            'yours faithfully',
            'yours  faithfully',
            'yours   faithfully'
          ],
          genericFeedback: {
            html:
              "<p>When you do not know the name of the person you are writing to, you should use a sign off such as 'Yours sincerely' or 'Yours faithfully'</p>",
            main: ''
          },
          correctFeedback: {
            html:
              "<p>When you do not know the name of the person you are writing to, you should use a sign off such as 'Yours sincerely' or 'Yours faithfully'</p>",
            main: ''
          },
          incorrectFeedback: {
            html:
              "<p>When you do not know the name of the person you are writing to, you should use a sign off such as 'Yours sincerely' or 'Yours faithfully'</p>",
            main: ''
          },
          backLink: '#',
          nextLink: '/v4-2/topic/lesson/1/feedback'
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
        'Choose one of the options below if you need any help with the lesson.',
      links: [
        {
          text: 'View knowledge base',
          href: '#'
        },
        {
          text: 'Speak to a tutor (via email)',
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
          href: '/v4-2/topic/lesson/1/start-quiz'
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
  router.get('/v4-2', function(req, res) {
    res.render('main/v4-2/start', {
      heading: {
        main: 'This is a prototype'
      },
      nextLink: '/v4-2/context'
    })
  })

  router.get('/v4-2/end', function(req, res) {
    res.render('main/v4-2/end', {
      heading: {
        main: 'This is the end of the prototype'
      },
      nextLink: '/v4-2'
    })
  })

  router.get('/v4-2/context', function(req, res) {
    res.render('main/v4-2/context-page', {
      heading: {
        main: 'English Functional Skills 2 course'
      },
      nextLink: '/v4-2/topic/select-lesson'
    })
  })

  router.get('/v4-2/start-part-two', function(req, res) {
    res.render('main/v4-2/start-part-two', {
      heading: {
        main: 'This is the end of this part of the prototype'
      },
      nextLink: '/v4-2/course/completed'
    })
  })

  router.get('/v4-2/course/completed', function(req, res) {
    res.render('main/v4-2/course/completed', {
      heading: {
        sub: COURSE_NAME,
        main: 'Congratulations, you have completed the course!'
      }
    })
  })

  router.get('/v4-2/course/actions', function(req, res) {
    res.render('main/v4-2/course/actions', {
      back: {
        text: 'Return to course',
        href: `/v4-2/course/completed`
      },
      heading: {
        main: 'What do you need to do next?'
      },
      description:
        'You have completed a course. Now you can look for a test centre to sit an exam. Alternatively, if you don’t feel quite ready, you can continue learning by going back through the course or by downloading a practice paper.',
      help: [
        {
          title: 'Need help?',
          description:
            'We can help you book an exam and apply for jobs. Find out more about the different ways we can support you.',
          links: [
            {
              text: 'Finding a test centre',
              href: '/v4-2/course/find-a-centre'
            },
            {
              text: 'Getting a qualification',
              href: '#'
            },
            {
              html:
                '<span class="govuk-body-s"><a class="small-link">Use webchat </a><strong>or Call</strong> 0800 100 900</span><br /><span class="media-type-label">9am to 10pm, 7 days a week</span><br />'
            }
          ]
        }
      ]
    })
  })

  router.get('/v4-2/course/find-a-centre', function(req, res) {
    res.render('main/v4-2/course/find-a-centre', {
      back: {
        text: 'Back',
        href: `/v4-2/course/actions`
      },
      heading: {
        main: 'Find a test centre'
      },
      description:
        'You have completed a course. Now you can look for a test centre to sit an exam. Alternatively, if you don’t feel quite ready, you can continue learning by going back through the course or by downloading a practice paper.',
      lessonUrl: '/v4-2/topic/lesson/1/lesson-objective',
      help: [
        {
          title: 'Need help?',
          description:
            'We can help you book an exam and apply for jobs. Find out more about the different ways we can support you.',
          links: [
            {
              text: 'Finding a test centre',
              href: '/v4-2/course/find-a-centre'
            },
            {
              text: 'Getting a qualification',
              href: '#'
            },
            {
              html:
                '<span class="govuk-body-s"><a class="small-link">Use webchat </a><strong>or Call</strong> 0800 100 900</span><br /><span class="media-type-label">9am to 10pm, 7 days a week</span><br />'
            }
          ]
        }
      ]
    })
  })

  router.get('/v4-2/course/search-results', function(req, res) {
    res.render('main/v4-2/course/search-results', {
      back: {
        text: 'Back',
        href: `main/v4-2/course/find-a-centre`
      },
      heading: {
        main: 'Search results'
      },
      lessonUrl: '/v4-2/topic/lesson/1/lesson-objective',
      help: [
        {
          title: 'Need help?',
          description:
            'We can help you book an exam and apply for jobs. Find out more about the different ways we can support you.',
          links: [
            {
              text: 'Finding a test centre',
              href: '/v4-2/course/find-a-centre'
            },
            {
              text: 'Getting a qualification',
              href: '#'
            },
            {
              html:
                '<span class="govuk-body-s"><a class="small-link">Use webchat </a><strong>or Call</strong> 0800 100 900</span><br /><span class="media-type-label">9am to 10pm, 7 days a week</span><br />'
            }
          ]
        }
      ]
    })
  })

  router.get('/v4-2/topic/select-lesson', function(req, res) {
    res.render('main/v4-2/topic/select-lesson', {
      heading: COURSE_NAME,
      topicName: TOPIC_NAME,
      description:
        'The lessons in this section will develop your skills in multiple forms of writing. These writing skills will be useful in both your everyday and professional life.',
      lessonUrl: '/v4-2/topic/lesson/1/lesson-objective'
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

  router.get('/v4-2/topic/lesson/:lessonId/lesson-objective', function(
    req,
    res
  ) {
    const lessonId = req.params.lessonId
    const lesson = lessonList.find(x => x.id === lessonId)
    if (!lesson) {
      res.redirect('/v4-2/topic/select-lesson')
    }
    res.render('main/v4-2/topic/lesson/lesson-objective', {
      back: {
        text: 'Back',
        href: '/v4-2/topic/select-lesson'
      },
      lesson
    })
  })

  router.get('/v4-2/topic/lesson/:lessonId/select-learning-content', function(
    req,
    res
  ) {
    const lessonId = req.params.lessonId
    const lesson = lessonList.find(x => x.id === lessonId)
    if (!lesson) {
      res.redirect('/v4-2/topic/select-lesson')
    }
    res.render('main/v4-2/topic/lesson/select-learning-content', {
      back: {
        text: 'Back',
        href: `/v4-2/topic/lesson/${lessonId}/lesson-objective`
      },
      lesson,
      title: 'How would you like to learn?',
      description:
        'Once you’re ready, select how you would like the lesson delivered.',
      help: [
        {
          title: 'Need help?',
          description:
            'Choose one of the options below if you need any help with the lesson.',
          links: [
            {
              text: 'View knowledge base',
              href: '#'
            },
            {
              text: 'Speak to a tutor (via email)',
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
              href: `/v4-2/topic/lesson/${lessonId}/start-quiz`
            }
          ]
        }
      ]
    })
  })

  router.get('/v4-2/topic/lesson/:lessonId/video/:videoId', function(req, res) {
    const lessonId = req.params.lessonId
    const lesson = lessonList.find(x => x.id === lessonId)
    if (!lesson) {
      res.redirect('/v4-2/topic/select-lesson')
    }

    const videoId = req.params.videoId
    const video = lesson.videos.find(x => x.id === videoId)
    if (!video) {
      res.redirect(`/v4-2/topic/lesson/${lessonId}/select-learning-content`)
    }

    res.render('main/v4-2/templates/video', {
      back: {
        text: 'Back',
        href: video.backLink
      },
      lessonId,
      heading: lesson.title,
      video,
      videoNo: lesson.videos.indexOf(video) + 1,
      totalVideos: lesson.videos.length,
      actions: {
        title: 'You can also:',
        links: [
          {
            text: 'Continue with lesson',
            href: video.nextLink
          },
          {
            text: 'Change learning material',
            href: `/v4-2/topic/lesson/${lessonId}/select-learning-content`
          }
        ]
      },
      help: helpLinks
    })
  })

  router.get('/v4-2/topic/lesson/:lessonId/slideshow/:slideshowId', function(
    req,
    res
  ) {
    const lessonId = req.params.lessonId
    const lesson = lessonList.find(x => x.id === lessonId)
    if (!lesson) {
      res.redirect('/v4-2/topic/select-lesson')
    }

    const slideshowId = req.params.slideshowId
    const slideshow = lesson.slideshows.find(x => x.id === slideshowId)
    if (!slideshow) {
      res.redirect(`/v4-2/topic/lesson/${lessonId}/select-learning-content`)
    }

    res.render('main/v4-2/templates/slides', {
      back: {
        text: 'Back',
        href: slideshow.backLink ? slideshow.backLink : '#'
      },
      heading: lesson.title,
      slideshow,
      slideshowNo: lesson.slideshows.indexOf(slideshow) + 1,
      totalSlideshows: lesson.slideshows.length,
      actions: {
        title: 'You can also:',
        links: [
          {
            text: 'Continue with lesson',
            href: slideshow.nextLink,
            isButton: true
          },
          {
            text: 'Change learning material',
            href: `/v4-2/topic/lesson/${lessonId}/select-learning-content`
          }
        ]
      },
      help: helpLinks
    })
  })

  router.get(
    '/v4-2/topic/lesson/:lessonId/:media/practice/:questionId',
    function(req, res) {
      const media = req.params.media
      const lessonId = req.params.lessonId
      const lesson = lessonList.find(x => x.id === lessonId)
      if (!lesson) {
        res.redirect('/v4-2/topic/select-lesson')
      }

      const questionId = req.params.questionId
      const practiceQuestions =
        media === 'video'
          ? lesson.practiceVideoQuestions
          : media === 'slideshow'
          ? lesson.practiceSlideshowQuestions
          : lesson.practiceTextQuestions
      const question = practiceQuestions.find(x => x.id === questionId)
      if (!question) {
        res.redirect(`/v4-2/topic/lesson/${lessonId}/select-learning-content`)
      }

      const template =
        question.type === 'input'
          ? 'main/v4-2/templates/question-input'
          : 'main/v4-2/templates/question'

      res.render(template, {
        back: {
          text: `Back to ${media}`,
          href: question.backLink
        },
        heading: {
          sub: lesson.title,
          main: `Practice question ${questionId}`
        },
        description:
          question.type === 'input'
            ? 'Practice what you have been taught so far.'
            : 'Here is a quick practice question to see if you understand what you have been taught so far.',
        lessonId,
        question: {
          ...question,
          answers: shuffleArray(question.answers)
        },
        saveAnswers: false,
        // nextLink: `/v4-2/topic/lesson/${lessonId}/`,
        actions: {
          title: 'You can also:',
          links: [
            {
              text: 'Continue with lesson',
              href: question.nextLink,
              isButton: true
            },
            {
              text: 'Change learning material',
              href: `/v4-2/topic/lesson/${lessonId}/select-learning-content`
            },
            {
              text: 'Return to material',
              href: question.backLink
            }
          ]
        },
        help: helpLinks
      })
    }
  )

  router.get('/v4-2/topic/lesson/:lessonId/learning-content', function(
    req,
    res
  ) {
    const lessonId = req.params.lessonId
    const lesson = lessonList.find(x => x.id === lessonId)
    if (!lesson) {
      res.redirect('/v4-2/topic/select-lesson')
    }

    let learningContent = req.session.data['select-learning-material']
    if (learningContent === 'slideshow') {
      const slideshow = lesson.slideshows[0]
      res.redirect(`/v4-2/topic/lesson/${lessonId}/slideshow/${slideshow.id}`)
    } else if (learningContent === 'text') {
      res.redirect(`/v4-2/topic/lesson/${lessonId}/text/1`)
    } else if (learningContent === 'video') {
      const video = lesson.videos[0]
      if (!video) {
        res.redirect(`/v4-2/topic/lesson/${lessonId}/select-learning-content`)
      }
      res.redirect(`/v4-2/topic/lesson/${lessonId}/video/${video.id}`)
    } else {
      res.redirect(`/v4-2/topic/lesson/${lessonId}/select-learning-content`)
    }
  })

  router.get('/v4-2/topic/lesson/:lessonId/start-quiz', function(req, res) {
    const lessonId = req.params.lessonId
    const lesson = lessonList.find(x => x.id === lessonId)
    if (!lesson) {
      res.redirect('/v4-2/topic/select-lesson')
    }
    res.render('main/v4-2/topic/lesson/start-quiz', {
      back: {
        text: 'Back to lesson',
        href: `/v4-2/topic/lesson/${lessonId}/select-learning-content`
      },
      heading: {
        sub: lesson.title,
        main: "Let's test your knowledge"
      },
      lesson
    })
  })

  router.get('/v4-2/topic/lesson/:lessonId/assessment/:questionId', function(
    req,
    res
  ) {
    const lessonId = req.params.lessonId
    const lesson = lessonList.find(x => x.id === lessonId)
    if (!lesson) {
      res.redirect('/v4-2/topic/select-lesson')
    }

    const questionId = req.params.questionId
    const question = lesson.assessmentQuestions.find(x => x.id === questionId)
    if (!question) {
      res.redirect(`/v4-2/topic/lesson/${lessonId}/select-learning-content`)
    }

    const questionNo = lesson.assessmentQuestions.indexOf(question) + 1
    const totalQuestions = lesson.assessmentQuestions.length

    const template =
      question.type === 'input'
        ? 'main/v4-2/templates/question-input'
        : 'main/v4-2/templates/question'

    res.render(template, {
      back: {
        text: 'Back to lesson',
        href: '#' // videoContent.backLink
      },
      heading: {
        sub: lesson.title,
        main: `Question ${questionId} (out of ${totalQuestions})`,
        html: `Question<br />(${questionNo} of ${totalQuestions})`
      },
      lessonId,
      question: {
        ...question,
        answers: shuffleArray(question.answers)
      },
      saveAnswers: true,
      actions: {
        title: 'You can also:',
        // description:
        //   'Choose one of the options below if you need any help with the lesson.',
        links: [
          {
            text: 'Continue with quiz',
            href: question.nextLink,
            isButton: true
          },
          {
            text: 'Return to lesson',
            href: question.backLink
          }
        ]
      },
      help: [
        {
          title: 'Need help?',
          description:
            'Choose one of the options below if you need any help with the lesson.',
          links: [
            {
              text: 'View knowledge base',
              href: '#'
            },
            {
              text: 'Speak to a tutor (via email)',
              href: '#'
            },
            {
              text: 'Skip this question',
              // href: question.nextLink,
              onClick: 'return v4-2SkipQuestion();',
              id: 'skip-link'
            }
          ]
        }
      ]
    })
  })

  router.get('/v4-2/topic/lesson/:lessonId/feedback', function(req, res) {
    const lessonId = req.params.lessonId
    const lesson = lessonList.find(x => x.id === lessonId)
    if (!lesson) {
      res.redirect('/v4-2/topic/select-lesson')
    }

    res.render('main/v4-2/topic/lesson/feedback', {
      back: {
        text: 'Exit lesson',
        href: '#' // videoContent.backLink
      },
      heading: {
        sub: lesson.title,
        main: 'Lesson complete'
        // html: `Question<br />(${questionNo} of 10)`
      },
      lesson,
      actions: {
        title: 'You can also:',
        links: [
          {
            text: 'Next lesson',
            href: '/v4-2/start-part-two',
            isButton: true
          },
          {
            text: 'Retry lesson',
            href: `/v4-2/topic/lesson/${lessonId}/select-learning-content`
          }
        ]
      },
      help: [helpLinks[0]]
    })
  })

  router.get('/v4-2/topic/lesson/:lessonId/text/1', function(req, res) {
    const lessonId = req.params.lessonId
    const lesson = lessonList.find(x => x.id === lessonId)
    if (!lesson) {
      res.redirect('/v4-2/topic/select-lesson')
    }

    res.render('main/v4-2/topic/lesson/text/1', {
      back: {
        text: 'Back',
        href: `/v4-2/topic/lesson/${lessonId}/select-learning-content` // videoContent.backLink
      },
      heading: {
        sub: lesson.title
      },
      nextLink: '/v4-2/context',
      actions: {
        title: 'You can also:',
        links: [
          {
            text: 'Continue with lesson',
            href: `/v4-2/topic/lesson/${lessonId}/text/practice/1`,
            isButton: true
          },
          {
            text: 'Change learning material',
            href: `/v4-2/topic/lesson/${lessonId}/select-learning-content`
          }
        ]
      },
      help: helpLinks
    })
  })

  router.get('/v4-2/topic/lesson/:lessonId/text/2', function(req, res) {
    const lessonId = req.params.lessonId
    const lesson = lessonList.find(x => x.id === lessonId)
    if (!lesson) {
      res.redirect('/v4-2/topic/select-lesson')
    }

    res.render('main/v4-2/topic/lesson/text/2', {
      back: {
        text: 'Back',
        href: `/v4-2/topic/lesson/${lessonId}/text/1` // videoContent.backLink
      },
      heading: {
        sub: lesson.title
      },
      nextLink: '/v4-2/context',
      actions: {
        title: 'You can also:',
        links: [
          {
            text: 'Continue with lesson',
            href: `/v4-2/topic/lesson/${lessonId}/text/practice/2`,
            isButton: true
          },
          {
            text: 'Change learning material',
            href: `/v4-2/topic/lesson/${lessonId}/select-learning-content`
          }
        ]
      },
      help: helpLinks
    })
  })

  router.get('/v4-2/topic/lesson/:lessonId/text/3', function(req, res) {
    const lessonId = req.params.lessonId
    const lesson = lessonList.find(x => x.id === lessonId)
    if (!lesson) {
      res.redirect('/v4-2/topic/select-lesson')
    }

    res.render('main/v4-2/topic/lesson/text/3', {
      back: {
        text: 'Back',
        href: `/v4-2/topic/lesson/${lessonId}/text/2` // videoContent.backLink
      },
      heading: {
        sub: lesson.title
      },
      nextLink: '/v4-2/context',
      actions: {
        title: 'You can also:',
        links: [
          {
            text: 'Continue with lesson',
            href: `/v4-2/topic/lesson/${lessonId}/text/practice/3`,
            isButton: true
          },
          {
            text: 'Change learning material',
            href: `/v4-2/topic/lesson/${lessonId}/select-learning-content`
          }
        ]
      },
      help: helpLinks
    })
  })

  return router
}

router = generateRoutesV4(router)
router = generateRoutesv4_2(router)

module.exports = router
