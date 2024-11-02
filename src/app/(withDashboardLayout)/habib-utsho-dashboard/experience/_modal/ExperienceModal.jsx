import { Modal, Form, Button, message, Upload, Switch, Tag, Input } from "antd";
import MyInp from "@/ui/Form/MyInp";
import { useEffect, useState } from "react";
import "react-quill/dist/quill.snow.css";
import {
  useCreateExperience,
  useUpdateExperience,
} from "@/hooks/experience.hook";
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

const ExperienceModal = ({
  visible,
  setVisible,
  editingExperience,
  setEditingExperience,
}) => {
  const [form] = Form.useForm();
  const { mutate: createExperience, isPending: isLoadingCreateExperience } =
    useCreateExperience();
  const { mutate: updateExperience, isPending: isLoadingUpdateExperience } =
    useUpdateExperience();
  const [description, setDescription] = useState("");

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
          setVisible(false);
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
    <Modal
      title={editingExperience ? "Update Experience" : "Create New Experience"}
      width={800}
      open={visible}
      onCancel={() => {
        setVisible(false);
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
          rules={[{ required: true, message: "Please input the Time Period!" }]}
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
  );
};

export default ExperienceModal;
