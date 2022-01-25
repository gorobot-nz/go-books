import React, {useEffect} from 'react';
import {useActions} from "../hooks/useActions";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {Col, Layout, Row, Spin} from "antd";
import AuthorsList from "../components/AuthorsList";
import {LoadingOutlined} from "@ant-design/icons";

const Authors = () => {
    const {authors, isLoading} = useTypedSelector(state => state.authorReducer)

    const {getAuthors} = useActions()

    useEffect(() => {
        getAuthors()
    }, [])

    return (
        <Layout>
            {isLoading
                ?
                <Spin indicator={<LoadingOutlined style={{fontSize: 24}} spin/>}/>
                :
                <Row>
                    <Col md={24}>
                        <AuthorsList authors={authors}/>
                    </Col>
                </Row>
            }

        </Layout>
    );
};

export default Authors;