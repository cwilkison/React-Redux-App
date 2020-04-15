import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import { fetchQuote } from "../store/actions/quoteActions";

const BreakingQuote = (props) => {

    useEffect(() => {
        props.fetchQuote();
    }, []);


    return (
        <div>
             {console.log(">>>-->>>", props.quote)}
            <h1>Walter's Collection of Words</h1>
            {props.isFetching ? (
            <Loader 
            type="Hearts" 
            color="#00BFFF" 
            height={80} 
            width={80}
            timeout={2000}
             />
            ): 
            <div>
                <h1>{props.quote.map(i => i.quote)}</h1>
                <h3>{props.quote.map(i => i.author)}</h3>
            </div>
                
                }
        </div>
    );
};

const mapStateToProps = state => {
    return{
        quote: state.quotes.quote,
        isFetching: state.quotes.isFetching,
        error: state.quotes.error
    };
}

export default connect(
    mapStateToProps,
    { fetchQuote }
)(BreakingQuote);