const { calculateSimpleInterest, calculateCompoundInterest } = require('./interestCalculator.js');

const main = async () => {
    try {
        const principal = 1000;
        const rate = 5;
        const time = 2;

        const simpleInterest = await calculateSimpleInterest(principal, rate, time);

        const compoundInterest = await calculateCompoundInterest(principal, rate, time);

        console.log(`Principal: ${principal}`);
        console.log(`Rate of interest: ${rate}%`);
        console.log(`Time period: ${time} years`);
        console.log(`Simple interest: ${simpleInterest}`);
        console.log(`Compound interest: ${compoundInterest}`);
    } catch (error) {
        console.error('An error occurred:', error.message);
    }
};
main();
