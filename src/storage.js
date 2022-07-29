export function saveList(town) {
    const listArray = Array.from(town);
    localStorage.setItem('list', JSON.stringify(listArray));
};

export function getList() {
 return localStorage.getItem('list');
};

export function saveLastSession(town) {
  sessionStorage.setItem('lastSession', town);
};

export function getLastSession() {
  return sessionStorage.getItem('lastSession');
};