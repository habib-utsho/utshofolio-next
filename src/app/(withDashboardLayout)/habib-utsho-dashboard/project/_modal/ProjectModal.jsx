import { Modal, Form, Button, message, Upload, Switch } from "antd";
import { useCreateProject } from "@/hooks/project.hook"; // Adjust import based on your file structure
import MyInp from "@/ui/Form/MyInp";
import { UploadOutlined } from "@ant-design/icons";
import { useState } from "react";

const ProjectModal = ({ visible, setVisible }) => {
  const [form] = Form.useForm();
  const { mutate: createProject, isPending } = useCreateProject();
  const [fileList, setFileList] = useState({
    logo: [],
    banner: [],
  });

  const createProjectHandler = async (values) => {
    try {
      const formData = new FormData();

      values.forEach((value, key) => {
        formData.append(key, value);
      });

      if (
        fileList.logo.length > 0 &&
        fileList.logo[0]?.originFileObj &&
        fileList.banner[0]?.originFileObj
      ) {
        formData.append("logo", fileList.logo[0]?.originFileObj);
        formData.append("banner", fileList.banner[0]?.originFileObj);
      }

      createProject(formData);
      form.resetFields();
      setVisible(false);
    } catch (error) {
      message.error("Failed to create project");
    }
  };

  return (
    <Modal
      title="Create New Project"
      width={800}
      visible={visible}
      onCancel={() => setVisible(false)}
      footer={null}
    >
      <Form
        form={form}
        layout="vertical"
        onFinish={createProjectHandler} // Fixed the event handler to use onFinish
      >
        <MyInp
          type="text"
          name="title"
          label="Title"
          rules={[
            { required: true, message: "Please input the project title!" },
          ]}
          placeholder="Enter project title"
        />

        {/* Logo upload */}
        <Form.Item
          label="Logo"
          valuePropName="fileList"
          getValueFromEvent={(e) => {
            if (Array.isArray(e)) {
              return e;
            }
            return e && e.fileList;
          }}
        >
          <Upload
            listType="picture-card"
            fileList={fileList.logo}
            onChange={({ fileList: newFileList }) =>
              setFileList((prev) => ({ ...prev, logo: newFileList }))
            }
            customRequest={({ file, onSuccess }) => {
              const reader = new FileReader();
              reader.onload = () => {
                onSuccess({ url: reader.result }, file);
              };
              reader.readAsDataURL(file);
            }}
            showUploadList={{
              showPreviewIcon: true,
              showRemoveIcon: true,
            }}
            accept="image/*"
          >
            {fileList.logo.length >= 1 ? null : (
              <div>
                <UploadOutlined />
                <div>Upload Logo</div>
              </div>
            )}
          </Upload>
        </Form.Item>

        {/* Banner upload */}
        <Form.Item
          label="Banner"
          valuePropName="fileList"
          getValueFromEvent={(e) => {
            if (Array.isArray(e)) {
              return e;
            }
            return e && e.fileList;
          }}
        >
          <Upload
            listType="picture-card"
            fileList={fileList.banner}
            onChange={({ fileList: newFileList }) =>
              setFileList((prev) => ({ ...prev, banner: newFileList }))
            }
            customRequest={({ file, onSuccess }) => {
              const reader = new FileReader();
              reader.onload = () => {
                onSuccess({ url: reader.result }, file);
              };
              reader.readAsDataURL(file);
            }}
            showUploadList={{
              showPreviewIcon: true,
              showRemoveIcon: true,
            }}
            accept="image/*"
          >
            {fileList.banner.length >= 1 ? null : (
              <div>
                <UploadOutlined />
                <div>Upload Banner</div>
              </div>
            )}
          </Upload>
        </Form.Item>

        <MyInp
          type="textarea"
          name="description"
          label="Description"
          rules={[
            {
              required: true,
              message: "Please input the project description!",
            },
          ]}
          placeholder="Enter project description"
        />

        <MyInp
          type="select"
          name="category"
          label="Category"
          rules={[{ required: true, message: "Please select a category!" }]}
          options={[
            { value: "Full Stack", label: "Full Stack" },
            { value: "Frontend", label: "Frontend" },
            { value: "Backend", label: "Backend" },
          ]}
          placeholder="Select a category"
        />

        <MyInp
          type="text"
          name="technologies"
          label="Technologies"
          rules={[
            { required: true, message: "Please input the technologies used!" },
          ]}
          placeholder="Comma separated list of technologies"
        />

        <Form.Item label="Featured" name={"isFeatured"}>
          <Switch
            checkedChildren="Yes"
            unCheckedChildren="No"
            defaultChecked={false}
            onChange={(checked) => form.setFieldsValue({ isFeatured: checked })}
          />
        </Form.Item>

        <MyInp
          type="select"
          name="status"
          label="Status"
          rules={[
            { required: true, message: "Please select the project status!" },
          ]}
          options={[
            { value: "In Progress", label: "In Progress" },
            { value: "Completed", label: "Completed" },
          ]}
          placeholder="Select status"
        />

        <MyInp
          type="select"
          name="role"
          label="Role"
          rules={[{ required: true, message: "Please select a role!" }]}
          options={[
            { value: "Full Stack Developer", label: "Full Stack Developer" },
            { value: "Frontend Developer", label: "Frontend Developer" },
            { value: "Backend Developer", label: "Backend Developer" },
          ]}
          placeholder="Select role"
        />

        <Button loading={isPending} type="primary" htmlType="submit">
          Create Project
        </Button>
      </Form>
    </Modal>
  );
};

export default ProjectModal;
