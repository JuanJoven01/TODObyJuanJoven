import './TodoSearch.css'
function TodoSearch({ searchValue, setSearchValue}) {


    return (
      <div className='container'>
        <input placeholder="Escribe el TODO que buscas"
          value={searchValue}
          onChange={(event)=> {
              setSearchValue(event.target.value);
            }}
        />
      </div>
    );
  }

export {TodoSearch} ;