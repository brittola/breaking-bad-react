import { useState } from 'react';
import QuotesCards from './QuotesCards';

function Quotes() {

    const [quotes, setQuotes] = useState([]);

    fetch("https://breakingbadapi.com/api/quotes")
        .then(res => res.json())
        .then(json => {
            let filtered = json.filter(quote => quote.series === 'Breaking Bad');
            setQuotes(filtered);
        });

    return (
        <main>
            <h1>Quotes</h1>
            <section>
                {quotes.length === 0 ? 'Carregando...' : <QuotesCards quotes={quotes} />}
            </section>
        </main>
    )

}

export default Quotes;