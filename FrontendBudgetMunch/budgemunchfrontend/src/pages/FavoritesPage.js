import './Favoritespage.css';

export const FavoritesPage = () => {
    return (
        <div classname="find">
            <h1>My Favorite Places</h1>
            <label>Adress:</label>
            <input
                type="Address"
                required
                />
            <label>City</label>
            <input
                type="City"
                required/>
            <label>State</label>
            <input
                type="State"
                required/>    

        </div>
    )
}