import sys
import os
CMD_ARGS = sys.argv

CHARACTERS_MAP = {
    "{":"}",
    "(":")",
    "[":"]",
    "'":"'",
    '"':'"',
    "}":"{",
    ")":"(",
    "]":"["
}

filename = None
if len(CMD_ARGS)>1:
    filename = CMD_ARGS[-1]
    try:
        file = open(filename,"rb")
        file.close()
    except FileNotFoundError:
        print(f"File {filename} not found!")
        filename = None

def getCharactersFromFile(filename):
    data = ""
    try:
        with open(filename,"r") as file:
            data = file.read()
    except Exception as e:
        print(f"Ehile reading file Got exception: {e}")
        return None
    chars = [char for char in data if char in CHARACTERS_MAP]
    return chars


def check(characters:str):
    stack = []
    for char in characters:
        negative = CHARACTERS_MAP[char]
        if len(stack) != 0 and stack[-1]==negative:
            stack.pop()
        else:
            stack.append(char)
    return len(stack)==0



while True:
    if not filename:
        # os.system("cls")
        while True:
            try:
                filename = input("Enter the file to check: ")
                file = open(filename,"rb")
                file.close()
                break
            except FileNotFoundError:
                print(f"{filename}  File Not Found! Try Again.\n")
    print(f"Checking file: {filename}")
    characters = getCharactersFromFile(filename)
    if characters:
        valid = check(characters)
        if valid:
            print("No error")
        else:
            print("Error")
    filename = None

    


            
