# Class Methods 
class Employee:
    company = "Apple"
    def show(self):
        print("My name is {self.name} and company is {self.company}")
    
    @classmethod
    def changeCompany(cls, newCompany):
        cls.company = newCompany
    
emp1 = Employee()
emp1.name = "ÄCDK"
emp1.show()
emp1.changeCompany("Tesla")
emp1.show()
print(emp1.company)