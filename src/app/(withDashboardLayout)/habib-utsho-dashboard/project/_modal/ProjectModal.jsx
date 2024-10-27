import { Modal, Form, Button, message, Upload, Switch, Tag, Input } from "antd";
import { useCreateProject, useUpdateProject } from "@/hooks/project.hook"; // Adjust import based on your file structure
import MyInp from "@/ui/Form/MyInp";
import { UploadOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";

const toolbarOptions = [
  [{ header: [1, 2, false] }],
  ["bold", "italic", "underline"],
  ["blockquote", "code-block"],
  [{ list: "ordered" }, { list: "bullet" }],
  [{ color: [] }, { background: [] }], // Dropdown for color
  ["link", "image"],
  ["clean"], // Remove formatting button
];

const ProjectModal = ({
  visible,
  setVisible,
  editingProject,
  setEditingProject,
}) => {
  const [form] = Form.useForm();
  const { mutate: createProject, isPending: isLoadingCreateProject } =
    useCreateProject();
  const { mutate: updateProject, isPending: isLoadingUpdateProject } =
    useUpdateProject();
  const [fileList, setFileList] = useState({ logo: [], banner: [] });
  const [projectDescription, setProjectDescription] = useState("");

  // Technologies
  const [selectedTechnologiesValues, setSelectedTechnologiesValues] = useState(
    []
  );
  const [technologiesInpValue, setTechnologiesInpValue] = useState("");

  // Tags
  const [selectedTagsValues, setSelectedTagsValues] = useState([]);
  const [tagsInpValue, setTagsInpValue] = useState("");

  useEffect(() => {
    if (editingProject) {
      form.setFieldsValue({
        ...editingProject,
        isFeatured: editingProject.isFeatured,
        technologies: editingProject.technologies,
        tags: editingProject.tags,
      });
      setProjectDescription(editingProject?.description || "");
      setSelectedTechnologiesValues(editingProject?.technologies || []);
      setSelectedTagsValues(editingProject?.tags || []);
      setFileList({
        logo: editingProject.logo ? [{ url: editingProject.logo }] : [],
        banner: editingProject.banner ? [{ url: editingProject.banner }] : [],
      });
    }
  }, [editingProject, form]);

  const handleAddTechnologies = (e) => {
    e.preventDefault();
    const trimmedValue = technologiesInpValue.trim();
    if (trimmedValue && !selectedTechnologiesValues.includes(trimmedValue)) {
      setSelectedTechnologiesValues([
        ...selectedTechnologiesValues,
        trimmedValue,
      ]);
      setTechnologiesInpValue("");
    }
  };

  const handleRemoveTechnologies = (removedValue) => {
    setSelectedTechnologiesValues(
      selectedTechnologiesValues.filter((value) => value !== removedValue)
    );
  };

  const handleAddTags = (e) => {
    e.preventDefault();
    const trimmedValue = tagsInpValue.trim();
    if (trimmedValue && !selectedTagsValues.includes(trimmedValue)) {
      setSelectedTagsValues([...selectedTagsValues, trimmedValue]);
      setTagsInpValue("");
    }
  };

  const handleRemoveTags = (removedValue) => {
    setSelectedTagsValues(
      selectedTagsValues.filter((value) => value !== removedValue)
    );
  };

  const handleCreateUpdateProject = async (values) => {
    try {
      values.technologies = selectedTechnologiesValues;
      values.tags = selectedTagsValues;
      values.description = projectDescription;

      const formData = new FormData();
      formData.append("data", JSON.stringify(values));

      // Validate file uploads
      if (
        !fileList.logo ||
        fileList.logo?.length === 0 ||
        !fileList.banner ||
        fileList.banner?.length === 0
      ) {
        message.error("Please upload a logo and banner");
        return;
      }

      // Append files to FormData with checks
      if (
        fileList.logo &&
        fileList.logo?.length > 0 &&
        fileList.logo?.[0]?.originFileObj
      ) {
        console.log("hi");
        formData.append("logo", fileList.logo?.[0]?.originFileObj);
      }
      if (
        fileList.banner &&
        fileList.banner?.length > 0 &&
        fileList.banner?.[0]?.originFileObj
      ) {
        formData.append("banner", fileList.banner?.[0].originFileObj);
      }

      const action = editingProject ? updateProject : createProject;
      const onSuccessMessage = editingProject
        ? "Project updated successfully"
        : "Project created successfully";
      const payload = editingProject
        ? { payload: formData, id: editingProject._id }
        : formData;

      action(payload, {
        onSuccess: (res) => {
          message.success(res?.message || onSuccessMessage);
          form.resetFields();
          setVisible(false);
          setFileList({ logo: [], banner: [] });
          setProjectDescription("");
          setSelectedTechnologiesValues([]);
          setSelectedTagsValues([]);
          if (editingProject) {
            setEditingProject(null);
          }
        },
      });
    } catch (error) {
      message.error(error?.message || "Failed to process project");
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
        onFinish={handleCreateUpdateProject} // Fixed the event handler to use onFinish
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

        <div className="flex items-center gap-4">
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
        </div>

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

        {/* Demo URL */}
        <MyInp
          type="text"
          name="demoUrl"
          label="Live URL"
          rules={[{ required: true, message: "Please input the Live URL!" }]}
          placeholder="Enter project Live URL"
        />
        {/* Github frontend */}
        <MyInp
          type="text"
          name={["githubUrl", "frontend"]}
          label="Frontend GitHub URL"
          placeholder="Enter frontend GitHub URL"
        />
        <MyInp
          type="text"
          name={["githubUrl", "backend"]}
          label="Backend GitHub URL"
          placeholder="Enter backend GitHub URL"
        />

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

        {/* Tags */}
        <Form.Item name="tags" label="Tags">
          <div>
            {selectedTagsValues.map((value) => (
              <Tag
                key={value}
                closable
                onClose={() => handleRemoveTags(value)}
                style={{ marginBottom: 5 }}
              >
                {value}
              </Tag>
            ))}
            {selectedTagsValues?.length > 0 && (
              <Tag
                className="text-white bg-danger font-semibold shadow-md mb-[5px] cursor-pointer"
                onClick={() => setSelectedTagsValues([])}
              >
                Clear all
              </Tag>
            )}
            <Input
              placeholder="Add a technology and press enter to add it to the list"
              value={tagsInpValue}
              onChange={(e) => setTagsInpValue(e.target.value)}
              onPressEnter={handleAddTags}
              onBlur={handleAddTags}
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

        <Button
          loading={isLoadingCreateProject || isLoadingUpdateProject}
          type="primary"
          htmlType="submit"
        >
          {editingProject ? "Update Project" : "Create Project"}
        </Button>
      </Form>
    </Modal>
  );
};

export default ProjectModal;
