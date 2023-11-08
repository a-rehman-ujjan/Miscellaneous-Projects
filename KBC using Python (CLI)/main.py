Questions = [
    ["What is the Capital of France? ", "Paris", "London", "Berlin", "Rome",1],
    ["Which planet is known as the 'Red Planet'?", "Earth", "Mars", "Jupiter", "Saturn", 2],
    ["What is the primary language spoken in Brazil? ", "Spanish", "Portuguese", "French", "Italian", 2],
    ["How many continents are there in the world? ", "6", "5", "7", "9", 3],
    ["What is the color of an emerald? ", "Blue", "Yellow", "Red", "Green", 4],
    ["What is the chemical symbol for gold? ", "Go", "Au", "Ag", "Gr", 2],
    ["What is the largest organ in the human body? ", "Liver", "Brain", "Skin", "Heart", 3],
    ["What is the process of a caterpillar turning into a butterfly called? ", "Metamorphosis", "Reproduction", "Digestion", "Evolution", 1],
    ["Which country is known as the Land of the Rising Sun? ", "China", "India", "Japan", "South Korea", 3],
    ["What is the largest desert in the world? ", "Sahara Desert", "Gobi Desert", "Arabian Desert", "Kalahari Desert", 1],
    ["Which of the following is an economic system where the means of production are privately owned and operated for profit? ", "Socialism", "Communism", "Mercantilism", "Capitalism", 4],
    ["What does the abbreviation 'IPO' stand for in the financial world? ", "Initial Public Offering", "International Purchasing Order", "Investment Portfolio Optimization", "Interest Payment Obligation", 1],
    ["What is the name for a tax that takes a larger percentage of income from high-income earners than from low-income earners? ", "Flat tax", "Regressive tax", "Progressive tax", "Excise tax", 3],
    ["What is the largest ocean on Earth? ", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean", 4],
    ["What does the term 'Trilateral' refer to in international relations? ", "A three-way trade agreement", "An alliance of three countries", "A geopolitical cooperation forum", "A type of military coalition", 3]
]
price = [0, 1000, 2000, 3000, 5000, 10000, 20000, 40000, 80000, 160000, 320000, 640000, 1250000, 2500000, 5000000, 10000000]

def kbcquestion(Questions, price):
  i = 0
  wprice = price[0]
  for Q in Questions:
    print(Q[0])
    print("1. ", Q[1])
    print("2. ", Q[2])
    print("3. ", Q[3])
    print("4. ", Q[4])
    answer = 0
    while True:
      try:
        answer = int(input("Enter your answer (1-4) or 0 to Quit: "))
        if (answer in range(0, 5)):
          break
        else:
          print(
              "Invalid input. Please enter a number between 1 and 4, or 0 to Quit"
          )
      except ValueError:
        print("Invalid input. Please enter a number between 1 and 4.")
    if (answer == Q[5]):
      i = i + 1
      wprice = price[i]
      if (wprice == 10000000):
        print(
            f"Congratulations! You have won the game! Your prize is {wprice} Rupees."
        )
        break
      else:
        print(f"\nCorrect, you've won Rs. {wprice}/-\n")
    elif (answer == 0):
      print(
          f"\nThanks for playing! You've won Rs. {wprice}/-\n\nPayment Method: Pixels on the screen:)"
      )
      break
    elif (answer != Q[5]):
      wprice = price[i]
      if (wprice > 10000 and wprice <= 320000):
        wprice = 10000
      elif (wprice > 320000):
        wprice = 320000
      else:
        wprice = 0
      print(f"\nIncorrect, You're going home with Rs. {wprice}/-\n")
      break


kbcquestion(Questions, price)
