let localVisit = localStorage.getItem('localStorageVisit');
if (localVisit === null) {
  localStorage.setItem('localStorageVisit', 1);
} else {
  localStorage.setItem('localStorageVisit', ++localVisit);
}

alert(`visit (local storage): ${localStorage.getItem('localStorageVisit')}`);


function nameAdd() {
    
  let nameofUser = prompt('กรอกชื่อของคุณ', 'ชื่อของคุณ');
  console.log(nameofUser); //answer null
  alert(`ยินดีต้อนรับ ${nameofUser}`);
  return nameofUser;
}

let WelcomeVisit = localStorage.getItem('WelcomeStorageVisit');
if (WelcomeVisit === null) {
  localStorage.setItem('WelcomeStorageVisit', `สวัสดี ${nameAdd()}`);
} else {
    WelcomeVisit;
}

alert(`ข้อความจาก WelcomeVisit Storage: ${localStorage.getItem('WelcomeStorageVisit')}`);