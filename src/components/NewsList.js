import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import NewsItem from './NewsItem';
import axios from 'axios';

// backtick role in JavaScript
const NewsListBlock = styled.div`
box-sizing: border-box;
padding-bottom: 3rem;
width: 768px;
margin: 0 auto;
margin-top: 2 rem;
@media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
}
`;

const NewsList = ({ category }) => {
    const [articles, setArticles] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        // async function 
        const fetchData = async () => {
            setLoading(true);
            try {
                const query = category === 'all' ? '': `&category=${category}`;
                const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=kr${ query }&apiKey=40f8dc0653314d11a31991ad02f4cb95`,);
                setArticles(response.data.articles);
            }
            catch (e) {
                console.log(e);
            }
            setLoading(false);
        };
        fetchData();
    }, [category]);
    
    // if loading
    if (loading) {
        return <NewsListBlock>Loading...</NewsListBlock>;
    }
    
    // if articles values are not set yet
    if (!articles) {
        return null;
    }

    // if articles values are set
    return (
        <NewsListBlock>
            {articles.map(article => (
                <NewsItem key={article.url} article={article} />
            ))}
        </NewsListBlock>
    );
};

// const sampleArticle = {
//     title: 'Title',
//     description: 'Description',
//     url: "https:///google.com",
//     urlToImage: "https://via.placeholder.com/160",
// };

// const NewsList = () => {
//     return (
//         // NewsListBlock shows 10 news articles
//         <NewsListBlock>
//             <NewsItem article = {sampleArticle} />
//             <NewsItem article = {sampleArticle} />
//             <NewsItem article = {sampleArticle} />
//             <NewsItem article = {sampleArticle} />
//             <NewsItem article = {sampleArticle} />
//             <NewsItem article = {sampleArticle} />
//             <NewsItem article = {sampleArticle} />
//             <NewsItem article = {sampleArticle} />
//             <NewsItem article = {sampleArticle} />
//             <NewsItem article = {sampleArticle} />
//         </NewsListBlock>
//     );
// };

export default NewsList;
