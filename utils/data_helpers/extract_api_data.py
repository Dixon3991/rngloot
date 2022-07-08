import requests
import json

def get_data(endpoint_name='/api/equipment', baseURL='https://www.dnd5eapi.co'):
    equipment_index = requests.get(baseURL+endpoint_name)
    data = equipment_index.json()
    return data


def save_item_names(all_fields=False, itemname=''):
    api_endpoints = []
    
    if itemname != '':
        endpoint_data = get_data(endpoint_name=itemname)
    else:
        endpoint_data = get_data()
    
    endpoint_url = endpoint_data["results"]
    
    for endpoint in endpoint_url:
        if all_fields == True:
            api_endpoints.append(endpoint)
        else:
            api_endpoints.append(endpoint["url"])
            
    return api_endpoints

def write_data_file(equipment_data, filename='equipment_items.json'):
    with open(filename, "w") as dnd_data:
        try:
            dnd_data.write(json.dumps(equipment_data))
        except:
            text_contents = str(equipment_data.contents)
            text_data = json.dumps(text_contents)
            dnd_data.write(text_data)
        
        
        
        print("done")
        dnd_data.close()

def write_individual_endpoints(all_endpoints):
    all_data = []
    for each in all_endpoints:
        each = get_data(endpoint_name=each)
        all_data.append(each)
        
        
    write_data_file(all_data)
    print("Success!")
        
        
all_items = save_item_names()
write_individual_endpoints(all_endpoints=all_items)
