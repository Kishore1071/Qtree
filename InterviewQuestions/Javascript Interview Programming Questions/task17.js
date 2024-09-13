let container = "{}()<>[]["

const StringValidator = (container) => {
        
        let n = 0

        let test = true

        while (n < container.length) {
            console.log(n)

            console.log(container[n], container[n + 1])
            
            if (container[n] === "{" && container[n + 1] === "}") n = n + 2 
            else if (container[n] === "(" && container[n + 1] === ")") n = n + 2
            else if (container[n] === "<" && container[n + 1] === ">") n = n + 2
            else if (container[n] === "[" && container[n + 1] === "]") n = n + 2
            else {
                test =  false
                break
            }
        }

        return test ? "Valid String": "Invalid String"
}

const result = StringValidator(container)

console.log(result)
