exports.calculateSIPReturns = (monthlySIP, years) => {
  const FIXED_RETURN_RATE = 0.125; // 12.5% annual return
  const monthlyRate = FIXED_RETURN_RATE / 12;
  const totalMonths = years * 12;

  const multiplier =
    ((Math.pow(1 + monthlyRate, totalMonths) - 1) / monthlyRate) *
    (1 + monthlyRate);

  const finalValue = Math.round(monthlySIP * multiplier);
  const totalInvestment = monthlySIP * totalMonths;
  const estimatedReturns = finalValue - totalInvestment;
  const returnPercentage = ((estimatedReturns / totalInvestment) * 100).toFixed(
    2
  );
  const formatIndianCurrency = (value) => {
    return new Intl.NumberFormat("en-IN").format(value);
  };
  return {
    monthlySIP: formatIndianCurrency(monthlySIP),
    durationInYears: years,
    totalInvestment: formatIndianCurrency(totalInvestment),
    estimatedReturns: formatIndianCurrency(estimatedReturns),
    finalValue: formatIndianCurrency(finalValue),
    returnPercentage: `${returnPercentage}%`,
  };
};

exports.calculateEMIDetails = (
  loanAmount,
  annualInterestRate,
  loanTenureMonths
) => {
  const monthlyInterestRate = annualInterestRate / 12 / 100; // Convert annual rate to monthly and percentage to decimal
  const tenure = loanTenureMonths;
  // EMI formula: EMI = [P x r x (1 + r)^n] / [(1 + r)^n - 1]
  const emi = Math.round(
    (loanAmount *
      monthlyInterestRate *
      Math.pow(1 + monthlyInterestRate, tenure)) /
      (Math.pow(1 + monthlyInterestRate, tenure) - 1)
  );
  // Total amount to be paid over the tenure
  const totalRepayment = emi * tenure;
  // Total interest paid
  const totalInterest = totalRepayment - loanAmount;
  return {
    loanAmount: loanAmount,
    annualInterestRate: annualInterestRate,
    loanTenureMonths: loanTenureMonths,
    emiPerMonth: emi,
    totalRepayment: totalRepayment,
    totalInterest: totalInterest,
  };
};
