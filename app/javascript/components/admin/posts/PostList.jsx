import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  Table,
  Space,
  Modal,
  Form,
  Input
} from 'antd';

import PostForm from './PostForm'
import {
  getPosts,
  showEditModal,
  hideEditModal
} from './postsSlice'

const PostList = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state.postReducer);
  const [form] = Form.useForm();
  const post = state.modalEdit.post || {};

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
          <a onClick={() => dispatch(showEditModal(record))}>Edit</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];

  const fetchPosts = () => {
    dispatch(
      getPosts()
    )
  };

  const handleCancel = () => {
    dispatch(hideEditModal())
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <React.Fragment>
      <Table dataSource={state.posts} columns={columns} />
      <Modal
        title="Edit"
        visible={state.modalEdit.isVisible}
        onCancel={handleCancel}
        width={768}
        okButtonProps={{
          form:'post-form',
          key: 'submit',
          htmlType: 'submit'
        }}
      >
        <PostForm />
      </Modal>
    </React.Fragment>
  )
};

export default PostList;
