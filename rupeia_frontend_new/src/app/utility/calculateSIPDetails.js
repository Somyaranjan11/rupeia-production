exports.calculateSIPDetails = (targetAmount, months) => {
  const FIXED_RETURN_RATE = 0.125; // 12.5% annual return
  const monthlyRate = FIXED_RETURN_RATE / 12; // ≈ 1.0417% monthly
  const monthsDecimal = months;

  // SIP Future Value Formula multiplier
  const multiplier =
    ((Math.pow(1 + monthlyRate, monthsDecimal) - 1) / monthlyRate) *
    (1 + monthlyRate);

  // Monthly SIP to reach the target amount
  const sipPerMonth = Math.round(targetAmount / multiplier);

  // Total amount invested over the duration
  const totalInvestment = sipPerMonth * monthsDecimal;

  // Estimated returns = final value - investment
  const estimatedReturns = Math.round(targetAmount - totalInvestment);

  return {
    duration: months,
    monthlySIP: sipPerMonth,
    totalInvestment: totalInvestment,
    estimatedReturns: estimatedReturns,
    finalValue: targetAmount,
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
