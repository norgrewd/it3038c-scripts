from bs4 import BeautifulSoup
import requests, re

url = "https://www.microcenter.com/product/663223/amd-radeon-rx-6950-xt-triple-fan-16gb-gddr6-pcie-40-graphics-card"
response = requests.get(url, headers={'User-Agent': 'Mozilla/5.0'})
content = response.text
soup = BeautifulSoup(content, "html.parser")

Price = soup.find("span", id="pricing")
print(Price)

title = soup.find("span", class_="mfg col-auto")
print(title)

print("Item %s has price %s" % (title, Price))
