class Task:

  def __init__(self, title, description):
    self.title = title
    self.description = description
    self.completed = False

  def mark_completed(self):
    self.completed = True

  def __str__(self):
    status = "Completed" if self.completed else "Not Completed"
    return f"Title: {self.title}\nDescription: {self.description}\nDue Date: {self.due_date}\nStatus: {status}\n"


class TaskList:

  def __init__(self):
    self.tasks = []

  def add_task(self, task):
    self.tasks.append(task)

  def view_tasks(self):
    if not self.tasks:
      print("No tasks found.")
    else:
      for index, task in enumerate(self.tasks, start=1):
        print(f"Task {index}:\n{task}")

  def mark_task_completed(self, task_index):
    if 1 <= task_index <= len(self.tasks):
      self.tasks[task_index - 1].mark_completed()
      print(f"Task {task_index} marked as completed.")
    else:
      print("Invalid task index.")


# Main program
task_list = TaskList()

while True:
  print("\nTask Manager Menu:")
  print("1. Add Task")
  print("2. View Tasks")
  print("3. Mark Task as Completed")
  print("4. Exit")

  choice = input("Enter your choice (1-4): ")

  if choice == "1":
    title = input("Enter task title: ")
    description = input("Enter task discription: ")
    new_task = Task(title, description)
    task_list.add_task(new_task)
    print("Task added successfully.")

  elif choice == "2":
    task_list.view_tasks()

  elif choice == "3":
    task_list.view_tasks()
    task_index = int(
        input("Enter the number of task: "))
    task_list.mark_task_completed(task_index)

  elif choice == "4":
    print("bye")
    break

  else:
    print("enter a number from 1 to 4.")
