class PersonalDetails:

    def __init__(self, name, age, height, weight, year = None):

        self.name = name
        self.age = age
        self.height = height
        self.weight = weight

    def getName(self):

        return f"My name is {self.name}"
    
    def userName(self):

        return self.name + str(self.age)
    
    def setAge(self, new_age):

        self.age = new_age

        return self.age
    
    def Details(self):

        details = {
            "name": self.name
        }

        return details
    
        
person1 = PersonalDetails("Student1", 20, "170cm", 60.5)









    

