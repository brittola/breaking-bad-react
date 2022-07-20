function QuotesCards({quotes}) {

    return (
        quotes.map(quote => {
            return (
                <div className="quoteCard">
                    <p>"{quote.quote}"</p>
                    <h3>– {quote.author}</h3>
                </div>
            )
        })
    )

}

export default QuotesCards;