import "antd/dist/antd.css";
import "../styles/vars.css";
import "../styles/global.css";
import React, { useEffect, useState } from "react";
import {
  BellFilled,
  ExportOutlined,
  FileAddOutlined,
  FundOutlined,
  HomeOutlined,
  SolutionOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Grid, Layout, Menu, Typography } from "antd";
import { useRouter } from "next/router";
import { QueryClientProvider, QueryClient } from "react-query";
import { useAtom } from "jotai";
import { authentication } from "src/hook/persistanceData";
import Head from "next/head";

const { Header, Sider, Content, Footer } = Layout;

export default function MyApp({ Component, pageProps }) {
  const [auth, setAuth] = useAtom(authentication);
  const screens = Grid.useBreakpoint();
  const [collapsed, setCollapsed] = useState(false);
  const [queryClient] = React.useState(() => new QueryClient());
  const router = useRouter();

  const menu = [
    {
      key: 1,
      icon: <HomeOutlined />,
      label: "หน้าแรก",
      link: "/thaworn-ap/home",
    },
    {
      key: 2,
      icon: <FileAddOutlined />,
      label: "แจ้งปัญหา",
      link: "/thaworn-ap/report",
    },
    {
      key: 3,
      icon: <SolutionOutlined />,
      label: "รายการแจ้งซ่อม",
      link: "/thaworn-ap/list-report",
    },
    {
      key: 4,
      icon: <FundOutlined />,
      label: "จัดการสาขา",
      link: "/thaworn-ap/branch-management",
    },
    {
      key: 5,
      icon: <TeamOutlined />,
      label: "จัดการเจ้าหน้าที่",
      link: "/thaworn-ap/personnel-management",
    },
    {
      key: 6,
      icon: <ExportOutlined />,
      label: "ออกจากระบบ",
      link: "/thaworn-ap/login",
    },
  ];

  const checkAuth =
    !auth &&
    router.pathname !== "/thaworn-ap/login" &&
    router.pathname !== "/thaworn-ap/register";

  // const { menu } = useMyApp();
  const routerPage = (key: number): void => {
    const found = menu.find((item) => item.key === key);
    if (key === 6) {
      setAuth(undefined);
    }
    router.push(found.link);
  };

  const routeToProfilePage = () => {
    router.push(`/thaworn-ap/profile/${auth.login_id}`);
  };

  useEffect(() => {
    if (checkAuth) {
      router.push("/thaworn-ap/login");
    }

    if (!screens.lg) {
      setCollapsed(true);
    } else {
      setCollapsed(false);
    }
  }, [screens]);

  return (
    <>
      <Head>
        <title>Thaworn Ap</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      {router.pathname === "/thaworn-ap/register" ||
      router.pathname === "/thaworn-ap/login" ? (
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
        </QueryClientProvider>
      ) : (
        <Layout style={{ height: "100%" }}>
          <Sider
            className="fixed-sider"
            collapsible
            collapsed={collapsed}
            onCollapse={(value) => setCollapsed(value)}
          >
            <Menu
              theme="dark"
              mode="inline"
              defaultSelectedKeys={["1"]}
              onClick={(value) => routerPage(Number(value.key))}
              items={menu.map((item) => ({
                key: item.key,
                icon: item.icon,
                label: item.label,
              }))}
            />
          </Sider>
          <Layout className="site-layout">
            <Header style={{ padding: 0, background: "white" }}>
              <div className="flex flex-wrap">
                <div className="w-0 lg:w-1/3"></div>
                <div className="w-4/6 lg:w-1/3">
                  <div className="flex items-center justify-end lg:justify-center pt-3">
                    <Typography.Title level={screens.lg ? 3 : 4}>
                      Thaworn Apartment
                    </Typography.Title>
                  </div>
                </div>
                <div className="w-2/6 lg:w-1/3">
                  <div className="flex justify-end pr-5">
                    <div className="flex space-x-5">
                      <div>
                        <BellFilled style={{ fontSize: 25 }} />
                      </div>
                      <a
                        className="cursor-pointer"
                        onClick={() => routeToProfilePage()}
                      >
                        <UserOutlined style={{ fontSize: 25 }} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Header>
            <Content
              style={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                marginLeft: collapsed ? "80px" : "200px",
              }}
            >
              <div style={{ flex: "1", padding: "0 20px" }}>
                <QueryClientProvider client={queryClient}>
                  <div className="p-10 min-h-screen">
                    <div className="rounded-lg bg-white shadow-lg">
                      <Component {...pageProps} />
                    </div>
                  </div>
                </QueryClientProvider>
              </div>
            </Content>
            <Footer style={{ textAlign: "center", background: "white" }}>
              Ant Design ©2023 Created by Ant UED
            </Footer>
          </Layout>
        </Layout>
      )}
    </>
  );
}
