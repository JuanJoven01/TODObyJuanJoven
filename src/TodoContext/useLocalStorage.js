import React from "react";

function useLocalStorage (lsName, lsInitialState) {


    const [item, setItem] = React.useState(lsInitialState);

    const [loading, setLoading] = React.useState(true);

    const [error, setError] = React.useState(false);

    React.useEffect (()=>{

      setTimeout(() => {
        try {
        
          let itemsLocalStorage = JSON.parse(localStorage.getItem(lsName));
  
          if (!itemsLocalStorage){
            localStorage.setItem(lsName, JSON.stringify(lsInitialState));
            itemsLocalStorage = JSON.parse(localStorage.getItem(lsName));
            // console.log('creado con exito');
            // console.log(itemsLocalStorage);
          } else {
            itemsLocalStorage = JSON.parse(localStorage.getItem(lsName));
            setItem(itemsLocalStorage);
          }
  
          setLoading(false);
        }
        
        catch(error){
          setLoading(false);
          setError(true);
          
        }
      }, 2000);

    },[lsName,lsInitialState]);
  
    const upload = (newItem)=>{
      setItem(newItem);
      let stringNewItem = JSON.stringify(newItem);
      localStorage.setItem(lsName, stringNewItem);
    }
    
    // console.log(item)
    return {item, upload,loading,error};
  
  }



  export {useLocalStorage}