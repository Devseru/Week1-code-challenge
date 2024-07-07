const calculateNetSalary = function(basicSalary, benefits) {
    const grossSalary = basicSalary + benefits;

    let paye;
    if (grossSalary <= 24000) {
        paye = grossSalary * 0.10;
    } else if (grossSalary <= 32333) {
        paye = 2400 + (grossSalary - 24000) * 0.25;
    } else if (grossSalary <= 500000) {
        paye = 2400 + 2083.25 + (grossSalary - 32333) * 0.30;
    } else if (grossSalary <= 800000) {
        paye = 2400 + 2083.25 + 140000.1 + (grossSalary - 500000) * 0.325;
    } else {
        paye = 2400 + 2083.25 + 140000.1 + 97500 + (grossSalary - 800000) * 0.35;
    }

    let nhif;
    if (grossSalary <= 5999) {
        nhif = 150;
    } else if (grossSalary <= 7999) {
        nhif = 300;
    } else if (grossSalary <= 11999) {
        nhif = 400;
    } else if (grossSalary <= 14999) {
        nhif = 500;
    } else if (grossSalary <= 19999) {
        nhif = 600;
    } else if (grossSalary <= 24999) {
        nhif = 750;
    } else if (grossSalary <= 29999) {
        nhif = 850;
    } else if (grossSalary <= 34999) {
        nhif = 900;
    } else if (grossSalary <= 39999) {
        nhif = 950;
    } else if (grossSalary <= 44999) {
        nhif = 1000;
    } else if (grossSalary <= 49999) {
        nhif = 1100;
    } else if (grossSalary <= 59999) {
        nhif = 1200;
    } else if (grossSalary <= 69999) {
        nhif = 1300;
    } else if (grossSalary <= 79999) {
        nhif = 1400;
    } else if (grossSalary <= 89999) {
        nhif = 1500;
    } else if (grossSalary <= 99999) {
        nhif = 1600;
    } else {
        nhif = 1700;
    }

    
    const nssf = Math.min(grossSalary, 18000) * 0.06;

    const netSalary = grossSalary - (paye + nhif + nssf);

    return {
        grossSalary,
        paye,
        nhif,
        nssf,
        netSalary
    };
}


const basicSalary = parseFloat(prompt("Enter the basic salary: "));
const benefits = parseFloat(prompt("Enter the benefits: "));
const result = calculateNetSalary(basicSalary, benefits);

console.log(`Gross Salary: Ksh ${result.grossSalary.toFixed(2)}`);
console.log(`PAYE: Ksh ${result.paye.toFixed(2)}`);
console.log(`NHIF: Ksh ${result.nhif.toFixed(2)}`);
console.log(`NSSF: Ksh ${result.nssf.toFixed(2)}`);
console.log(`Net Salary: Ksh ${result.netSalary.toFixed(2)}`);
