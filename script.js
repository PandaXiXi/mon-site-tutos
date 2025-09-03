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
function appendCalc
