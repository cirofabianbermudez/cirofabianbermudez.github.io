import yaml 

if __name__ == '__main__':
    yml_file = "example.yaml"
    with open(yml_file, 'r') as archivo:
        dictionary = yaml.safe_load(archivo)
        
    print(dictionary)
    
    for key, value in dictionary.items():
        print (key + " : " + str(value))