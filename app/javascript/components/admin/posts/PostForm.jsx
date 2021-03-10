import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Form, Input } from 'antd';
import {
  updatePost
} from './postsSlice'

const PostForm = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state.postReducer);
  const [form] = Form.useForm();
  const post = state.modalEdit.post || {};
  const initValues = {
    title: post.title,
    content: post.content
  }

  form.setFieldsValue(initValues);

  const onFinish = (values) => {
    const params = {id: post.id, ...values}
    dispatch(updatePost(params));
  };

  return (
    <Form
      form={form}
      id='post-form'
      labelCol={{span: 4}}
      onFinish={onFinish}
    >
      <Form.Item
        name='title'
        label='Title'
      >
        <Input />
      </Form.Item>
      <Form.Item
        name='content'
        label='Content'
      >
        <Input.TextArea rows={5} />
      </Form.Item>
    </Form>
  )
};

export default PostForm;
