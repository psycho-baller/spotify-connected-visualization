from time import sleep
from selenium import webdriver
import warnings

# from selenium.webdriver.chrome.options import 
from selenium.webdriver.chrome.service import Service as BraveService
from webdriver_manager.chrome import ChromeDriverManager
from webdriver_manager.core.utils import ChromeType
from selenium.webdriver.common.by import By

options = webdriver.ChromeOptions()
# options.add_argument("--headless") # for suppressing the browser
# options.binary_location = '/Applications/Brave\ Browser.app' #'/Applications/Brave\ Browser.app/Contents/MacOS/Brave\ Browser'
options.binary_location = '/Applications/Brave Browser.app/Contents/MacOS/Brave Browser'

with warnings.catch_warnings():
    warnings.simplefilter('ignore')
    driver = webdriver.Chrome(service=BraveService(ChromeDriverManager(chrome_type=ChromeType.BRAVE).install()), options=options)

username = 'psycho.baller'
password = '1DW_yrASS'

message = 'Hey, how are you doing? I hope you\'re having a great day!'

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
  'rundle.floor3',
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

# driver.implicitly_wait(10)
# driver.find_element('xpath','//button[@type="submit"]').click()

# Wait for the page to load
# driver.implicitly_wait(10)

# Go to your direct messages
driver.get('https://www.instagram.com/direct/inbox/')
# driver.implicitly_wait(10)

driver.find_element(By.CLASS_NAME,'_a9_1').click()

# Iterate through your friends list and send each of them the message
for friend in friends:
  message = f'Hey {friend}, how are you doing? I hope you\'re having a great day!'
  driver.get('https://www.instagram.com/direct/inbox/')
#   driver.implicitly_wait(10)
  # Click on the "New Message" button
#   driver.find_element('xpath','//button[text()="New Message"]').click()
  driver.find_element(By.CLASS_NAME,'_abl-').click()

  # Wait for the "Send To" field to appear
#   driver.implicitly_wait(10)

  # Type your friend's username into the "Send To" field
  driver.find_element('xpath','//input[@placeholder="Search..."]').send_keys(friend)
#   driver.implicitly_wait(10)
  # Click on your friend's username in the dropdown menu
  driver.find_element('xpath','//div[text()="{}"]'.format(friend)).click()
  
#   driver.implicitly_wait(10)
#   sleep(3)
  
  driver.find_element(By.CLASS_NAME,'_aagz').click()
  

#   driver.implicitly_wait(10)

  # Type your message into the "Type a message..." field
  driver.find_element('xpath','//textarea[@placeholder="Message..."]').send_keys(message)
  
#   driver.implicitly_wait(10)

  # Click the "Send" button
  driver.find_element('xpath','//button[text()="Send"]').click()
  
  
# Close the browser
# sleep(10)
driver.quit()
