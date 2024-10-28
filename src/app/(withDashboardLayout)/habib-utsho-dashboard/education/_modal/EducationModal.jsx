import { Modal, Form, Button, message, Switch } from "antd";
import MyInp from "@/ui/Form/MyInp";
import { useEffect } from "react";
import { useCreateEducation, useUpdateEducation } from "@/hooks/education.hook";

const EducationModal = ({
  visible,
  setVisible,
  editingEducation,
  setEditingEducation,
}) => {
  const [form] = Form.useForm();
  const { mutate: createEducation, isPending: isLoadingCreateEducation } =
    useCreateEducation();
  const { mutate: updateEducation, isPending: isLoadingUpdateEducation } =
    useUpdateEducation();

  useEffect(() => {
    if (editingEducation) {
      form.setFieldsValue({
        ...editingEducation,
      });
    }
  }, [editingEducation, form]);

  const handleCreateUpdateEducation = async (values) => {
    try {
      const action = editingEducation ? updateEducation : createEducation;
      const onSuccessMessage = editingEducation
        ? "Education updated successfully"
        : "Education created successfully";
      const payload = editingEducation
        ? { payload: values, id: editingEducation._id }
        : values;

      action(payload, {
        onSuccess: (res) => {
          message.success(res?.message || onSuccessMessage);
          form.resetFields();
          setVisible(false);
          if (editingEducation) {
            setEditingEducation(null);
          }
        },
      });
    } catch (error) {
      message.error(error?.message || "Failed to process education");
    }
  };

  return (
    <Modal
      title={editingEducation ? "Update Education" : "Create New Education"}
      width={800}
      open={visible}
      onCancel={() => {
        setVisible(false);
        setEditingEducation(null);
        form.resetFields();
      }}
      footer={null}
    >
      <Form
        form={form}
        layout="vertical"
        onFinish={handleCreateUpdateEducation}
      >
        <MyInp
          type="text"
          name="instituteName"
          label="Institute Name"
          rules={[
            { required: true, message: "Please input the institute name!" },
          ]}
          placeholder="Enter institute name"
        />
        <MyInp
          type="text"
          name="department"
          label="Department"
          rules={[{ required: true, message: "Please input the department!" }]}
          placeholder="Enter department"
        />
        <MyInp
          type="text"
          name="location"
          label="Location"
          placeholder="Enter location"
        />
        <MyInp
          type="text"
          name="timePeriod"
          label="Time Period"
          rules={[{ required: true, message: "Please input the Time Period!" }]}
          placeholder="Enter time period"
        />

        <Button
          loading={isLoadingCreateEducation || isLoadingUpdateEducation}
          type="primary"
          htmlType="submit"
        >
          {editingEducation ? "Update Education" : "Create Education"}
        </Button>
      </Form>
    </Modal>
  );
};

export default EducationModal;
