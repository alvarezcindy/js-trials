// ///////////////////////////////////////////////////////
// PART 1
// Account information:

let accountHolder = "Balloonicorn";
const accountNumber = "123456";
let businessName = "Balloonicorn's Cupcake Shop";

const addresses = ["123 Main Street", "683 Sutter Street", "1600 Pennsylvania Ave"];

const phoneNumbers = new Map([['home', '510-867-5309'], 
							 ['mobile', '415-555-1212'], 
							 ['business', '415-123-4567']]);

// Add some phone numbers to our map

const accountTransactions = new Map();



// ///////////////////////////////////////////////////////
// Create User Info Display:

// Add function to print account information 

function printAccountInfo(accountHolder, accountNumber, businessName) {
	console.log('Account Holder Name: ', accountHolder);
	console.log('Account Holder Number: ', accountNumber);
	console.log('Business Name: ', businessName);
}

// Add function to print all addresses, including a header
function showAddresses(addresses) {
	console.log('Addresses:');
	for (let address of addresses) {
		console.log(address);
	}
}

// Add function to print phone types and numbers
function showPhoneNums(phoneNumbers) {
	console.log('Phone Numbers: ');
	for (let [key, value] of phoneNumbers) {
		console.log(key, ": ", value);
	}
}


// ///////////////////////////////////////////////////////
// Transactions:


// Add function to add transactions

function addTransaction(date, amount) {
	accountTransactions.set(date, amount);
}

// Add function to show balance status
function showBalanceStatus(balanceAmount) {
	console.log('Balance:');
	if (balanceAmount < 0) {
		console.log('YOU ARE OVERDRAWN, LOSER');
	} else if (balanceAmount >= 0 && balanceAmount < 20) {
		console.log('Warning: You are close to zero blance, manage your money better');
	} else {
		console.log('Thank you for your business.')
	}
}

// Add function to show transactions
function showTransactions(accountTransactions, beginningBalance) {
	let transactionType;
	let currentBalance = beginningBalance;

	console.log('Beginning Balance:', beginningBalance);

	for (let [date, amount] of accountTransactions) {
		if (amount > 0) {
			transactionType = 'Deposit';
		} else {
			transactionType = 'Withdrawal';
		}
		currentBalance += amount;
		console.log('Transaction Date:', date);
		console.log(transactionType, 'of', amount);
		console.log('Current Balance:', currentBalance);
	}
	if (currentBalance < 0) {
		console.log ('Account Balance Fee of $25');
		currentBalance -= 25;
	}
	console.log('Final Balance:', currentBalance);

}


// ///////////////////////////////////////////////////////
// All Customer Info:

// Make an object with customer info


// Function to add customer attributes


// Add attributes for this user


// ///////////////////////////////////////////////////////
// Getting a Business Loan


// Function to return loan rate


// ///////////////////////////////////////////////////////
// Account Report


// Add function to show bank customer report



// ///////////////////////////////////////////////////////
// PART 2:
// Bank Manager

// Create map of customer addresses


// Write a function to return the address of a given person


// Add a function to create an employee schedule for the week 


// Add a function for weekly hours


//Function Calls

// printAccountInfo(accountHolder, accountNumber, businessName)

// showAddresses(addresses)

// showPhoneNums(phoneNumbers);


addTransaction('May-2', -500);
addTransaction('May-13', 1200);
addTransaction('May-15', -100);
addTransaction('May-21', -359);
addTransaction('May-29', +2200);

showTransactions(accountTransactions, 26000);
