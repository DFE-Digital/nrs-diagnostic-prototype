module.exports = {
  generateRoutesV8_ul: function generateRoutesV8_ul(router) {
    const COURSE_NAME = 'Functional Skills English Level 2'
    const TOPIC_NAME = 'different types of writing'
    const lessonList = [
      {
        id: '1',
        title: 'Emails',
        description: [
          'In this lesson you will be learning about how to write a formal email.',
          'Knowing how to write a formal email is a key skill required in many industries and in everyday life.',
          'You may already write emails, so some of the information in this lesson may be familiar to you, but some of it should also be new.'
        ],
        url: '/v8-ul/topic/lesson/lesson-objective',
        videos: [
          {
            id: '1',
            description:
              'In this video, you will learn how to start a formal email.',
            url: 'https://www.youtube.com/embed/H207-zObsPQ?rel=0',
            backLink: '/v8-ul/topic/lesson/1/select-learning-content',
            nextLink: '/v8-ul/topic/lesson/1/video/practice/1'
          },
          {
            id: '2',
            description:
              'In this video, you will learn how to write the main part of an email.',
            url: 'https://www.youtube.com/embed/AwA75t7cGeQ?rel=0',
            backLink: '/v8-ul/topic/lesson/1/video/practice/1',
            nextLink: '/v8-ul/topic/lesson/1/video/practice/2'
          },
          {
            id: '3',
            description:
              'In this final video, you will learn how to end a formal email appropriately.',
            url: 'https://www.youtube.com/embed/ZwEIs9eqUFM?rel=0',
            backLink: '/v8-ul/topic/lesson/1/video/practice/2',
            nextLink: '/v8-ul/topic/lesson/1/video/practice/3'
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
              '/public/images/slideshow/1/slideshow-1-slide-8.jpeg',
              '/public/images/slideshow/1/slideshow-1-slide-9.jpeg',
              '/public/images/slideshow/1/slideshow-1-slide-10.jpeg',
              '/public/images/slideshow/1/slideshow-1-slide-11.jpeg',
              '/public/images/slideshow/1/slideshow-1-slide-12.jpeg',
              '/public/images/slideshow/1/slideshow-1-slide-13.jpeg',
              '/public/images/slideshow/1/slideshow-1-slide-14.jpeg',
              '/public/images/slideshow/1/slideshow-1-slide-15.jpeg',
              '/public/images/slideshow/1/slideshow-1-slide-16.jpeg',
              '/public/images/slideshow/1/slideshow-1-slide-17.jpeg',
              '/public/images/slideshow/1/slideshow-1-slide-18.jpeg',
              '/public/images/slideshow/1/slideshow-1-slide-19.jpeg',
              '/public/images/slideshow/1/slideshow-1-slide-20.jpeg',
              '/public/images/slideshow/1/slideshow-1-slide-21.jpeg',
              '/public/images/slideshow/1/slideshow-1-slide-22.jpeg'
            ],
            backLink: '/v8-ul/topic/lesson/1/select-learning-content',
            nextLink: '/v8-ul/topic/lesson/1/slideshow/practice/1'
          },
          {
            id: '2',
            description:
              'In this slideshow, you will learn how to write the main part of an email.',
            slides: [
              '/public/images/slideshow/1/slideshow-2-slide-1.jpeg',
              '/public/images/slideshow/1/slideshow-2-slide-2.jpeg',
              '/public/images/slideshow/1/slideshow-2-slide-3.jpeg',
              '/public/images/slideshow/1/slideshow-2-slide-4.jpeg',
              '/public/images/slideshow/1/slideshow-2-slide-5.jpeg',
              '/public/images/slideshow/1/slideshow-2-slide-6.jpeg'
            ],
            backLink: '/v8-ul/topic/lesson/1/slideshow/practice/1',
            nextLink: '/v8-ul/topic/lesson/1/slideshow/practice/2'
          },
          {
            id: '3',
            description:
              'In this final slideshow, you will learn how to end a formal email appropriately.',
            slides: [
              '/public/images/slideshow/1/slideshow-3-slide-1.jpeg',
              '/public/images/slideshow/1/slideshow-3-slide-2.jpeg',
              '/public/images/slideshow/1/slideshow-3-slide-3.jpeg',
              '/public/images/slideshow/1/slideshow-3-slide-4.jpeg',
              '/public/images/slideshow/1/slideshow-3-slide-5.jpeg',
              '/public/images/slideshow/1/slideshow-3-slide-6.jpeg',
              '/public/images/slideshow/1/slideshow-3-slide-8.jpeg',
              '/public/images/slideshow/1/slideshow-3-slide-9.jpeg',
              '/public/images/slideshow/1/slideshow-3-slide-10.jpeg',
              '/public/images/slideshow/1/slideshow-3-slide-11.jpeg'
            ],
            backLink: '/v8-ul/topic/lesson/1/slideshow/practice/2',
            nextLink: '/v8-ul/topic/lesson/1/slideshow/practice/3'
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
              '<p>You are sending an email to Mr Jones to apply for a job as a Construction Manager at Red Bricks Builders.</p><p><strong>Which of the following would be an appropriate way to start your email?</strong></p>',
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
                  '‘Hi’ or ‘Hello’ is too informal for a formal email. You should use the greeting ‘Dear...’ when writing a formal email.'
              }
            ],
            backLink: '/v8-ul/topic/lesson/1/video/1',
            nextLink: '/v8-ul/topic/lesson/1/video/2',
            nextLinkText: 'Continue to part 2'
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
            backLink: '/v8-ul/topic/lesson/1/video/2',
            nextLink: '/v8-ul/topic/lesson/1/video/3',
            nextLinkText: 'Continue to part 3'
          },
          {
            id: '3',
            name: 'practice-question-three',
            type: 'input',
            title: '',
            text: '',
            html:
              '<p>You are writing an email to a local restaurant applying for a job as Front of House Manager. You need to end your email with an appropriate closing line and sign off. You <strong>do not know</strong> the name of the person you are writing to.</p>' +
              '<p><strong>Write the end of your email, making sure you include a closing line and a sign off.</strong></p>',
            correctAnswerId: '1',
            answers: [],
            inputAnswers: [],
            genericFeedback: {
              html:
                '<p>When you are writing a formal email, you should use a closing line such as ' +
                '‘I look forward to hearing from you’ rather than ‘speak soon!’</p>' +
                '<p>When you do not know the name of the person you are writing to then you should use either of the following sign offs:</p>' +
                '<ul class="govuk-list govuk-list--bullet"><li>Yours sincerely</li><li>Yours faithfully</li></ul>' +
                '<p>If you did not give either of these answers, perhaps return to the learning content to remind yourself of this part of a formal email.</p>',
              main: ''
            },
            backLink: '/v8-ul/topic/lesson/1/video/3',
            nextLink: '/v8-ul/topic/lesson/1/start-quiz',
            nextLinkText: 'Continue to quiz'
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
              '<p>You are sending an email to Mr Jones to apply for a job as a Construction Manager at Red Bricks Builders.</p><p><strong>Which of the following would be an appropriate way to start your email?</strong></p>',
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
                  '‘Hi’ or ‘Hello’ is too informal for a formal email. You should use the greeting ‘Dear...’ when writing a formal email.'
              }
            ],
            backLink: '/v8-ul/topic/lesson/1/slideshow/1',
            nextLink: '/v8-ul/topic/lesson/1/slideshow/2',
            nextLinkText: 'Continue to part 2'
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
            backLink: '/v8-ul/topic/lesson/1/slideshow/2',
            nextLink: '/v8-ul/topic/lesson/1/slideshow/3',
            nextLinkText: 'Continue to part 3'
          },
          {
            id: '3',
            name: 'practice-question-three',
            type: 'input',
            title: '',
            text: '',
            html:
              '<p>You are writing an email to a local restaurant applying for a job as Front of House Manager. You need to end your email with an appropriate closing line and sign off. You <strong>do not know</strong> the name of the person you are writing to.</p>' +
              '<p><strong>Write the end of your email, making sure you include a closing line and a sign off.</strong></p>',
            correctAnswerId: '1',
            answers: [],
            inputAnswers: [],
            genericFeedback: {
              html:
                '<p>When you are writing a formal email, you should use a closing line such as ' +
                '‘I look forward to hearing from you’ rather than ‘speak soon!’</p>' +
                '<p>When you do not know the name of the person you are writing to then you should use either of the following sign offs:</p>' +
                '<ul class="govuk-list govuk-list--bullet"><li>Yours sincerely</li><li>Yours faithfully</li></ul>' +
                '<p>If you did not give either of these answers, perhaps return to the learning content to remind yourself of this part of a formal email.</p>',
              main: ''
            },
            backLink: '/v8-ul/topic/lesson/1/slideshow/3',
            nextLink: '/v8-ul/topic/lesson/1/start-quiz',
            nextLinkText: 'Continue to quiz'
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
              '<p>You are sending an email to Mr Jones to apply for a job as a Construction Manager at Red Bricks Builders.</p><p><strong>Which of the following would be an appropriate way to start your email?</strong></p>',
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
                  '‘Hi’ or ‘Hello’ is too informal for a formal email. You should use the greeting ‘Dear...’ when writing a formal email.'
              }
            ],
            backLink: '/v8-ul/topic/lesson/1/text/1',
            nextLink: '/v8-ul/topic/lesson/1/text/2',
            nextLinkText: 'Continue to part 2'
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
            backLink: '/v8-ul/topic/lesson/1/text/2',
            nextLink: '/v8-ul/topic/lesson/1/text/3',
            nextLinkText: 'Continue to part 3'
          },
          {
            id: '3',
            name: 'practice-question-three',
            type: 'input',
            title: '',
            text: '',
            html:
              '<p>You are writing an email to a local restaurant applying for a job as Front of House Manager. You need to end your email with an appropriate closing line and sign off. You <strong>do not know</strong> the name of the person you are writing to.</p>' +
              '<p><strong>Write the end of your email, making sure you include a closing line and a sign off.</strong></p>',
            correctAnswerId: '1',
            answers: [],
            inputAnswers: [],
            genericFeedback: {
              html:
                '<p>When you are writing a formal email, you should use a closing line such as ' +
                '‘I look forward to hearing from you’ rather than ‘speak soon!’</p>' +
                '<p>When you do not know the name of the person you are writing to then you should use either of the following sign offs:</p>' +
                '<ul class="govuk-list govuk-list--bullet"><li>Yours sincerely</li><li>Yours faithfully</li></ul>' +
                '<p>If you did not give either of these answers, perhaps return to the learning content to remind yourself of this part of a formal email.</p>',
              main: ''
            },
            backLink: '/v8-ul/topic/lesson/1/text/3',
            nextLink: '/v8-ul/topic/lesson/1/start-quiz',
            nextLinkText: 'Continue to quiz'
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
              '<p>You are writing an email to apply for a job as a Salon Assistant at a local hair salon.</p><p>You need to write a subject line to summarise the contents of your email.</p><p><strong>Which would be an appropriate subject line for this email?</strong></p>',
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
            nextLink: '/v8-ul/topic/lesson/1/assessment/2',
            nextLinkText: 'Continue to question 2'
          },
          {
            id: '2',
            name: 'assessment-question-two',
            type: 'multiplechoice',
            title: '',
            text: '',
            html:
              '<p>You are writing an email to apply for a job as a Sales Assistant at a local retailer.</p><p>You do not know the name of the person you are sending the email to.</p><p><strong>Which greetings would you use at the start of your email?</strong></p>',
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
            nextLink: '/v8-ul/topic/lesson/1/assessment/3',
            nextLinkText: 'Continue to question 3'
          },
          {
            id: '3',
            name: 'assessment-question-three',
            type: 'multiplechoice',
            title: '',
            text: '',
            html:
              '<p>You are asked to write an email applying for a job as a social worker at a local community centre.</p>' +
              '<p>After your greeting, the first line of your email should introduce your purpose for writing.</p>' +
              '<p><strong>Which would be an appropriate first sentence to introduce your purpose for writing?</strong></p>',
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
                value:
                  'Do you have any jobs available at the community centre?',
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
                  'I believe I have the appropriate skills to make me eligible for a role as a social worker.',
                text:
                  'I believe I have the appropriate skills to make me eligible for a role as a social worker.',
                isCorrect: false,
                feedback:
                  'Before giving more detail about your skills and experience, a formal email should begin with an opening line which clearly explains your reason for writing. The sentence you have selected would be good to use after your opening line.'
              }
            ],
            backLink: '#',
            nextLink: '/v8-ul/topic/lesson/1/assessment/4',
            nextLinkText: 'Continue to question 4'
          },
          {
            id: '4',
            name: 'assessment-question-four',
            type: 'multiplechoice',
            title: '',
            text: '',
            html:
              '<p>You are applying for a job as a secretary at the local gym.</p><p><strong>Which would be an appropriate closing line to include in your email?</strong></p>',
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
            nextLink: '/v8-ul/topic/lesson/1/assessment/5',
            nextLinkText: 'Continue to question 5'
          },
          {
            id: '5',
            name: 'assessment-question-five',
            type: 'input',
            title: '',
            text: '',
            html:
              '<p>You are writing an email to apply for a job at a restaurant. You do not know the name of the person you are writing to. </p>' +
              '<p>Fill in the word to complete the appropriate sign off to this email.</p>' +
              '<p><strong>Yours __________</strong></p>',
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
            nextLink: '/v8-ul/topic/lesson/1/feedback',
            nextLinkText: 'See results'
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

    function helpLinks(path) {
      return [
        {
          title: 'Need help?',
          description: 'Choose one of the options if you need any help:',
          links: [
            {
              text: 'View learning support pages',
              href: '/v8-ul/prototype-limit/' + encodeURIComponent(path)
            },
            {
              text: 'Speak to a tutor (via email)',
              href: '/v8-ul/speak-to-tutor/' + encodeURIComponent(path)
            },
            {
              text: 'Technical support',
              href: '/v8-ul/technical-support/' + encodeURIComponent(path)
            }
          ]
        },
        {
          title: 'Feeling confident?',
          description:
            'If you’re confident, skip the lesson and go straight to the quiz',
          links: [
            {
              text: 'Skip lesson and go to quiz',
              href: '/v8-ul/topic/lesson/1/start-quiz'
            }
          ]
        }
      ]
    }

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
    router.get('/v8-ul', function(req, res) {
      res.render('main/v8-ul/start', {
        heading: {
          main: 'This is a prototype'
        },
        nextLink: '/v8-ul/prototype-context'
      })
    })

    router.get('/v8-ul/prototype-context', function(req, res) {
      res.render('main/v8-ul/prototype-context', {
        heading: {
          main: 'This is a prototype'
        },
        nextLink: '/v8-ul/step-by-step'
      })
    })

    router.get('/v8-ul/step-by-step', function(req, res) {
      res.render('main/v8-ul/step-by-step', {
        heading: {
          main:
            'Get a qualification in functional skills English level 2: step by step'
        },
        description:
          'Do this course online and in your own time to get a qualification in functional skills English level 2.',
        nextLink: '/v8-ul/context'
      })
    })

    router.get('/v8-ul/step-by-step-end', function(req, res) {
      res.render('main/v8-ul/step-by-step-end', {
        heading: {
          main:
            'Get a qualification in functional skills English level 2: step by step'
        },
        description:
          'Do this course online and in your own time to get a qualification in functional skills English level 2.',
        nextLink: '/v8-ul/context'
      })
    })

    router.get('/v8-ul/end', function(req, res) {
      res.render('main/v8-ul/end', {
        heading: {
          main: 'This is the end of the prototype'
        },
        nextLink: '/v8-ul'
      })
    })

    router.get('/v8-ul/context', function(req, res) {
      res.render('main/v8-ul/context-page', {
        heading: {
          main: 'Functional Skills English Level 2'
        },
        nextLink: '/v8-ul/topic/select-lesson'
      })
    })

    router.get('/v8-ul/start-part-two', function(req, res) {
      res.render('main/v8-ul/start-part-two', {
        heading: {
          main: "You've completed the course"
        },
        description: 'You did 60 lessons over a few months.',
        nextLink: '/v8-ul/course/completed'
      })
    })

    router.get('/v8-ul/prototype-limit/:returnUrl', function(req, res) {
      const returnUrl = req.params.returnUrl
      res.render('main/v8-ul/prototype-limit', {
        heading: {
          main: 'You have found a limit to our prototype'
        },
        description:
          'As this a prototype, certain links do not work. You can click the button below to return back to where you were.',
        nextLink: returnUrl
      })
    })

    router.get('/v8-ul/speak-to-tutor/:returnUrl', function(req, res) {
      const returnUrl = req.params.returnUrl
      res.render('main/v8-ul/speak-to-tutor', {
        heading: {
          main: 'You emailed a tutor and they got back to you a few hours later'
        },
        nextLink: returnUrl
      })
    })

    router.get('/v8-ul/technical-support/:returnUrl', function(req, res) {
      const returnUrl = req.params.returnUrl
      res.render('main/v8-ul/technical-support', {
        heading: {
          main:
            'You spoke with an IT technician who was able to help you solve your technical issue.'
        },
        nextLink: returnUrl
      })
    })

    router.get('/v8-ul/diagnostic', function(req, res) {
      const returnUrl = req.params.returnUrl
      res.render('main/v8-ul/vignette/diagnostic', {
        heading: {
          main: 'You have completed the quiz'
        },
        nextLink: '/v8-ul/step-by-step'
      })
    })

    router.get('/v8-ul/course/completed', function(req, res) {
      res.render('main/v8-ul/course/completed', {
        heading: {
          sub: COURSE_NAME,
          main: 'Congratulations, you have completed the course!'
        },
        deadLink: '/v8-ul/prototype-limit/' + encodeURIComponent(req.path)
      })
    })

    router.get('/v8-ul/course/actions', function(req, res) {
      res.render('main/v8-ul/course/actions', {
        back: {
          text: 'Return to course',
          href: `/v8-ul/course/completed`
        },
        heading: {
          main: 'What do you need to do next?'
        },
        description:
          'You have completed a course. Now you can look for a test centre to sit an exam. Alternatively, if you don’t feel quite ready, you can continue learning by going back through the course or by downloading a practice paper.',
        side: [
          {
            title: 'Need help?',
            description:
              'We can help you book an exam and apply for jobs. Find out more about how we can support you.',
            links: [
              {
                text: 'Finding a test centre',
                href: '/v8-ul/course/find-a-centre'
              },
              {
                text: 'Getting a qualification',
                href: '/v8-ul/prototype-limit/' + encodeURIComponent(req.path)
              },
              {
                html:
                  '<span class="govuk-body-s"><a class="small-link">Use webchat or email</a></span><br /><span class="media-type-label">9am to 7pm, Monday to Sunday</span><br />'
              }
            ]
          }
        ],
        deadLink: '/v8-ul/prototype-limit/' + encodeURIComponent(req.path)
      })
    })

    router.get('/v8-ul/course/find-a-centre', function(req, res) {
      res.render('main/v8-ul/course/find-a-centre', {
        back: {
          text: 'Back',
          href: `/v8-ul/course/completed`
        },
        heading: {
          main: 'Find a test centre'
        },
        // description:
        //   'You have completed a course. Now you can look for a test centre to sit an exam. Alternatively, if you don’t feel quite ready, you can continue learning by going back through the course or by downloading a practice paper.',
        lessonUrl: '/v8-ul/topic/lesson/1/lesson-objective',
        side: [
          {
            title: 'Need help?',
            description:
              'We can help you book an exam and apply for jobs. Find out more about how we can support you.',
            links: [
              {
                text: 'Finding a test centre',
                href: '/v8-ul/course/find-a-centre'
              },
              {
                text: 'Getting a qualification',
                href: '/v8-ul/prototype-limit/' + encodeURIComponent(req.path)
              },
              {
                html:
                  '<span class="govuk-body-s"><a class="small-link">Use webchat or email</a></span><br /><span class="media-type-label">9am to 7pm, Monday to Sunday</span><br />'
              }
            ]
          }
        ]
      })
    })

    router.get('/v8-ul/course/search-results', function(req, res) {
      res.render('main/v8-ul/course/search-results', {
        back: {
          text: 'Back',
          href: `main/v8-ul/course/find-a-centre`
        },
        heading: {
          main: 'Search results'
        },
        lessonUrl: '/v8-ul/topic/lesson/1/lesson-objective',
        side: [
          {
            title: 'Need help?',
            description:
              'We can help you book an exam and apply for jobs. Find out more about how we can support you.',
            links: [
              {
                text: 'Finding a test centre',
                href: '/v8-ul/course/find-a-centre'
              },
              {
                text: 'Getting a qualification',
                href: '/v8-ul/prototype-limit/' + encodeURIComponent(req.path)
              },
              {
                html:
                  '<span class="govuk-body-s"><a class="small-link">Use webchat or email</a></span><br /><span class="media-type-label">9am to 7pm, Monday to Sunday</span><br />'
              }
            ]
          }
        ]
      })
    })

    router.get('/v8-ul/topic/select-lesson', function(req, res) {
      res.render('main/v8-ul/topic/select-lesson', {
        heading: COURSE_NAME,
        topicName: TOPIC_NAME,
        description:
          'This topic contains 8 lessons which will help you develop skills in multiple types of writing. These writing skills will be useful in both your everyday and professional life.',
        lessonUrl: '/v8-ul/topic/lesson/1/lesson-objective'
      })
    })

    router.get('/v8-ul/topic/lesson/:lessonId/lesson-objective', function(
      req,
      res
    ) {
      const lessonId = req.params.lessonId
      const lesson = lessonList.find(x => x.id === lessonId)
      if (!lesson) {
        res.redirect('/v8-ul/topic/select-lesson')
      }
      res.render('main/v8-ul/topic/lesson/lesson-objective', {
        back: {
          text: 'Back',
          href: '/v8-ul/topic/select-lesson'
        },
        lesson
      })
    })

    router.get(
      '/v8-ul/topic/lesson/:lessonId/select-learning-content',
      function(req, res) {
        const lessonId = req.params.lessonId
        const lesson = lessonList.find(x => x.id === lessonId)
        if (!lesson) {
          res.redirect('/v8-ul/topic/select-lesson')
        }
        res.render('main/v8-ul/topic/lesson/select-learning-content', {
          back: {
            text: 'Back',
            href: `/v8-ul/topic/lesson/${lessonId}/lesson-objective`
          },
          lesson,
          title: 'How would you like to learn?',
          description:
            'Choose the format that’s best for you. It’s the same lesson, but presented in different formats.',
          deadLink: '/v8-ul/prototype-limit/' + encodeURIComponent(req.path),
          side: helpLinks(req.path)
        })
      }
    )

    router.get('/v8-ul/topic/lesson/:lessonId/video/:videoId', function(
      req,
      res
    ) {
      const lessonId = req.params.lessonId
      const lesson = lessonList.find(x => x.id === lessonId)
      if (!lesson) {
        res.redirect('/v8-ul/topic/select-lesson')
      }

      const videoId = req.params.videoId
      const video = lesson.videos.find(x => x.id === videoId)
      if (!video) {
        res.redirect(`/v8-ul/topic/lesson/${lessonId}/select-learning-content`)
      }

      res.render('main/v8-ul/templates/video', {
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
              href: video.nextLink,
              isButton: true
            },
            {
              // text: 'Click here to change to slideshow, article or audio',
              // href: `/v8-ul/topic/lesson/${lessonId}/select-learning-content`
              html: `<span class="govuk-body-m"><a class="small-link" href="/v8-ul/topic/lesson/${lessonId}/select-learning-content">Change to slideshow, article or audio</a></p>`
            }
          ]
        },
        side: helpLinks(req.path)
      })
    })

    router.get('/v8-ul/topic/lesson/:lessonId/slideshow/:slideshowId', function(
      req,
      res
    ) {
      const lessonId = req.params.lessonId
      const lesson = lessonList.find(x => x.id === lessonId)
      if (!lesson) {
        res.redirect('/v8-ul/topic/select-lesson')
      }

      const slideshowId = req.params.slideshowId
      const slideshow = lesson.slideshows.find(x => x.id === slideshowId)
      if (!slideshow) {
        res.redirect(`/v8-ul/topic/lesson/${lessonId}/select-learning-content`)
      }

      res.render('main/v8-ul/templates/slides', {
        back: {
          text: 'Back',
          href: slideshow.backLink
            ? slideshow.backLink
            : '/v8-ul/prototype-limit/' + encodeURIComponent(req.path)
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
              // text: 'Click here to change to video, article or audio',
              // href: `/v8-ul/topic/lesson/${lessonId}/select-learning-content`
              html: `<span class="govuk-body-m"><a class="small-link" href="/v8-ul/topic/lesson/${lessonId}/select-learning-content">Change to video, article or audio</a></p>`
            }
          ]
        },
        side: helpLinks(req.path)
      })
    })

    router.get(
      '/v8-ul/topic/lesson/:lessonId/:media/practice/:questionId',
      function(req, res) {
        const media = req.params.media
        const lessonId = req.params.lessonId
        const lesson = lessonList.find(x => x.id === lessonId)
        if (!lesson) {
          res.redirect('/v8-ul/topic/select-lesson')
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
          res.redirect(
            `/v8-ul/topic/lesson/${lessonId}/select-learning-content`
          )
        }

        const template =
          question.type === 'input'
            ? 'main/v8-ul/templates/question-input'
            : 'main/v8-ul/templates/question'

        res.render(template, {
          back: {
            text: 'Back',
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
          actions: {
            title: 'You can also:',
            links: [
              {
                text: question.nextLinkText,
                href: question.nextLink,
                isButton: true
              },
              {
                text: `Return to ${media}`,
                href: question.backLink
              }
            ]
          },
          skipAction: {
            title: 'You can also:',
            link: {
              text: `Return to ${media}`,
              href: question.backLink
              // onClick: 'return v4SkipQuestion();'
            }
          },
          side: helpLinks(req.path),
          submitButtonText: 'Check your answer',
          feedbackTitle: 'Check your answer'
        })
      }
    )

    router.get('/v8-ul/topic/lesson/:lessonId/learning-content', function(
      req,
      res
    ) {
      const lessonId = req.params.lessonId
      const lesson = lessonList.find(x => x.id === lessonId)
      if (!lesson) {
        res.redirect('/v8-ul/topic/select-lesson')
      }

      let learningContent = req.session.data['select-learning-material']
      if (learningContent === 'slideshow') {
        const slideshow = lesson.slideshows[0]
        res.redirect(
          `/v8-ul/topic/lesson/${lessonId}/slideshow/${slideshow.id}`
        )
      } else if (learningContent === 'text') {
        res.redirect(`/v8-ul/topic/lesson/${lessonId}/text/1`)
      } else if (learningContent === 'video') {
        const video = lesson.videos[0]
        if (!video) {
          res.redirect(
            `/v8-ul/topic/lesson/${lessonId}/select-learning-content`
          )
        }
        res.redirect(`/v8-ul/topic/lesson/${lessonId}/video/${video.id}`)
      } else {
        res.redirect(`/v8-ul/topic/lesson/${lessonId}/select-learning-content`)
      }
    })

    router.get('/v8-ul/topic/lesson/:lessonId/start-quiz', function(req, res) {
      const lessonId = req.params.lessonId
      const lesson = lessonList.find(x => x.id === lessonId)
      if (!lesson) {
        res.redirect('/v8-ul/topic/select-lesson')
      }
      res.render('main/v8-ul/topic/lesson/start-quiz', {
        back: {
          text: 'Back to lesson',
          href: `/v8-ul/topic/lesson/${lessonId}/select-learning-content`
        },
        heading: {
          sub: lesson.title,
          main: "Let's test your knowledge"
        },
        lesson,
        side: [
          {
            title: 'Need help?',
            description: 'Choose one of the options if you need any help:',
            links: [
              {
                text: 'View learning support pages',
                href: '/v8-ul/prototype-limit/' + encodeURIComponent(req.path)
              },
              {
                text: 'Speak to a tutor (via email)',
                href: '/v8-ul/speak-to-tutor/' + encodeURIComponent(req.path)
              }
            ]
          }
        ]
      })
    })

    router.get('/v8-ul/topic/lesson/:lessonId/assessment/:questionId', function(
      req,
      res
    ) {
      const lessonId = req.params.lessonId
      const lesson = lessonList.find(x => x.id === lessonId)
      if (!lesson) {
        res.redirect('/v8-ul/topic/select-lesson')
      }

      const questionId = req.params.questionId
      const question = lesson.assessmentQuestions.find(x => x.id === questionId)
      if (!question) {
        res.redirect(`/v8-ul/topic/lesson/${lessonId}/select-learning-content`)
      }

      const questionNo = lesson.assessmentQuestions.indexOf(question) + 1
      const totalQuestions = lesson.assessmentQuestions.length

      const template =
        question.type === 'input'
          ? 'main/v8-ul/templates/question-input'
          : 'main/v8-ul/templates/question'

      res.render(template, {
        // back: {
        //   text: 'Back to lesson',
        //   href: '/v8-ul/prototype-limit/' + encodeURIComponent(req.path)
        // },
        heading: {
          sub: lesson.title,
          main: `Question ${questionId} (out of ${totalQuestions})`,
          html: `Question (${questionNo} of ${totalQuestions})`
        },
        lessonId,
        question: {
          ...question,
          answers: shuffleArray(question.answers)
        },
        saveAnswers: true,
        actions: {
          title: 'You can also:',
          links: [
            {
              text: question.nextLinkText,
              href: question.nextLink,
              isButton: true
            }
          ]
        },
        skipAction: {
          title: 'You can also:',
          link: {
            text: 'Skip this question',
            // href: question.backLink,
            onClick: 'return v4SkipQuestion();'
          }
        },
        side: [
          {
            title: 'Need help?',
            description: 'Choose one of the options if you need any help:',
            links: [
              {
                text: 'View learning support pages',
                href: '/v8-ul/prototype-limit/' + encodeURIComponent(req.path)
              },
              {
                text: 'Speak to a tutor (via email)',
                href: '/v8-ul/speak-to-tutor/' + encodeURIComponent(req.path)
              }
              // {
              //   text: 'Skip this question',
              //   onClick: 'return v4SkipQuestion();',
              //   id: 'skip-link'
              // }
            ]
          }
        ],
        submitButtonText: 'Submit your answer',
        feedbackTitle: `Question ${questionNo} feedback`
      })
    })

    router.get('/v8-ul/topic/lesson/:lessonId/feedback', function(req, res) {
      const lessonId = req.params.lessonId
      const lesson = lessonList.find(x => x.id === lessonId)
      if (!lesson) {
        res.redirect('/v8-ul/topic/select-lesson')
      }

      res.render('main/v8-ul/topic/lesson/feedback', {
        // back: {
        //   text: 'Exit lesson',
        //   href: '/v8-ul/prototype-limit/' + encodeURIComponent(req.path)
        // },
        heading: {
          sub: lesson.title,
          main: 'You have completed the lesson'
        },
        lesson,
        sideActions: [
          {
            title: 'You can also:',
            links: [
              {
                // text: 'Retry lesson',
                // href: `/v8-ul/topic/lesson/${lessonId}/select-learning-content`,
                html: `<a class="small-link" href="/v8-ul/topic/lesson/${lessonId}/select-learning-content" onClick="return clearDataAndFollowLink();">Retry lesson</a><br/>`
              },
              {
                // text: 'Retry quiz',
                // href: `/v8-ul/topic/lesson/${lessonId}/start-quiz`,
                html: `<a class="small-link" href="/v8-ul/topic/lesson/${lessonId}/start-quiz" onClick="return clearDataAndFollowLink();">Retry quiz</a><br/>`
              }
            ]
          }
        ],
        actions: {
          title: 'You can also:',
          links: [
            {
              text: 'Next lesson',
              href: '/v8-ul/start-part-two',
              isButton: true
            },
            {
              // text: 'Retry lesson',
              // href: `/v8-ul/topic/lesson/${lessonId}/select-learning-content`,
              html: `<a class="small-link" href="/v8-ul/topic/lesson/${lessonId}/select-learning-content" onClick="return clearDataAndFollowLink();">Retry lesson</a><br/>`
            },
            {
              // text: 'Retry quiz',
              // href: `/v8-ul/topic/lesson/${lessonId}/start-quiz`,
              html: `<a class="small-link" href="/v8-ul/topic/lesson/${lessonId}/start-quiz" onClick="return clearDataAndFollowLink();">Retry quiz</a><br/>`
            }
          ]
        },
        side: [helpLinks(req.path)[0]]
      })
    })

    router.get('/v8-ul/topic/lesson/:lessonId/text/1', function(req, res) {
      const lessonId = req.params.lessonId
      const lesson = lessonList.find(x => x.id === lessonId)
      if (!lesson) {
        res.redirect('/v8-ul/topic/select-lesson')
      }

      res.render('main/v8-ul/topic/lesson/text/1', {
        back: {
          text: 'Back',
          href: `/v8-ul/topic/lesson/${lessonId}/select-learning-content`
        },
        heading: {
          sub: lesson.title
        },
        nextLink: `/v8-ul/topic/lesson/${lessonId}/text/practice/1`,
        actions: {
          title: 'You can also:',
          links: [
            {
              text: 'Continue with lesson',
              href: `/v8-ul/topic/lesson/${lessonId}/text/practice/1`,
              isButton: true
            },
            {
              html: `<span class="govuk-body-m"><a class="small-link" href="/v8-ul/topic/lesson/${lessonId}/select-learning-content">Change to slideshow, video or audio</a></p>`
            }
          ]
        },
        side: helpLinks(req.path)
      })
    })

    router.get('/v8-ul/topic/lesson/:lessonId/text/2', function(req, res) {
      const lessonId = req.params.lessonId
      const lesson = lessonList.find(x => x.id === lessonId)
      if (!lesson) {
        res.redirect('/v8-ul/topic/select-lesson')
      }

      res.render('main/v8-ul/topic/lesson/text/2', {
        back: {
          text: 'Back',
          href: `/v8-ul/topic/lesson/${lessonId}/text/practice/1`
        },
        heading: {
          sub: lesson.title
        },
        nextLink: '/v8-ul/context',
        actions: {
          title: 'You can also:',
          links: [
            {
              text: 'Continue with lesson',
              href: `/v8-ul/topic/lesson/${lessonId}/text/practice/2`,
              isButton: true
            },
            {
              html: `<span class="govuk-body-m"><a class="small-link" href="/v8-ul/topic/lesson/${lessonId}/select-learning-content">Change to slideshow, video or audio</a></p>`
            }
          ]
        },
        side: helpLinks(req.path)
      })
    })

    router.get('/v8-ul/topic/lesson/:lessonId/text/3', function(req, res) {
      const lessonId = req.params.lessonId
      const lesson = lessonList.find(x => x.id === lessonId)
      if (!lesson) {
        res.redirect('/v8-ul/topic/select-lesson')
      }

      res.render('main/v8-ul/topic/lesson/text/3', {
        back: {
          text: 'Back',
          href: `/v8-ul/topic/lesson/${lessonId}/text/practice/2`
        },
        heading: {
          sub: lesson.title
        },
        nextLink: '/v8-ul/context',
        actions: {
          title: 'You can also:',
          links: [
            {
              text: 'Continue with lesson',
              href: `/v8-ul/topic/lesson/${lessonId}/text/practice/3`,
              isButton: true
            },
            {
              html: `<span class="govuk-body-m"><a class="small-link" href="/v8-ul/topic/lesson/${lessonId}/select-learning-content">Change to slideshow, video or audio</a></p>`
            }
          ]
        },
        side: helpLinks(req.path)
      })
    })

    router.get('/v8-ul/static/step-by-step', function(req, res) {
      res.render('main/v8-ul/static/step-by-step', {
        heading: {
          main:
            'Get a qualification in functional skills English level 2: step by step'
        },
        description:
          'Do this course online and in your own time to get a qualification in functional skills English level 2.'
        // nextLink: '/v8-ul/context'
      })
    })

    router.get('/v8-ul/static/feedback', function(req, res) {
      const lessonId = '1'
      const lesson = lessonList.find(x => x.id === lessonId)
      if (!lesson) {
        res.redirect('/v8-ul/topic/select-lesson')
      }

      res.render('main/v8-ul/static/feedback', {
        // back: {
        //   text: 'Exit lesson',
        //   href: '/v8-ul/prototype-limit/' + encodeURIComponent(req.path)
        // },
        heading: {
          sub: lesson.title,
          main: 'You have completed the lesson'
        },
        lesson,
        sideActions: [
          {
            title: 'You can also:',
            links: [
              {
                // text: 'Retry lesson',
                // href: `/v8-ul/topic/lesson/${lessonId}/select-learning-content`,
                html: `<a class="small-link">Retry lesson</a><br/>`
              },
              {
                // text: 'Retry quiz',
                // href: `/v8-ul/topic/lesson/${lessonId}/start-quiz`,
                html: `<a class="small-link">Retry quiz</a><br/>`
              }
            ]
          }
        ],
        actions: {
          title: 'You can also:',
          links: [
            {
              text: 'Next lesson',
              href: '/v8-ul/start-part-two',
              isButton: true
            },
            {
              // text: 'Retry lesson',
              // href: `/v8-ul/topic/lesson/${lessonId}/select-learning-content`,
              html: `<a class="small-link" href="/v8-ul/topic/lesson/${lessonId}/select-learning-content" onClick="return clearDataAndFollowLink();">Retry lesson</a><br/>`
            },
            {
              // text: 'Retry quiz',
              // href: `/v8-ul/topic/lesson/${lessonId}/start-quiz`,
              html: `<a class="small-link" href="/v8-ul/topic/lesson/${lessonId}/start-quiz" onClick="return clearDataAndFollowLink();">Retry quiz</a><br/>`
            }
          ]
        },
        side: [
          {
            title: 'Need help?',
            description: 'Choose one of the options if you need any help:',
            links: [
              {
                text: 'View learning support pages',
                href: '#'
              },
              {
                text: 'Speak to a tutor (via email)',
                href: '#'
              },
              {
                text: 'Technical support',
                href: '#'
              }
            ]
          }
        ]
      })
    })

    router.get('/v8-ul/static/find-a-centre', function(req, res) {
      res.render('main/v8-ul/static/find-a-centre', {
        back: {
          text: 'Back',
          href: `#`
        },
        heading: {
          main: 'Find a test centre'
        },
        lessonUrl: '#',
        side: [
          {
            title: 'Need help?',
            description:
              'We can help you book an exam and apply for jobs. Find out more about how we can support you.',
            links: [
              {
                text: 'Finding a test centre',
                href: '#'
              },
              {
                text: 'Getting a qualification',
                href: '#'
              },
              {
                html:
                  '<span class="govuk-body-s"><a class="small-link">Use webchat or email</a></span><br /><span class="media-type-label">9am to 7pm, Monday to Sunday</span><br />'
              }
            ]
          }
        ]
      })
    })

    router.get('/v8-ul/static/search-results', function(req, res) {
      res.render('main/v8-ul/static/search-results', {
        back: {
          text: 'Back',
          href: `#`
        },
        heading: {
          main: 'Search results'
        },
        lessonUrl: '#',
        side: [
          {
            title: 'Need help?',
            description:
              'We can help you book an exam and apply for jobs. Find out more about how we can support you.',
            links: [
              {
                text: 'Finding a test centre',
                href: '#'
              },
              {
                text: 'Getting a qualification',
                href: '#'
              },
              {
                html:
                  '<span class="govuk-body-s"><a class="small-link">Use webchat or email</a></span><br /><span class="media-type-label">9am to 7pm, Monday to Sunday</span><br />'
              }
            ]
          }
        ]
      })
    })

    router.get('/v8-ul/static/completed', function(req, res) {
      res.render('main/v8-ul/static/completed', {
        heading: {
          sub: COURSE_NAME,
          main: 'Congratulations, you have completed the course!'
        },
        deadLink: '#'
      })
    })

    return router
  }
}
