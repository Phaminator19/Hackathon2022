import { registerRootComponent } from 'expo';


import App from './App';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);

const options = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: 'Bearer eyJraWQiOiJ4ZFFwRkoxVDRRWnJMWXJYVHR4VVA5SVUxMGh3M240K0FTS1hWcWxaZkNJPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiJjMmI4ZjJhOS05N2QyLTQ2YWYtYTlhOC0yOWU2ZGQxZmFhMjgiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtZWFzdC0xLmFtYXpvbmF3cy5jb21cL3VzLWVhc3QtMV9Bd2ZOUzA4bHMiLCJjbGllbnRfaWQiOiI2MXJrM3JhOW9sbjJhMDhlMm9oNG12dnE3ayIsIm9yaWdpbl9qdGkiOiI2NWUxOTY2Yi0yYzk2LTRkN2MtYjIxNi02MzM5ZmQxNTEyYzYiLCJldmVudF9pZCI6ImNhYjU2NmUwLWQ4OGYtNDY3NS04ZmE0LTZjZjU4NzNhYzg1NiIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE2NTIwMTE0NDgsImV4cCI6MTY1MjA1NDY0NywiaWF0IjoxNjUyMDExNDQ4LCJqdGkiOiIxNjU5YjE5NS05NDIyLTRhMWQtYWM1My0yOGFiYTA2YjdhNzciLCJ1c2VybmFtZSI6IjAycXlneWlpcXh1Y2psamIzYiJ9.GqcViIs8nYdXxbtHeW7BRvu5SGV9VDicu85UcD5l6iukHS7GzK2PjKqbzBCUspFmWbTMQO-AgNVnZ1-y7POOYzEJAiOkEws_Cuwx6D5GFKZGYbsKCwP_lXM0TYY4ywXdFgQwpxEDeNB1V9Cr6Hb2SjVpaGUZDFmfCOqDiFshA4B5KRe5Rym3EbY1FcYxFC6Nvb7DYwLvyMwcdVvWieTm1YKMl5oGf9XrYlnI_d0_flsRv1xb6NagI7ojgJCnZGf-xaO-FPM_Z19F3ta2ICSA7TYufbandDrJBn7tZ7T4FRlBs-h2LpE7BqciNUXN5nMtp3jQkyYcIMv52x-GRfoDWA'
    },
    body: JSON.stringify({
      companyName: 'ruhacks',
      description: 'It’s a platform for people to ask question or to be advised, where people personal information are protected. There is no need to create account to use our app. We mainly focus on fast approach and convenient for our users, so as soon as you go to our app, the first thing you see is a box where you can straight up post anything you want to talk about. If one day you don’t feel like to talk with someone, we have the option for you on the feed page where you can see what other people post and comment',
      name: 'QandA',
      customAttributes: {
        Question: 'New Value',
        timeStamp: 'New Value',
        questionPostID: 'New Value',
        commentsID: 'New Value'
      },
      qrCodes: [
        {
          dynamicRedirectType: 'SCAN_ID_IN_PATH_PARAMETER',
          intent: 'aznhacks2022.tech/questionPostID',
          intentType: 'DYNAMIC_REDIRECT_TO_APP',
          locatorKeyType: 'SHORT_URL'
        }
      ],
      name: 'QuestionPost'
    })
  };
  
  fetch('https://kbdgsb6g57.execute-api.us-east-1.amazonaws.com/prod/accounts/PR6744KW5579HT/projects', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));