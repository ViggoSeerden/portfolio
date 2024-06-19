function IsLocalStorageAvailable() {
    if (typeof window != undefined || typeof window != null) {
        return true;
    }
    return false;
}

export function getLocalStorage(key) {
    if (IsLocalStorageAvailable) {
        return localStorage.getItem(key)
    }
}

export function setLocalStorage(key, value) {
    if (IsLocalStorageAvailable) {
        localStorage.setItem(key, value)
    }
}