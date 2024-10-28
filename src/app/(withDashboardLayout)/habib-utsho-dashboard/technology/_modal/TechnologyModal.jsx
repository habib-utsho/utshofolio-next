import { Modal, Form, Button, message, Switch } from "antd";
import MyInp from "@/ui/Form/MyInp";
import { useEffect } from "react";
import {
  useCreateTechnology,
  useUpdateTechnology,
} from "@/hooks/technology.hook";

const TechnologyModal = ({
  visible,
  setVisible,
  editingTechnology,
  setEditingTechnology,
}) => {
  const [form] = Form.useForm();
  const { mutate: createTechnology, isPending: isLoadingCreateTechnology } =
    useCreateTechnology();
  const { mutate: updateTechnology, isPending: isLoadingUpdateTechnology } =
    useUpdateTechnology();

  useEffect(() => {
    if (editingTechnology) {
      form.setFieldsValue({
        ...editingTechnology,
      });
    }
  }, [editingTechnology, form]);

  const handleCreateUpdateTechnology = async (values) => {
    try {
      const action = editingTechnology ? updateTechnology : createTechnology;
      const onSuccessMessage = editingTechnology
        ? "Technology updated successfully"
        : "Technology created successfully";
      const payload = editingTechnology
        ? { payload: values, id: editingTechnology._id }
        : values;

      action(payload, {
        onSuccess: (res) => {
          message.success(res?.message || onSuccessMessage);
          form.resetFields();
          setVisible(false);
          if (editingTechnology) {
            setEditingTechnology(null);
          }
        },
      });
    } catch (error) {
      message.error(error?.message || "Failed to process technology");
    }
  };

  return (
    <Modal
      title={editingTechnology ? "Update Technology" : "Create New Technology"}
      width={800}
      open={visible}
      onCancel={() => {
        setVisible(false);
        setEditingTechnology(null);
        form.resetFields();
      }}
      footer={null}
    >
      <Form
        form={form}
        layout="vertical"
        onFinish={handleCreateUpdateTechnology}
      >
        <MyInp
          type="text"
          name="name"
          label="Technology Name"
          rules={[
            { required: true, message: "Please input the technology name!" },
          ]}
          placeholder="Enter technology name"
        />
        <MyInp
          type="select"
          name="category"
          label="Category"
          rules={[{ required: true, message: "Please select a category!" }]}
          placeholder="Select a category"
          options={["Frontend", "Backend", "Full Stack", "Tools"]?.map(
            (cat) => ({
              name: cat,
              value: cat,
            })
          )}
        />

        <Form.Item label="Is Featured?" name="isFeatured">
          <Switch
            checkedChildren="Yes"
            unCheckedChildren="No"
            defaultChecked={false}
            onChange={(checked) =>
              form.setFieldsValue({ isDeprecated: checked })
            }
          />
        </Form.Item>

        <Button
          loading={isLoadingCreateTechnology || isLoadingUpdateTechnology}
          type="primary"
          htmlType="submit"
        >
          {editingTechnology ? "Update Technology" : "Create Technology"}
        </Button>
      </Form>
    </Modal>
  );
};

export default TechnologyModal;
