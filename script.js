// ===== Mode sombre =====
const darkToggle = document.getElementById('darkModeToggle');
darkToggle.addEventListener('click', () => { document.body.classList.toggle('dark'); });

// ===== Générateur de mots de passe =====
const generateBtn = document.getElementById('generate');
const passwordField = document.getElementById('password');
function generatePassword(length=12){
  const chars='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~';
  let password=''; for(let i=0;i<length;i++){ password+=chars.charAt(Math.floor(Math.random()*chars.length)); }
  return password;
}
generateBtn.addEventListener('click', ()=>{ passwordField.value = generatePassword(); });

// ===== Calculatrice simple =====
let calcValue = '';
const calcDisplay = document.getElementById('calcDisplay');
function appendCalc(val){ calcValue+=val; calcDisplay.value=calcValue; }
function clearCalc(){ calcValue=''; calcDisplay.value=''; }
function calcResult(){ try{ calcDisplay.value=eval(calcValue); calcValue=''; }catch{ calcDisplay.value='Erreur'; calcValue=''; } }

// ===== Convertisseur Celsius/Fahrenheit =====
function convertTemp(){
  const c = parseFloat(document.getElementById('celsius').value);
  if(!isNaN(c)){
    document.getElementById('fahrenheit').textContent = (c*9/5+32).toFixed(2)+' °F';
  } else { document.getElementById('fahrenheit').textContent = 'Entrez un nombre valide'; }
}
