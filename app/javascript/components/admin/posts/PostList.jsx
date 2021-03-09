import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  getPosts
} from './postsSlice'
import { Table, Space } from 'antd';

const PostList = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state.postReducer);
  const columns = [
    {
      title: '#',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Content',
      dataIndex: 'content',
      className: 'content-column',
      key: 'content',
    },
    {
      title: 'Author',
      dataIndex: 'author',
      key: 'author',
    },
    {
      title: 'Created at',
      dataIndex: 'created_at',
      key: 'created_at',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <a>Edit Post {record.key}</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];

  const loadMore = () => {
    dispatch(
      getPosts({
        limit: 10,
        page: 1
      })
    )
  };

  useEffect(() => {
    loadMore();
  }, []);

  return (
    <React.Fragment>
      <Table dataSource={state.posts} columns={columns} />
    </React.Fragment>
  )
};

export default PostList;
