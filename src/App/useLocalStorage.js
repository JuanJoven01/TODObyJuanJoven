import React from "react";
function useLocalStorage (lsName, lsInitialState) {

    let itemsLocalStorage = JSON.parse(localStorage.getItem(lsName));
  
    if (!itemsLocalStorage){
      localStorage.setItem(lsName, JSON.stringify(lsInitialState));
      itemsLocalStorage = JSON.parse(localStorage.getItem(lsName));
      // console.log('creado con exito');
      // console.log(itemsLocalStorage);
    } else {
      itemsLocalStorage = JSON.parse(localStorage.getItem(lsName));
    }
  
    const [item, setItem] = React.useState(itemsLocalStorage);
  
    const upload = (newItem)=>{
      setItem(newItem);
      let stringNewItem = JSON.stringify(newItem);
      localStorage.setItem(lsName, stringNewItem);
    }
  
    return [item, upload];
  
  }



  export {useLocalStorage}