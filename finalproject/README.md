For my final project, I created a python script to send motivational messages to the people in my office on Monday morning to encourage them going into the new week. 

The script includes 3 different python plug ins for it to run. 

The plug ins include:
•	Win32 - module to allow python to interface with outlook.
•	Schedule – module to allow you to schedule an output.
•	Time – module that I used to set the send time of the output.

The way that the script works is by importing the 3 modules into the script
```
import win32com.client as win32
import schedule as schedule
import time
```


Once you import the modules, you need to change the recipient email for the person or distribution list you want to 
send the emails to as well as change the body of the email to match the message you want to send for the week. 
Once you change the variables for the recipient and body, you need to set the time you want to send the message.

```
#input the email of the person you want to send the email
recipient = 'will.norgren@gmail.com'
#Input something cheesy that makes old people motivated to come to work on monday
body = 'Dont count the days, make the days count'
#input time you want to send the email (24-hour format aka military time)
send_time = '20:53'
```
Once all of the editable fields are changed to your liking, there are some lines that need to be declared in order to interface with the win32 plug in. 

```
outlook = win32.Dispatch('Outlook.Application')
mail = outlook.CreateItem(0)
mail.To = recipient
mail.Subject = 'Your Monday Motivation'
mail.Body = body
```

After you add the variable for interfacing with the win32 plug in, you need to add the function for sending the message at 
the declared time as well as printing that the message has been sent.

```
def send_email():
    mail.Send()
    print('Monday Motivation has been sent!')
```

Where the schedule plug in comes in is towards the end of the script. 

```
schedule.every().day.at(send_time).do(send_email)
```

The final lines of the script are for delaying the python script for when the specified time for the message to send. 

```
#This allows the script to be on hold until the time listed under send_time variable is the current time
while True:
    schedule.run_pending()
    time.sleep(1)
```

If everything with the script works, the output email will look like:



![Screenshot 2023-04-09 205830](https://user-images.githubusercontent.com/58406953/230807287-19f3423a-2303-4a57-814f-521e7e523a09.png)

    
