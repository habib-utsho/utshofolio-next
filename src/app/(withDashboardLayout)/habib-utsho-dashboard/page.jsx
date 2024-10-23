"use client";
import { Tabs, Row, Col, Card, Skeleton, Typography } from "antd";
import {
  UserOutlined,
  AppstoreOutlined,
  FolderOutlined,
  TagsOutlined,
  FileOutlined,
} from "@ant-design/icons";

const { Title } = Typography;
const { TabPane } = Tabs;

const PortfolioDashboard = () => {
  const isPending = false; // Simulate loading state for skeleton

  // Example of portfolio stats data
  const statsData = {
    totalProjects: 35,
    totalBlogPosts: 15,
    totalClients: 12,
    totalSkills: 8,
    totalCertificates: 5,
  };

  const {
    totalProjects,
    totalBlogPosts,
    totalClients,
    totalSkills,
    totalCertificates,
  } = statsData;

  return (
    <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
      <div className="flex items-center justify-between space-y-2">
        <Title level={2}>
          Hi, Habib Utsho, Welcome to your Portfolio Dashboard 👋
        </Title>
      </div>
      {isPending ? (
        <Skeleton paragraph={{ rows: 14 }} />
      ) : (
        <Tabs defaultActiveKey="1" className="space-y-4">
          <TabPane tab="Overview" key="1">
            <Row gutter={[16, 16]}>
              <Col xs={24} sm={12} md={8} lg={6} xl={6}>
                <Card
                  title="Total Projects"
                  bordered={false}
                  extra={<FolderOutlined />}
                >
                  <div className="text-2xl font-bold">{totalProjects}</div>
                </Card>
              </Col>
              <Col xs={24} sm={12} md={8} lg={6} xl={6}>
                <Card
                  title="Total Blog Posts"
                  bordered={false}
                  extra={<FileOutlined />}
                >
                  <div className="text-2xl font-bold">{totalBlogPosts}</div>
                </Card>
              </Col>
              <Col xs={24} sm={12} md={8} lg={6} xl={6}>
                <Card
                  title="Total Clients"
                  bordered={false}
                  extra={<UserOutlined />}
                >
                  <div className="text-2xl font-bold">{totalClients}</div>
                </Card>
              </Col>
              <Col xs={24} sm={12} md={8} lg={6} xl={6}>
                <Card
                  title="Total Skills"
                  bordered={false}
                  extra={<TagsOutlined />}
                >
                  <div className="text-2xl font-bold">{totalSkills}</div>
                </Card>
              </Col>
              <Col xs={24} sm={12} md={8} lg={6} xl={6}>
                <Card
                  title="Total Certificates"
                  bordered={false}
                  extra={<AppstoreOutlined />}
                >
                  <div className="text-2xl font-bold">{totalCertificates}</div>
                </Card>
              </Col>
            </Row>
          </TabPane>
          <TabPane tab="Achievements" key="2" disabled>
            {/* Add achievements content here */}
          </TabPane>
        </Tabs>
      )}
    </div>
  );
};

export default PortfolioDashboard;
