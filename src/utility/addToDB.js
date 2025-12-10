

const getStoredApp =() => {
    const storedAppSTR = localStorage.getItem("appList")
    return storedAppSTR ? JSON.parse(storedAppSTR) : [];
};
const addToStoredDB = (id) => {
    const storedAppData = getStoredApp();
    const numericId = parseInt(id);
    if (storedAppData.includes(numericId)) {
        alert ("Already installed")
    }
    else {
        storedAppData.push(numericId);
        const data = JSON.stringify(storedAppData);
        localStorage.setItem("appList",data)
    }
};
const removeFromStoredDB = (id) => {
    const storedAppData = getStoredApp();
    const numericId = parseInt(id);
    const filtered = storedAppData.filter(appId => parseInt(appId) !== numericId);
    localStorage.setItem("appList", JSON.stringify(filtered));
};

export { addToStoredDB,getStoredApp,removeFromStoredDB };