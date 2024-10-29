"use client";
import { Tabs, Row, Col, Card, Skeleton, Typography } from "antd";
import {
  UserOutlined,
  AppstoreOutlined,
  FolderOutlined,
  TagsOutlined,
  FileOutlined,
  TrophyOutlined,
  BookOutlined,
  ReadOutlined,
} from "@ant-design/icons";
import { useGetDashboardStats } from "@/hooks/stats.hook";

const { Title } = Typography;
const { TabPane } = Tabs;

const PortfolioDashboard = () => {
  const { data: stats, isPending: isPending } = useGetDashboardStats();

  // Example of portfolio stats data

  const {
    totalProject,
    totalFeaturedProject,
    totalEducation,
    totalExperience,
    totalCourse,
  } = stats?.data || {};

  console.log(stats, "stats");

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
                  title="Total Best Projects"
                  bordered={false}
                  extra={<TrophyOutlined />}
                >
                  <div className="text-2xl font-bold">
                    {totalFeaturedProject}
                  </div>
                </Card>
              </Col>
              <Col xs={24} sm={12} md={8} lg={6} xl={6}>
                <Card
                  title="Total Projects"
                  bordered={false}
                  extra={<FileOutlined />}
                >
                  <div className="text-2xl font-bold">{totalProject}</div>
                </Card>
              </Col>
              <Col xs={24} sm={12} md={8} lg={6} xl={6}>
                <Card
                  title="Total Education"
                  bordered={false}
                  extra={<BookOutlined />}
                >
                  <div className="text-2xl font-bold">{totalEducation}</div>
                </Card>
              </Col>
              <Col xs={24} sm={12} md={8} lg={6} xl={6}>
                <Card
                  title="Total Experience"
                  bordered={false}
                  extra={<TagsOutlined />}
                >
                  <div className="text-2xl font-bold">{totalExperience}</div>
                </Card>
              </Col>
              <Col xs={24} sm={12} md={8} lg={6} xl={6}>
                <Card
                  title="Total Course"
                  bordered={false}
                  extra={<ReadOutlined />}
                >
                  <div className="text-2xl font-bold">{totalCourse}</div>
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
