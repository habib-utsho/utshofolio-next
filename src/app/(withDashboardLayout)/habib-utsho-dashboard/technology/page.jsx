"use client";

import { Empty, Table, Popconfirm, Skeleton, Button } from "antd";
import { DeleteFilled, EditOutlined, TrophyOutlined } from "@ant-design/icons";
import {
  useDeleteTechnology,
  useGetAllTechnologies,
} from "@/hooks/technology.hook"; // Adjust the hook path based on your file structure
import { useState, useEffect } from "react";
import TechnologyModal from "./_modal/TechnologyModal";

const Technology = () => {
  const [pagination, setPagination] = useState({ limit: 10, page: 1 });
  const [isLoadingDeleteId, setIsLoadingDeleteId] = useState(null);
  const [editingTechnology, setEditingTechnology] = useState(null);
  const [isTechnologyModalVisible, setIsTechnologyModalVisible] =
    useState(false);

  const { data: technologies, isPending: isLoadingTechnologies } =
    useGetAllTechnologies([
      { name: "limit", value: pagination.limit },
      { name: "page", value: pagination.page },
    ]);

  const { mutate: deleteTechnology, isPending: isLoadingDeleteTechnology } =
    useDeleteTechnology();

  const columns = [
    {
      title: "Technology Name",
      dataIndex: "name", // Update field names as per your data structure
    },
    {
      title: "Category",
      dataIndex: "category", // Update field names as per your data structure
    },
    {
      title: "Is featured?",
      dataIndex: "isFeatured", // Update field names as per your data structure
      render: (data) =>
        data ? (
          <span className="text-purple-500 font-bold">
            <TrophyOutlined /> Featured
          </span>
        ) : (
          <span>Not featured</span>
        ),
    },
    {
      title: "Actions",
      render: (_, record) => (
        <div className="flex gap-2">
          <Button
            type="primary"
            icon={<EditOutlined />}
            onClick={() => {
              setEditingTechnology(record);
              setIsTechnologyModalVisible(true);
            }}
          >
            Edit
          </Button>
          <Popconfirm
            title="Delete the technology"
            description="Are you sure to delete this technology?"
            onConfirm={() => handleDeleteTechnology(record._id)}
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

  const handleDeleteTechnology = async (id) => {
    setIsLoadingDeleteId(id);
    deleteTechnology(id);
  };

  useEffect(() => {
    if (!isLoadingDeleteTechnology) {
      setIsLoadingDeleteId(null);
    }
  }, [isLoadingDeleteTechnology]);

  return (
    <div className="p-6">
      <div className="flex justify-between items-center gap-4 flex-wrap">
        <h2 className="font-bold text-xl md:text-2xl text-black mb-4">
          Technologies
        </h2>
        <Button
          type="primary"
          className="mb-4"
          onClick={() => setIsTechnologyModalVisible(true)}
        >
          Add Technology
        </Button>
      </div>

      {isLoadingTechnologies ? (
        <>
          <Skeleton active />
          <Skeleton active />
          <Skeleton active />
        </>
      ) : technologies?.meta?.total === 0 ? (
        <Empty description="No technology records found!" />
      ) : (
        <Table
          columns={columns}
          dataSource={technologies?.data}
          rowKey="_id"
          pagination={{
            position: ["bottomCenter"],
            current: pagination.page,
            pageSize: pagination.limit,
            total: technologies?.meta?.total,
            onChange: (page, pageSize) =>
              setPagination({ page, limit: pageSize }),
          }}
        />
      )}

      {/* Modal */}
      <TechnologyModal
        visible={isTechnologyModalVisible}
        setVisible={setIsTechnologyModalVisible}
        editingTechnology={editingTechnology}
        setEditingTechnology={setEditingTechnology}
      />
    </div>
  );
};

export default Technology;
