import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { flexbox, layout } from "styled-system";

import Card from "./components/Card";

function App() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fectchData = async () => {
      try {
        let [tempPosts, placeholder] = await Promise.all([
          fetch(
            "https://jsonplaceholder.typicode.com/posts?userId=1"
          ).then(response => response.json()),
          fetch(
            "https://jsonplaceholder.typicode.com/photos?albumId=1&id=1"
          ).then(response => response.json())
        ]);

        if (placeholder.length && placeholder[0] && placeholder[0].url) {
          tempPosts.map(item => {
            item.thumbnail = placeholder[0].url;
            return item;
          });
        }

        setIsLoading(false);
        setPosts(tempPosts);
      } catch (err) {
        console.log(err);
        setIsLoading(false);
      }
    };

    fectchData();
  }, []);

  const Container = styled.div`
    padding-left: 15px;
    padding-right: 15px;
    width: 100%;
    margin-right: auto;
    margin-left: auto;

    @media (min-width: ${({theme}) => theme.breakpoints.sm}) {
      {
        max-width: 540px;
      }
    }
    
    @media (min-width: ${({theme}) => theme.breakpoints.md}) {
      {
        max-width: 720px;
      }
    }
    
    @media (min-width: ${({theme}) => theme.breakpoints.lg}) {
      {
        max-width: 960px;
      }
    }
    
    @media (min-width: ${({theme}) => theme.breakpoints.xl}) {
      {
        max-width: 1140px;
      }
    }
  `;

  const Wrapper = styled.div`
    ${flexbox}
    ${layout}

    @media (min-width: ${({theme}) => theme.breakpoints.lg}) {
      display: flex;
      flex-wrap: wrap;
      margin-left: -15px;
      margin-right: -15px;
    }
  `;

  const Item = styled.div`
    ${flexbox}
    ${layout}
    width: 100%;
    @media (min-width: ${({theme}) => theme.breakpoints.lg}) {
      flex: 0 0 33.333333%;
      max-width: 33.3333333%;
      padding-left: 15px;
      padding-right: 15px;
    } 
  `;

  return (
    <Container>
      <Wrapper>
        {isLoading === false && posts.length ? (
          posts.map(post => (
            <Item>
              <Card
                // flex={{ _:null, sm: null, md: "0 0 33.333333%", lg: null, xl: null }}
                // maxwidth={{ _: null, sm: null, md: "33.333333%", lg: null, xl: null }}
                width="33.33333%"
                key={post.id}
                thumbnail={post.thumbnail}
                content={
                  <>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                  </>
                }
                actionLink={`https://jsonplaceholder.typicode.com/posts?id=${post.id}`}
              />
            </Item>
          ))
        ) : (
          <div className="div-is-loading">Loading.....</div>
        )}
      </Wrapper>
    </Container>
  );
}

export default App;
