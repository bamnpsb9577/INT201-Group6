let WelcomeVisit = localStorage.getItem('User');

if (WelcomeVisit === null) {
  localStorage.setItem('User', nameAdd());
} 

function nameAdd() {
  let nameofUser = prompt('Enter your name:','');
  console.log(nameofUser); 
  alert(`Welcome ${nameofUser}`);
  return nameofUser;
}