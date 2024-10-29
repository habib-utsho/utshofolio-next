"use client";

import { Empty, Table, Popconfirm, Skeleton, Button } from "antd";
import { DeleteFilled, EditOutlined } from "@ant-design/icons";
import { useDeleteProject, useGetAllProjects } from "@/hooks/project.hook";
import Image from "next/image";
import { useState, useEffect } from "react";
import ProjectModal from "./_modal/ProjectModal";

const Project = () => {
  const [pagination, setPagination] = useState({ limit: 10, page: 1 });
  const [isLoadingDeleteId, setIsLoadingDeleteId] = useState(null);
  const [editingProject, setEditingProject] = useState(null);
  const [isProjectModalVisible, setIsProjectModalVisible] = useState(false);
  const { data: projects, isPending: isLoadingProjects } = useGetAllProjects([
    {
      name: "limit",
      value: pagination.limit,
      name: "page",
      value: pagination.page,
    },
  ]);

  const { mutate: deleteProject, isPending: isLoadingDeleteProject } =
    useDeleteProject();
  const columns = [
    {
      title: "Project",
      render: (_, record) => (
        <div className="flex items-center gap-2">
          <Image
            src={record?.logo}
            alt={record?.title}
            width={40}
            height={40}
          />
          <p>{record?.title}</p>
        </div>
      ),
    },
    {
      title: "Banner",
      dataIndex: "banner",
      render: (banner) => (
        <Image src={banner} alt={banner} width={40} height={40} />
      ),
    },
    {
      title: "Category",
      dataIndex: "category",
    },
    {
      title: "Technologies",
      dataIndex: "technologies",
      render: (technologies) => technologies.join(", "),
    },
    {
      title: "Actions",
      render: (_, record) => (
        <div className="flex gap-2">
          <Button
            type="primary"
            icon={<EditOutlined />}
            onClick={() => {
              setEditingProject(record);
              setIsProjectModalVisible(true);
            }}
          >
            Edit
          </Button>
          <Popconfirm
            title="Delete the project"
            description="Are you sure to delete this project?"
            onConfirm={() => handleDeleteProject(record._id)}
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

  const handleDeleteProject = async (id) => {
    setIsLoadingDeleteId(id);
    deleteProject(id);
  };

  useEffect(() => {
    if (!isLoadingDeleteProject) {
      setIsLoadingDeleteId(null);
    }
  }, [isLoadingDeleteProject, setIsLoadingDeleteId]);

  return (
    <div className="p-6">
      <div className={"flex justify-between items-center gap-4 flex-wrap"}>
        <h2 className="font-bold text-xl md:text-2xl text-black mb-4">
          Projects
        </h2>
        <Button
          type="primary"
          className="mb-4"
          onClick={() => setIsProjectModalVisible(true)}
        >
          Add project
        </Button>
      </div>

      {isLoadingProjects ? (
        <>
          <Skeleton active />
          <Skeleton active />
          <Skeleton active />
        </>
      ) : projects?.meta?.total === 0 ? (
        <Empty description="No projects found!" />
      ) : (
        <Table
          columns={columns}
          dataSource={projects?.data}
          rowKey="_id"
          pagination={{
            position: ["bottomCenter"],
            current: pagination.page,
            pageSize: pagination.limit,
            total: projects?.meta?.total,
            onChange: (page, pageSize) =>
              setPagination({ page, limit: pageSize }),
          }}
        />
      )}

      {/* Modal */}
      <ProjectModal
        visible={isProjectModalVisible}
        setVisible={setIsProjectModalVisible}
        editingProject={editingProject}
        setEditingProject={setEditingProject}
      />
    </div>
  );
};

export default Project;
