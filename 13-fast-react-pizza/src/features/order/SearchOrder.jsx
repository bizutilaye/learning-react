import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function SearchOrder() {
    const [querry, setQuery] = useState()
    const navigate = useNavigate()
    function handleSubmit(e) {
        e.preventDefault()
        if (!querry) return
        navigate(`/order/${querry}`)
        setQuery('')
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                placeholder="Search order"
                value={querry}
                onChange={(e) => setQuery(e.target.value)}
            ></input>
        </form>
    )
}

export default SearchOrder
