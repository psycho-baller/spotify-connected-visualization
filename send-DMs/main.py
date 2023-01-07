from time import sleep
import warnings

from selenium import webdriver
from selenium.webdriver.chrome.service import Service as BraveService
from selenium.webdriver.common.by import By
from webdriver_manager.chrome import ChromeDriverManager
from webdriver_manager.core.utils import ChromeType

options = webdriver.ChromeOptions()
options.binary_location = '/Applications/Brave Browser.app/Contents/MacOS/Brave Browser'

with warnings.catch_warnings():
    warnings.simplefilter('ignore')
    driver = webdriver.Chrome(service=BraveService(ChromeDriverManager(chrome_type=ChromeType.BRAVE).install()), options=options)

username = 'psycho.baller'
password = '1DW_yrASS'

long_message = '''
Back in mid-2022, I had this idea of building a website where I can showcase my "songs of the week" and the people each song remind me of. You are receiving this message because you are in at least one song, there is a search functionality in the website where you can look up your insta USERNAME so you can jump to your name and song. Let me know if you have any further ideas or suggestions for the website. I do plan on building a web app where you can easily build your own version of this, let me now if you would acc be interested in that. I wanna see if I should prioritize that or not. Lastly, thank you for being a part of my 2022, and specifically, part of my songs of the week. I hope you have a wonderful 2023.
website: https://spotifyconnected.vercel.app/ (I recommend opening it w yr laptop or desktop but it works on mobile too)
'''

friends = [  'keana.gigliotti',
  'danamaalouf',
  '_ab.i__',
  'jujeedee_',
  'youssefxclusive',
  '_gracemccue',
  'cindy.art',
  'sanjith.pp',
  'liam_abid_hill',
  'frazerw_77',
  'itsprobablyzidaan',
  'naheenkabir',
  'alysonjonesss',
  'theonlylazyshariq',
  'haleychuch',
  'devan.minard',
  'joeymtuttle',
  '_jackvw_',
  'wilbur_elb',
  'n.angela1414',
  'gomez_kris7',
  'claudia_lee03',
  'ante9a',
  'haroontanveer01',
  'aileenmulaw',
  'nicholas_bonato',
  'noureddinenakib',
  'mohd_ere',
  'laaadlgd',
  'rxalawie',
  'tiyaalmurr',
  'm_abuali_s',
  'duppy_03',
  'osama.w.b',
  'pineberry_pizza',
  'katiahalasah',
  'caitlyngreenwayy',
  'morss1204',
  'jo_anjo_an_nn',
  '_.moizs'
  ]
# sleep(20)

# Go to Instagram's login page
driver.get('https://www.instagram.com/accounts/login/')

# Wait for the page to load
driver.implicitly_wait(10)

# Enter your username and password and log in
driver.find_element('name', 'username').send_keys(username)
driver.find_element('name', 'password').send_keys(password)

# Wait for the page to load
sleep(5)

# instagram doesn't allow this, so we have to manually click the login button
# driver.find_element('xpath','//button[@type="submit"]').click()


# Go to your direct messages
driver.get('https://www.instagram.com/direct/inbox/')

driver.find_element(By.CLASS_NAME,'_a9_1').click()

# Iterate through your friends list and send each of them the message
for friend in friends:
  message = f'Hey {friend}, {long_message}'
  driver.get('https://www.instagram.com/direct/inbox/')

  # Click on the "New Message" button
  # driver.find_element('xpath','//button[text()="New Message"]').click()
  driver.find_element(By.CLASS_NAME,'_abl-').click()

  # Wait for the "Send To" field to appear

  # Type your friend's username into the "Search..." field
  driver.find_element('xpath','//input[@placeholder="Search..."]').send_keys(friend)
  # Click on your friend's username in the dropdown menu
  driver.find_element('xpath','//div[text()="{}"]'.format(friend)).click()
  
  driver.find_element(By.CLASS_NAME,'_aagz').click()

  # Type your message into the "Message..." field
  driver.find_element('xpath','//textarea[@placeholder="Message..."]').send_keys(message)
  
  # Click the "Send" button
  driver.find_element('xpath','//button[text()="Send"]').click()
  
  
# Close the browser
driver.quit()
