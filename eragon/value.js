export function calculateValue({cases,hourly,before,after,realization,monthly,implementation}) {
  const hours=cases*(before-after)/60;
  const annualBenefit=hours*hourly*(realization/100)*12;
  const annualSoftware=monthly*12;
  const costs=annualSoftware+implementation;
  return {hours,annualBenefit,annualSoftware,implementation,costs,net:annualBenefit-costs};
}
