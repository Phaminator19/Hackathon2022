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
      'Content-Type': 'application/json'
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
