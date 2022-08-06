// https://calculator.swiftutors.com/mass-flow-rate-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const massFlowRateRadio = document.getElementById('massFlowRateRadio');
const fluidDensityRadio = document.getElementById('fluidDensityRadio');
const velocityoftheFluidRadio = document.getElementById('velocityoftheFluidRadio');
const flowAreaRadio = document.getElementById('flowAreaRadio');

let massFlowRate;
let fluidDensity = v1;
let velocityoftheFluid = v2;
let flowArea = v3;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');

massFlowRateRadio.addEventListener('click', function() {
  variable1.textContent = '(ρ) Fluid Density (kg/m³)';
  variable2.textContent = '(V) Velocity of the Fluid (m/s)';
  variable3.textContent = '(A) Flow Area (m²)';
  fluidDensity = v1;
  velocityoftheFluid = v2;
  flowArea = v3;
  result.textContent = '';
});

fluidDensityRadio.addEventListener('click', function() {
  variable1.textContent = '(m) Mass Flow Rate (kg/sec)';
  variable2.textContent = '(V) Velocity of the Fluid (m/s)';
  variable3.textContent = '(A) Flow Area (m²)';
  massFlowRate = v1;
  velocityoftheFluid = v2;
  flowArea = v3;
  result.textContent = '';
});

velocityoftheFluidRadio.addEventListener('click', function() {
  variable1.textContent = '(m) Mass Flow Rate (kg/sec)';
  variable2.textContent = '(ρ) Fluid Density (kg/m³)';
  variable3.textContent = '(A) Flow Area (m²)';
  massFlowRate = v1;
  fluidDensity = v2;
  flowArea = v3;
  result.textContent = '';
});

flowAreaRadio.addEventListener('click', function() {
  variable1.textContent = '(m) Mass Flow Rate (kg/sec)';
  variable2.textContent = '(ρ) Fluid Density (kg/m³)';
  variable3.textContent = '(V) Velocity of the Fluid (m/s)';
  massFlowRate = v1;
  fluidDensity = v2;
  velocityoftheFluid = v3;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(massFlowRateRadio.checked)
    result.textContent = `Mass Flow Rate = ${computeMassFlowRate().toFixed(2)} kg/sec`;

  else if(fluidDensityRadio.checked)
    result.textContent = `Fluid Density = ${computeFluidDensity().toFixed(2)} kg/m³`;

  else if(velocityoftheFluidRadio.checked)
    result.textContent = `Velocity of the Fluid = ${computeVelocityoftheFluid().toFixed(2)} m/s`;

  else if(flowAreaRadio.checked)
    result.textContent = `Flow Area = ${computeFlowArea().toFixed(2)} m²`;
})

// calculation

function computeMassFlowRate() {
  return Number(fluidDensity.value) * Number(velocityoftheFluid.value) * Number(flowArea.value);
}

function computeFluidDensity() {
  return Number(massFlowRate.value) / (Number(velocityoftheFluid.value) * Number(flowArea.value));
}

function computeVelocityoftheFluid() {
  return Number(massFlowRate.value) / (Number(fluidDensity.value) * Number(flowArea.value));
}

function computeFlowArea() {
  return Number(massFlowRate.value) / (Number(fluidDensity.value) * Number(velocityoftheFluid.value));
}