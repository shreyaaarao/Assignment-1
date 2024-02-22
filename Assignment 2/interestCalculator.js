// Export the function to calculate simple interest
exports.calculateSimpleInterest = async (principal, rate, time) => {
    return new Promise((resolve, reject) => {
       
        if (typeof principal !== 'number' || typeof rate !== 'number' || typeof time !== 'number') {
            reject(new Error('Invalid input parameters. Please provide numbers.'));
        }

        const interest = (principal * rate * time) / 100;

        resolve(interest.toFixed(2));
    });
};

// Export the function to calculate compound interest
exports.calculateCompoundInterest = async (principal, rate, time) => {
    return new Promise((resolve, reject) => {
       
        if (typeof principal !== 'number' || typeof rate !== 'number' || typeof time !== 'number') {
            reject(new Error('Invalid input parameters. Please provide numbers.'));
        }

        const amount = principal * Math.pow((1 + rate / 100), time);
        const interest = amount - principal;

        resolve(interest.toFixed(2));
    });
};
