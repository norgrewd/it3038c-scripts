import win32com.client as win32
import schedule as schedule
import time

#input the email of the person you want to send the email
recipient = 'will.norgren@gmail.com'
#Input something cheesy that makes old people motivated to come to work on monday
body = 'Dont count the days, make the days count'
#input time you want to send the email (24-hour format aka military time)
send_time = '20:53'

outlook = win32.Dispatch('Outlook.Application')
mail = outlook.CreateItem(0)
mail.To = recipient
mail.Subject = 'Your Monday Motivation'
mail.Body = body

def send_email():
    mail.Send()
    print('Monday Motivation has been sent!')

schedule.every().day.at(send_time).do(send_email)

#This allows the script to be on hold until the time listed under send_time variable is the current time
while True:
    schedule.run_pending()
    time.sleep(1)
