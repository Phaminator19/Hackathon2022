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
    Authorization: 'Bearer eyJraWQiOiJ4ZFFwRkoxVDRRWnJMWXJYVHR4VVA5SVUxMGh3M240K0FTS1hWcWxaZkNJPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiJjMmI4ZjJhOS05N2QyLTQ2YWYtYTlhOC0yOWU2ZGQxZmFhMjgiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtZWFzdC0xLmFtYXpvbmF3cy5jb21cL3VzLWVhc3QtMV9Bd2ZOUzA4bHMiLCJjbGllbnRfaWQiOiI2MXJrM3JhOW9sbjJhMDhlMm9oNG12dnE3ayIsIm9yaWdpbl9qdGkiOiI3ZWU2NDQ1My05NTQ5LTQwNTktOGM1Mi1jOTQ1NGY1YjIzNGUiLCJldmVudF9pZCI6IjlmNDUwN2I3LTAyOTQtNDYzMS1hMjFiLTcyMDcxMTA4NzkwMyIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE2NTE5Nzk5MjIsImV4cCI6MTY1MjAyMzEyMiwiaWF0IjoxNjUxOTc5OTIyLCJqdGkiOiJkODJkODM5Zi0yZGE5LTRiYjAtOGM4ZS0zYzYyZmZjMWJmYjMiLCJ1c2VybmFtZSI6IjAycXlneWlpcXh1Y2psamIzYiJ9.Ryl9PIel4VHFnVQmhGk4FU-flgNLjnnxhRdXGpQQ5MmFI4XbFdX9-Z6iNwT-W-nHYOs4VuAeRmI7qVAwjt6rfiFlX0LTc7ovtEpSDoEK32Zc6vxPHS0d96e_IiyzlK0FfLj4jEDN2g-Z3vSVaE7gg6tJdCd9QAmQ2xb2_nb0HkMLYPEnXt4f-XNvOZ0y64-r_01rPG5aw0QBhdU3ul-gkagt8L_7jjmEi-Dm1EwmFhR6gzjEKXzPBKZG4Ydiewi7kzRl4YjIdWUJAYpG637FlTUK-mzv3t0bDfmo5artUj44Nzffk7IKg5eDEMJ7VnkDOM980d1HWMqo931tKbKcrw'
  },
  
  body: JSON.stringify({
    companyName: 'ruhacks',
    name: 'QandA',
    description: 'It\'s a question and answer app that there is no need for a user login and anyone will be annonymous.'
  })
};

fetch('https://kbdgsb6g57.execute-api.us-east-1.amazonaws.com/prod/accounts/PR6744KW5579HT/projects', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));