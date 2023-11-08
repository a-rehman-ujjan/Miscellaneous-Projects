def calc(a, b):
  x = input(
      "Select Operator\n1 for '+'\n2 for '-'\n3 for '*'\n4 for '/'\n>>> ")
  match x:
    case "1":
      print(f"{a} + {b} is equal to: {a+b}")
    case "2":
      print(f"{a} - {b} is equal to: {a-b}")
    case "3":
      print(f"{a} * {b} is equal to: {a*b}")
    case "4":
      print(f"{a} / {b} is equal to: {a/b}")
    case _:
      print("Something went wrong!!")


a = int(input("Enter the First Number: "))
b = int(input("Enter the Second Number: "))
calc(a, b)
