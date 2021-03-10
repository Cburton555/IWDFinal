// File: /packages/my-first-theme/src/components/index.js
import React from "react"
import { connect, Global, css, styled } from "frontity"
import Link from "@frontity/components/link"
import List from "./list"
import Switch from "@frontity/components/switch"
import Post from "./post"
import Page from "./page"
import Loading from "./loading";
import Error from "./error";

const Root = ({ state }) => {
    const data = state.source.get(state.router.link)

    return (

        <>
            <Global
                styles={css`
          * {
            padding: 0;
            margin: 0;
            box-sizing: border-box;
          }
          html {
            font-family: system-ui, Arial, sans-serif;
          }
          
        `}
            />
            <Header>
                <HeaderContent>
                    <h1>Frontity Workshop</h1>
                    <p>Current URL: {state.router.link}</p>
                    <nav>
                        <Link link="/">Home</Link>
                        <Link link="/books">books</Link>
                        <Link link="/about-us">About Us</Link>
                    </nav>
                </HeaderContent>
            </Header>
            <Main>

                <Switch>
                    <Loading when={data.isFetching} />
                    <List when={data.isArchive} />
                    <Page when={data.isPage} />
                    <Post when={data.isPost} />
                    <Page when={data.isBooks} />
                    <Error when={data.isError} />
                </Switch>

            </Main>
        </>



    )
}
export default connect(Root)
const Header = styled.header`
  background-color: #e5edee;
  border-width: 0 0 8px 0;
  border-style: solid;
  border-color: maroon;

  h1 {
    color: #4a4a4a;
  }
`
const HeaderContent = styled.div`
  max-width: 800px;
  padding: 2em 1em;
  margin: auto;
`
const Main = styled.main`
  max-width: 800px;
  padding: 1em;
  margin: auto;

  img {
    max-width: 100%;
  }
  h2 {
    margin: 0.5em 0;
  }
  p {
    line-height: 1.25em;
    margin-bottom: 0.75em;
  }
  figcaption {
    color: #828282;
    font-size: 0.8em;
    margin-bottom: 1em;
  }
`



