import * as React from "react"
import type {HeadFC, PageProps} from "gatsby"
import Layout from "../components/Layout";
import styled  from "styled-components";

import { graphql } from "gatsby"

const NeuWrapper = styled.div`
    margin-bottom: 2rem;
    background: bisque;
`
const IndexPage: React.FC<PageProps> = () => {
    return (
        <Layout>
            <h1 className="text-center font-bold mt-5 bg-amber-600">
                Thi is my personal Website.
            </h1>;
        </Layout>
    )
}


export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
