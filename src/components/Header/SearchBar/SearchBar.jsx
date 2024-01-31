import React, {useState, useContext} from "react";
import './SearchBar.css';
import { BsSearch } from "react-icons/bs";
import fetchProducts from "../../../api/FetchProducts";
import AppContext from "../../../context/AppContext";
function SearchBar() {


     const { setProducts, setLoading } = useContext(AppContext);
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = async (event) => {
    event.preventDefault();
    setLoading(true);

    const products = await fetchProducts(searchValue);

    setProducts(products);
    setLoading(false);
    setSearchValue('');
  };

    return ( 
        <form className="search-bar" onSubmit={handleSearch}>
          {/* {name} */}
             <input type="search"  placeholder="Buscar produtos" className="search__input" onChange={({target}) => setSearchValue(target.value)} required />
               
            <button type="submit" className="search__button"><BsSearch></BsSearch></button>
       </form>
     );
}

export default SearchBar;