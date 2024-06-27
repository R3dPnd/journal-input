import { useState } from "react";
import { useActions } from "../../hooks/useActions";
import { RootState } from "../state/reducers/index.";
import { useSelector } from "../../hooks/useTypedSelector";



const RepositoriesList: React.FC = () => {
    const [term, setTerm] = useState('');
    const {searchRepositories} = useActions();
    const {loading, error, data} = useSelector((state: RootState) => state.repositories);

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        searchRepositories(term);
    }

    return (
    <div>
        <form onSubmit={onSubmit}>
            <input value ={term} onChange={e => setTerm(e.target.value)}/>
            <button>Search</button>
        </form>
        {error && <h3>{error}</h3>}
        {loading && <h3>loading...</h3>}
        {!error && !loading && 
            data?.map((name) => <div key={name}>{name}</div>)
        }
    </div>
    )
}   

export default RepositoriesList;