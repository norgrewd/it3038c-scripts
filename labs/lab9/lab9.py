import requests

url = 'http://localhost:3000'
response = requests.get(url)


if response.status_code == 200:
    widgets = response.json()
    for widget in widgets:
        print(f"{widget['name']} - {widget['color']}")
