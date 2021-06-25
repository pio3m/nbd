printjson(db.people.insertOne({
     		"sex" : "Male",
     		"first_name" : "Piotr",
     		"last_name" : "Dul",
     		"job" : "Data Scientist",
     		"email" : "pio3m@wp.pl",
     		"location" : {
     			"city" : "Warsaw",
     			"address" : {
     				"streetname" : "Przy bernardyńskiej wodzie",
     				"streetnumber" : "3"
     			}
     		},
     		"description" : "brak",
     		"height" : "182",
     		"weight" : "76",
     		"birth_date" : "1983-01-02T13:34:58Z",
     		"nationality" : "Poland",
     		"credit" : [
     			{
     				"type" : "abc",
     				"number" : "1234567890",
     				"currency" : "PLN",
     				"balance" : "0.0"
     
     			}
     
     		]
     
     	})).toArray();
		