# Instance variable and class Variable 
class Employee:
    def __init__(self, name) -> None:
        self.name = name
        self.raise_value = 0.5
    def showDetail(self):
        print(f"The name of the employee is: {self.name} and riase number is {self.raise_value}")

emp1 = Employee("Rahul")
emp1.showDetail()
# Employee.showDetail(emp1)