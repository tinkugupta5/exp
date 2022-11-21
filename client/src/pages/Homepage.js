import React,{useState} from 'react'
import {Modal, Select} from 'antd'
import { Form, Input } from 'antd';
import Layout from './../components/Layout/Layout';
import axios from 'axios'
import { message } from 'antd';
import Spinner from '../components/Spinner';

const Homepage = () => {
  const [showModal,setShowModal] = useState(false);
  const[loading,setLoading] = useState(false)

  // form handling
  const handleSubmit = async(values) => {

    try {

      const user = JSON.parse(localStorage.getItem('user'))
      setLoading(true)
      await axios.post('/transections/add-transection',{...values,userid:user._id})   
      setLoading(false)
      message.success('Transaction Added Successfully')
      setShowModal(false)
    } catch (error) {

      setLoading(false)
      message.error('Faild to add transection');
      
    }
    
  }

  return (
    <Layout>
      {loading && <Spinner/>}
      <div className='filters'>
        <div>Range Filters</div>
        <div><button className='btn btn-primary' onClick={() => setShowModal(true)}>Add New</button></div>
      </div>
      <div className='content'>
        <Modal title="Add Transaction"
         open={showModal} 
         onCancel={() => setShowModal(false)} footer={false}>
          
          <Form Layout="vertical" onFinish={handleSubmit}>

            <Form.Item label="amount" name="amount"> 
              <Input type='text'/>
            </Form.Item>

            <Form.Item label="type" name="type"> 
              <Select>
                <Select.Option value="income">Income</Select.Option>
                <Select.Option value="expense">Expense</Select.Option>
              </Select>
            </Form.Item>

            <Form.Item label="Category" name="category"> 
              <Select>
                <Select.Option value="salary">Salary</Select.Option>
                <Select.Option value="tip">Tip</Select.Option>
                <Select.Option value="project">Project</Select.Option>
                <Select.Option value="food">Food</Select.Option>
                <Select.Option value="movie">Movie</Select.Option>
                <Select.Option value="bills">Bills</Select.Option>
                <Select.Option value="medical">Medical</Select.Option>
                <Select.Option value="fee">Fee</Select.Option>
                <Select.Option value="tax">Tax</Select.Option>
              </Select>
            </Form.Item>

            <Form.Item label="Date" name="date"> 
              <Input type='date'/>
            </Form.Item>

            <Form.Item label="Refrence" name="refrence"> 
              <Input type='text'/>
            </Form.Item>

            <Form.Item label="Description" name="description"> 
              <Input type='text'/>
            </Form.Item>

            <div className='d-flex justify-content-end '>
              <button type='submit'  className='btn btn-primary'>Save</button>
            </div>

          </Form>
          
        </Modal>
      </div>
    </Layout>
  )
}

export default Homepage


//9th video remaning 
