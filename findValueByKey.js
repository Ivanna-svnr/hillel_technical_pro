const company = {
    name: 'Велика Компанія',
    type:'Головна компанія',
    platform: 'Платформа для продажу квитків',
    sellsSolution: 'Рішення для продажу квитків',
    clients: [
        {
            name: 'Клієнт 1',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків',
            partners: [
                {
                    name: 'Клієнт 1.1',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                },
                {
                    name: 'Клієнт 1.2',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                    partners: [
                        {
                            name: 'Клієнт 1.2.3',
                            type: 'subSubCompany',
                            uses: 'Рішення для продажу квитків',
                            sells: 'Рішення для продажу квитків',
                        }
                    ]
                }
            ]
        },
        {
            name: 'Клієнт 2',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків'
        }
    ]
};

function findValueByKey(companyName, node) {
    if (node.name === companyName) {
        return node;
    }
    if (node.clients && node.clients.length > 0) {
        for (var i = 0; i < node.clients.length; i++) {
            const result = findValueByKey(companyName, node.clients[i]);
            if (result) {
                console.log(result); 
            }
        }
    }
    if (node.partners && node.partners.length > 0) {
        for (let i = 0; i < node.partners.length; i++) {
            const result = findValueByKey(companyName, node.partners[i]);
            if (result) {
                console.log(result); 
            }
        }
    }
    
    return null;
}
findValueByKey('Клієнт 1.2.3', company);
