import React, {useEffect} from 'react';
import {useActions} from "../hooks/useActions";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {Col, Layout, Row} from "antd";
import AuthorsList from "../components/AuthorsList";

const Authors = () => {
    const {authors} = useTypedSelector(state => state.authorReducer)

    const {getAuthors} = useActions()

    useEffect(() => {
        getAuthors()
    }, [])

    return (
        <Layout>
            <Row>
                <Col md={24}>
                    <AuthorsList authors={authors}/>
                </Col>
            </Row>
        </Layout>
    );
};

export default Authors;