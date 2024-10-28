"use client";

import { Empty, Table, Popconfirm, Skeleton, Button } from "antd";
import { DeleteFilled, EditOutlined } from "@ant-design/icons";
import { useDeleteEducation, useGetAllEducation } from "@/hooks/education.hook"; // Adjust the hook path based on your file structure
import { useState, useEffect } from "react";
import EducationModal from "./_modal/EducationModal"; // Adjust the modal path if necessary

const Education = () => {
  const [pagination, setPagination] = useState({ limit: 10, page: 1 });
  const [isLoadingDeleteId, setIsLoadingDeleteId] = useState(null);
  const [editingEducation, setEditingEducation] = useState(null);
  const [isEducationModalVisible, setIsEducationModalVisible] = useState(false);

  const { data: educations, isPending: isLoadingEducations } =
    useGetAllEducation([
      { name: "limit", value: pagination.limit },
      { name: "page", value: pagination.page },
    ]);

  const { mutate: deleteEducation, isPending: isLoadingDeleteEducation } =
    useDeleteEducation();

  const columns = [
    {
      title: "Institute Name",
      dataIndex: "instituteName",
    },
    {
      title: "Department",
      dataIndex: "department",
    },
    {
      title: "Time Period",
      dataIndex: "timePeriod",
    },
    {
      title: "Location",
      dataIndex: "location",
    },
    {
      title: "Actions",
      render: (_, record) => (
        <div className="flex gap-2">
          <Button
            type="primary"
            icon={<EditOutlined />}
            onClick={() => {
              setEditingEducation(record);
              setIsEducationModalVisible(true);
            }}
          >
            Edit
          </Button>
          <Popconfirm
            title="Delete the education"
            description="Are you sure to delete this education?"
            onConfirm={() => handleDeleteEducation(record._id)}
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

  const handleDeleteEducation = async (id) => {
    setIsLoadingDeleteId(id);
    deleteEducation(id);
  };

  useEffect(() => {
    if (!isLoadingDeleteEducation) {
      setIsLoadingDeleteId(null);
    }
  }, [isLoadingDeleteEducation]);

  return (
    <div className="p-6">
      <div className="flex justify-between items-center gap-4 flex-wrap">
        <h2 className="font-bold text-xl md:text-2xl text-black mb-4">
          Education
        </h2>
        <Button
          type="primary"
          className="mb-4"
          onClick={() => setIsEducationModalVisible(true)}
        >
          Add Education
        </Button>
      </div>

      {isLoadingEducations ? (
        <>
          <Skeleton active />
          <Skeleton active />
          <Skeleton active />
        </>
      ) : educations?.meta?.total === 0 ? (
        <Empty description="No education records found!" />
      ) : (
        <Table
          columns={columns}
          dataSource={educations?.data}
          rowKey="_id"
          pagination={{
            position: ["bottomCenter"],
            current: pagination.page,
            pageSize: pagination.limit,
            total: educations?.meta?.total,
            onChange: (page, pageSize) =>
              setPagination({ page, limit: pageSize }),
          }}
        />
      )}

      {/* Modal */}
      <EducationModal
        visible={isEducationModalVisible}
        setVisible={setIsEducationModalVisible}
        editingEducation={editingEducation}
        setEditingEducation={setEditingEducation}
      />
    </div>
  );
};

export default Education;
