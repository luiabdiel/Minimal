import { MagnifyingGlass } from 'phosphor-react'
import { SearchFormContainer } from "./styles";

export function SearchForm() {
    return (
        <SearchFormContainer>
            <input type="text" placeholder='Busque por uma transição' />

            <button type="submit">
                <MagnifyingGlass size={15} />
                Buscar
            </button>
        </SearchFormContainer>
    )
}