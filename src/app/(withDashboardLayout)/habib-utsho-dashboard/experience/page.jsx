"use client";

import { Empty, Table, Popconfirm, Skeleton, Button } from "antd";
import { DeleteFilled, EditOutlined } from "@ant-design/icons";
import {
  useDeleteExperience,
  useGetAllExperiences,
} from "@/hooks/experience.hook";
import { useState, useEffect } from "react";
import ExperienceModal from "./_modal/ExperienceModal";

const Experience = () => {
  const [pagination, setPagination] = useState({ limit: 10, page: 1 });
  const [isLoadingDeleteId, setIsLoadingDeleteId] = useState(null);
  const [editingExperience, setEditingExperience] = useState(null);
  const [isExperienceModalVisible, setIsExperienceModalVisible] =
    useState(false);

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
      <ExperienceModal
        visible={isExperienceModalVisible}
        setVisible={setIsExperienceModalVisible}
        editingExperience={editingExperience}
        setEditingExperience={setEditingExperience}
      />
    </div>
  );
};

export default Experience;
