
export default function StorageService() {
    const getItemLocalStorage = (key) => {
        return localStorage.getItem(key);
    };
    
    const setItemLocalStorage = (key, value) => {
        localStorage.setItem(key, value);
    };
    
    const deleteItemLocalStorage = (key) => {
        localStorage.removeItem(key);
    };

    return {
        getItemLocalStorage: getItemLocalStorage,
        setItemLocalStorage: setItemLocalStorage,
        deleteItemLocalStorage: deleteItemLocalStorage
    }
}
