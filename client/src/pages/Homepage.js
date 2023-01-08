import React, { useState, useEffect } from "react";
import { Modal, Select } from "antd";
import { Form, Input, Table, DatePicker } from "antd";
import Layout from "./../components/Layout/Layout";
import axios from "axios";
import { message } from "antd";
import Spinner from "../components/Spinner";
import moment from "moment";
import Analytics from "../components/Analytics"; 
import { UnorderedListOutlined, AreaChartOutlined , EditOutlined,DeleteFilled, DeleteColumnOutlined } from "@ant-design/icons";
const { RangePicker } = DatePicker;
// import { json } from 'react-router-dom';

const Homepage = () => {
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [frequency, setFrequency] = useState("7");
  // Too hold the values commig from server
  const [allTransection, setAllTransection] = useState([]);
  const [selectedDate, setSelectedate] = useState([]);
  const [type, setType] = useState("all");
  // graph state define here
  const [viewData,setViewData] = useState('table');
  // handing the edit and delte data 
  const [editable,setEditable] = useState(null)

  //table data
  const columns = [
    {
      title: "Date",
      dataIndex: "date",
      render: (text) => <span>{moment(text).format("YYYY-MM-DD")}</span>,
    },
    {
      title: "Amount",
      dataIndex: "amount",
    },
    {
      title: "Type",
      dataIndex: "type",
    },
    {
      title: "Category",
      dataIndex: "category",
    },
    
    {
      title: "Refrence",
      dataIndex: "refrence",
    },
    {
      title: "Actions",
      render : (text , record) => (
        <div>
          <EditOutlined onClick={() => {
            setEditable(record)
            setShowModal(true);
          }} />
          <DeleteFilled className="mx-2"/>
        </div>
      )
    },
  ];

  // useEffect Hook
  useEffect(() => {
    // getall transactions
    const getAllTransaction = async () => {
      try {
        const user = JSON.parse(localStorage.getItem("user"));
        setLoading(true);
        const res = await axios.post("/transections/get-transection", {
          userid: user._id,
          frequency,
          selectedDate,
          type,
        });

        setLoading(false);
        setAllTransection(res.data.reverse());
        console.log(res.data);
      } catch (error) {
        console.log(error);
        message.error("Fetch issue with transaction");
      }
    };
    getAllTransaction();
  }, [frequency, selectedDate, type]);

  // form handling
  const handleSubmit = async (values) => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      setLoading(true);   
      await axios.post("/transections/add-transection", {
        ...values,
        userid: user._id,
      });
      setLoading(false);
      message.success("Transaction Added Successfully");
      setShowModal(false);
      setEditable(null);
      window.location.reload();
    } catch (error) {
      setLoading(false);
      message.error("Faild to add transection");
    }
  };

  return (
    <Layout>
      {/* spinner  */}
      {loading && <Spinner />}

      {/* filter */}
      <div className="filters">
        <div>
          <h6>Select Frequency</h6>
          <Select value={frequency} onChange={(values) => setFrequency(values)}>
            <h6>Select Frequency</h6>
            <Select.Option value="7">Last 1 Week</Select.Option>
            <Select.Option value="30">Last 1 Month</Select.Option>
            <Select.Option value="365">Last 1 Year</Select.Option>
            <Select.Option value="custom">Custom</Select.Option>
          </Select>

          {frequency === "custom" && (
            <RangePicker
              value={selectedDate}
              onChange={(values) => setSelectedate(values)}
            />
          )}
        </div>
        <div>
          <h6>Select Type</h6>
          <Select value={type} onChange={(values) => setType(values)}>
            <h6>Select Frequency</h6>
            <Select.Option value="all">ALL</Select.Option>
            <Select.Option value="income">INCOME</Select.Option>
            <Select.Option value="expense">EXPENSE</Select.Option>
          </Select>

          {frequency === "custom" && (
            <RangePicker
              value={selectedDate}
              onChange={(values) => setSelectedate(values)}
            />
          )}
        </div>

        {/* graph switch */}

        <div className="switch-icons"> 

            <UnorderedListOutlined className={`mx-2 ${
              viewData === "table" ? "active-icon" : "inactive-icon"
            }`} onClick={() => setViewData("table")} />

            <AreaChartOutlined  className={`mx-2 ${
              viewData === "analytics" ? "active-icon" : "inactive-icon"
            }`} onClick={() => setViewData("analytics")} />

          </div>

          {/* graph */}

        <div>
          
          <button
            className="btn btn-primary"
            onClick={() => setShowModal(true)}
          >
            Add New
          </button>
        </div>
      </div>
      {/* filter end */}

      {/*  table data  */}
      <div className="content">
        {viewData === "table" ? (
          <Table columns={columns} dataSource={allTransection} />
        ) : (
          <Analytics allTransection={allTransection} />
        )}
      </div>
      {/* table end */}

      {/* model form */}
      <Modal
        title={editable ? 'Edit Transaction' : 'Add Transection'}
        open={showModal}
        onCancel={() => setShowModal(false)}
        footer={false}
      >
        <Form Layout="vertical" onFinish={handleSubmit} initialValues={editable}>
          <Form.Item label="amount" name="amount">
            <Input type="text" />
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
            <Input type="date" />
          </Form.Item>

          <Form.Item label="Refrence" name="refrence">
            <Input type="text" />
          </Form.Item>

          <Form.Item label="Description" name="description">
            <Input type="text" />
          </Form.Item>

          <div className="d-flex justify-content-end ">

            <button type="submit" className="btn btn-primary">
              Save
            </button>
          </div>

        </Form>
      </Modal>

      {/* model end */}

    </Layout>
  );
};

export default Homepage;

//9th video remaning
