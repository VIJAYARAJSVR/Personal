import * as React from "react"
import type {HeadFC, PageProps} from "gatsby"
import styled  from "styled-components";

const NeuWrapper = styled.div`
    margin-bottom: 2rem;
    background: bisque;
`

const IndexPage: React.FC<PageProps> = () => {
    return (
        <div className="text-center mt-5 font-semibold"> Thi is my personal Website.</div>
    )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
