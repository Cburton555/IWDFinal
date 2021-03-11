// File: /packages/my-first-theme/src/components/list.js
import React from "react"
import { connect, styled} from "frontity"
import Link from "@frontity/components/link"

const List = ({ state }) => {
    const data = state.source.get(state.router.link)

    return (
        <div>
            {data.items.map((item) => {
                const post = state.source[item.type][item.id]
                return (
                    <Link key={item.id} link={post.link}>
                        {post.title.rendered}
                        <br />
                    </Link>
                )
            })}
        </div>
    )
}

export default connect(List)
const Items = styled.div`
  & > a {
    display: block;
    margin: 6px 0;
    font-size: 1.2em;
    color: red;
    text-decoration: none;
  }
`

;
