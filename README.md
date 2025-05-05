# Lab 5 - Starter
### [SELF NOTE] REMEMBER TO REMOVE ExecutionPolicy on PowerShell when done with this lab:
```Set-ExecutionPolicy -ExecutionPolicy Undefined -Scope CurrentUser ```

1) Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.
I would do so because that is the main feature of this website. Therefore it needs to be tested seperately. Such as string length, empty string, does it work with emojis, do we need to include language filters, etc. 
But at the same time, I need to test end-to-end features such as: varies network condition, security and hacking, message encryption, notifications, etc. are requiring end-to-end testing.

2) Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.
Yes, on a local machine it's very easy to verify max string length. Assuming the messsage feature works expected on end-to-end testing, then I would confidently test max string length on a local machine and easily verify if it exceeds 80 chars or not. 