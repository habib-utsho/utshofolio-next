import { Modal, Form, Button, message, Upload, Switch, Tag, Input } from "antd";
import { useCreateProject } from "@/hooks/project.hook"; // Adjust import based on your file structure
import MyInp from "@/ui/Form/MyInp";
import { UploadOutlined } from "@ant-design/icons";
import { useState } from "react";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";

const ProjectModal = ({ visible, setVisible }) => {
  const [form] = Form.useForm();
  const { mutate: createProject, isPending } = useCreateProject();
  const [fileList, setFileList] = useState({
    logo: [],
    banner: [],
  });
  const [projectDescription, setProjectDescription] = useState("");
  const toolbarOptions = [
    [{ header: [1, 2, false] }],
    ["bold", "italic", "underline"],
    ["blockquote", "code-block"],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ color: [] }, { background: [] }], // Dropdown for color
    ["link", "image"],
    ["clean"], // Remove formatting button
  ];

  // Technologies ###
  const [selectedTechnologiesValues, setSelectedTechnologiesValues] = useState(
    []
  );
  const [technologiesInpValue, setTechnologiesInpValue] = useState("");
  const handleAddTechnologies = (e) => {
    e.preventDefault();
    const trimmedValue = technologiesInpValue.trim();
    if (trimmedValue && !selectedTechnologiesValues.includes(trimmedValue)) {
      setSelectedTechnologiesValues([
        ...selectedTechnologiesValues,
        trimmedValue,
      ]);
      setTechnologiesInpValue(""); // Clear input field
    }
  };
  const handleRemoveTechnologies = (removedValue) => {
    const updatedValues = selectedTechnologiesValues.filter(
      (value) => value !== removedValue
    );
    setSelectedTechnologiesValues(updatedValues);
  };

  const createProjectHandler = async (values) => {
    try {
      values.technologies = selectedTechnologiesValues; // Add technologies to the form data
      values.description = projectDescription;
      const formData = new FormData();

      formData.append("data", JSON.stringify(values));

      if (
        fileList.logo?.length > 0 &&
        fileList.logo[0]?.originFileObj &&
        fileList.banner[0]?.originFileObj
      ) {
        formData.append("logo", fileList.logo[0]?.originFileObj);
        formData.append("banner", fileList.banner[0]?.originFileObj);
      }

      // console.log(values);
      // console.log(formData.get("data"));
      // console.log(formData.get("logo"));
      // console.log(formData.get("banner"));

      createProject(formData, {
        onSuccess: () => {
          message.success("Project created successfully");
          // form.resetFields();
          // setVisible(false);
          // setFileList({
          //   logo: [],
          //   banner: [],
          // });
          // setProjectDescription("");
        },
      });
    } catch (error) {
      console.log(error, "error");
      message.error("Failed to create project");
    }
  };

  return (
    <Modal
      title="Create New Project"
      width={800}
      open={visible}
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

        {/* <MyInp
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
        /> */}

        {/* Quill editor */}
        <div className="my-2">
          <ReactQuill
            theme="snow"
            value={projectDescription}
            onChange={setProjectDescription}
            placeholder="Enter project description"
            modules={{
              toolbar: toolbarOptions,
            }}
          />
        </div>

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

        {/* <MyInp
          type="text"
          name="technologies"
          label="Technologies"
          rules={[
            { required: true, message: "Please input the technologies used!" },
          ]}
          placeholder="Comma separated list of technologies"
        /> */}
        {/* Tech */}
        <Form.Item
          name="technologies"
          label="Technologies"
          rules={[
            {
              required: true,
              message: "Please select at least one technology!",
            },
          ]}
        >
          <div>
            {selectedTechnologiesValues.map((value) => (
              <Tag
                key={value}
                closable
                onClose={() => handleRemoveTechnologies(value)}
                style={{ marginBottom: 5 }}
              >
                {value}
              </Tag>
            ))}
            {selectedTechnologiesValues?.length > 0 && (
              <Tag
                className="text-white bg-danger font-semibold shadow-md mb-[5px] cursor-pointer"
                onClick={() => setSelectedTechnologiesValues([])}
              >
                Clear all
              </Tag>
            )}
            <Input
              placeholder="Add a technology and press enter to add it to the list"
              value={technologiesInpValue}
              onChange={(e) => setTechnologiesInpValue(e.target.value)}
              onPressEnter={handleAddTechnologies}
              onBlur={handleAddTechnologies}
              style={{ width: "100%" }}
            />
          </div>
        </Form.Item>

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
