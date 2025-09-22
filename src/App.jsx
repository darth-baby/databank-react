import CardSection from "./components/CardSection"

function App() {
  return (
    <div>
      <header className = "star-wars-header">
            <h1 className =  "star-wars-heading">
                Star<br/>Wars
            </h1>
            
            <nav className = "header-navigation">
                <a className = "header-navigation-buttons">NEWS + FEATURES</a>
                <a className = "header-navigation-buttons">VIDEO</a>
                <a className = "header-navigation-buttons">FILMS</a>
                <a className = "header-navigation-buttons">SERIES</a>
                <a className = "header-navigation-buttons">GAMES+INTERACTIVE</a>
                <a className = "header-navigation-buttons">DATABANK</a>
                <a className = "header-navigation-buttons">DISNEYPLUS</a>
            </nav>
            <h2 className = "sw-on-disney">STAR WARS ON DISNEY+</h2>
        </header>

        <main>
            <form className = "search-databank">
                <input className = "search-bar" type = "search" placeholder="Search Databank"/>
                <button className = "search-button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" 
                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-search">
                        <circle cx="11" cy="11" r="8">
                        </circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65">  
                        </line>
                    </svg>
                    <div className = "search-button-text">
                        SEARCH
                    </div>
                </button>
            </form>

            <CardSection title = "Databank | Andor" endpoint = "/api/characters/andor" />
        </main> 
    </div>
  );
}

export default App