"use client";

import {
  Empty,
  Table,
  Popconfirm,
  Skeleton,
  Button,
  Modal,
  Form,
  message,
  Switch,
} from "antd";
import { DeleteFilled, EditOutlined } from "@ant-design/icons";
import {
  useDeleteExperience,
  useGetAllExperiences,
} from "@/hooks/experience.hook";
import { useState, useEffect } from "react";

import MyInp from "@/ui/Form/MyInp";
import "react-quill/dist/quill.snow.css";
import {
  useCreateExperience,
  useUpdateExperience,
} from "@/hooks/experience.hook";
import dynamic from "next/dynamic";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const toolbarOptions = [
  [{ header: [1, 2, false] }],
  ["bold", "italic", "underline"],
  ["blockquote", "code-block"],
  [{ list: "ordered" }, { list: "bullet" }],
  [{ color: [] }, { background: [] }], // Dropdown for color
  ["link", "image"],
  ["clean"], // Remove formatting button
];

const Experience = () => {
  const [pagination, setPagination] = useState({ limit: 10, page: 1 });
  const [isLoadingDeleteId, setIsLoadingDeleteId] = useState(null);
  const [editingExperience, setEditingExperience] = useState(null);
  const [isExperienceModalVisible, setIsExperienceModalVisible] =
    useState(false);

  const [form] = Form.useForm();
  const { mutate: createExperience, isPending: isLoadingCreateExperience } =
    useCreateExperience();
  const { mutate: updateExperience, isPending: isLoadingUpdateExperience } =
    useUpdateExperience();
  const [description, setDescription] = useState("");

  const { data: experiences, isPending: isLoadingExperiences } =
    useGetAllExperiences([
      { name: "limit", value: pagination.limit },
      { name: "page", value: pagination.page },
    ]);

  const { mutate: deleteExperience, isPending: isLoadingDeleteExperience } =
    useDeleteExperience();

  const columns = [
    {
      title: "Company Name",
      dataIndex: "companyName",
    },
    {
      title: "Role",
      dataIndex: "role",
    },
    {
      title: "Time Period",
      dataIndex: "timePeriod",
    },
    {
      title: "Job Type",
      dataIndex: "jobType",
    },
    {
      title: "Location",
      dataIndex: "location",
    },
    {
      title: "Is Course",
      dataIndex: "isCourse",
      render: (data) => <span>{data ? "Yes" : "No"}</span>,
    },
    {
      title: "Actions",
      render: (_, record) => (
        <div className="flex gap-2">
          <Button
            type="primary"
            icon={<EditOutlined />}
            onClick={() => {
              setEditingExperience(record);
              setIsExperienceModalVisible(true);
            }}
          >
            Edit
          </Button>
          <Popconfirm
            title="Delete the experience"
            description="Are you sure to delete this experience?"
            onConfirm={() => handleDeleteExperience(record._id)}
            okText="Yes"
            cancelText="No"
          >
            <Button
              className="bg-red-500 border-red-500 hover:bg-red-600 hover:border-red-600"
              danger
              icon={<DeleteFilled />}
              loading={isLoadingDeleteId === record._id}
            />
          </Popconfirm>
        </div>
      ),
    },
  ];

  const handleDeleteExperience = async (id) => {
    setIsLoadingDeleteId(id);
    deleteExperience(id);
  };

  useEffect(() => {
    if (!isLoadingDeleteExperience) {
      setIsLoadingDeleteId(null);
    }
  }, [isLoadingDeleteExperience, setIsLoadingDeleteId]);

  useEffect(() => {
    if (editingExperience) {
      form.setFieldsValue({
        ...editingExperience,
      });

      setDescription(editingExperience?.description);
    }
  }, [editingExperience, form]);

  const handleCreateUpdateExperience = async (values) => {
    try {
      values.description = description;

      const action = editingExperience ? updateExperience : createExperience;
      const onSuccessMessage = editingExperience
        ? "Experience updated successfully"
        : "Experience created successfully";
      const payload = editingExperience
        ? { payload: values, id: editingExperience._id }
        : values;

      action(payload, {
        onSuccess: (res) => {
          message.success(res?.message || onSuccessMessage);
          form.resetFields();
          setIsExperienceModalVisible(false);
          if (editingExperience) {
            setEditingExperience(null);
          }
          setDescription("");
        },
      });
    } catch (error) {
      message.error(error?.message || "Failed to process experience");
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center gap-4 flex-wrap">
        <h2 className="font-bold text-xl md:text-2xl text-black mb-4">
          Experiences
        </h2>
        <Button
          type="primary"
          className="mb-4"
          onClick={() => setIsExperienceModalVisible(true)}
        >
          Add experience
        </Button>
      </div>

      {isLoadingExperiences ? (
        <>
          <Skeleton active />
          <Skeleton active />
          <Skeleton active />
        </>
      ) : experiences?.meta?.total === 0 ? (
        <Empty description="No experiences found!" />
      ) : (
        <Table
          columns={columns}
          dataSource={experiences?.data}
          rowKey="_id"
          pagination={{
            position: ["bottomCenter"],
            current: pagination.page,
            pageSize: pagination.limit,
            total: experiences?.meta?.total,
            onChange: (page, pageSize) =>
              setPagination({ page, limit: pageSize }),
          }}
        />
      )}

      {/* Modal */}
      <Modal
        title={
          editingExperience ? "Update Experience" : "Create New Experience"
        }
        width={800}
        open={isExperienceModalVisible}
        onCancel={() => {
          setIsExperienceModalVisible(false);
          setEditingExperience(null);
          form.resetFields();
        }}
        footer={null}
      >
        <Form
          form={form}
          layout="vertical"
          onFinish={handleCreateUpdateExperience} // Fixed the event handler to use onFinish
        >
          <MyInp
            type="text"
            name="companyName"
            label="Company Name"
            rules={[
              { required: true, message: "Please input the company name!" },
            ]}
            placeholder="Enter company name"
          />
          <MyInp
            type="text"
            name="role"
            label="Role"
            rules={[{ required: true, message: "Please input the role!" }]}
            placeholder="Enter role"
          />
          <MyInp
            type="text"
            name="location"
            label="Location"
            placeholder="Enter location"
          />

          {/* Quill editor */}
          <div className="my-2">
            <ReactQuill
              theme="snow"
              value={description}
              onChange={setDescription}
              placeholder="Enter your experience description"
              modules={{
                toolbar: toolbarOptions,
              }}
            />
          </div>

          <MyInp
            type="text"
            name="timePeriod"
            label="Time Period"
            rules={[
              { required: true, message: "Please input the Time Period!" },
            ]}
            placeholder="Enter time period"
          />

          <MyInp
            type="select"
            name="jobType"
            label="Job Type"
            rules={[{ required: true, message: "Please select a job type!" }]}
            options={[
              { value: "Remote", label: "Remote" },
              { value: "On Site", label: "On Site" },
              { value: "Hybrid", label: "Hybrid" },
            ]}
            placeholder="Select a job type"
          />

          <Form.Item label="Is Course?" name={"isCourse"}>
            <Switch
              checkedChildren="Yes"
              unCheckedChildren="No"
              defaultChecked={false}
              onChange={(checked) => form.setFieldsValue({ isCourse: checked })}
            />
          </Form.Item>

          <Button
            loading={isLoadingCreateExperience || isLoadingUpdateExperience}
            type="primary"
            htmlType="submit"
          >
            {editingExperience ? "Update Experience" : "Create Experience"}
          </Button>
        </Form>
      </Modal>
    </div>
  );
};

export default Experience;
