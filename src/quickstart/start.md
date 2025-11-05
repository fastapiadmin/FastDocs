---
outline: "deep"
title: 快速开始
---
# 快速开始
## 🍪演示环境

- 官网地址：<https://service.fastapiadmin.com>
- 演示地址：<https://service.fastapiadmin.com/web>
- 小程序地址：<https://service.fastapiadmin.com/app>
- 管理员账号：`admin` 密码：`123456`
- 演示账号：`demo` 密码：`123456`

## 👷安装和使用

### 版本说明

| 类型     | 技术栈     | 版本       |
|----------|------------|------------|
| 后端     | Python         | >=3.10       |
| 后端     | FastAPI        | 0.109      |
| 前端     | Node.js        | >= 20.0（推荐使用最新版）|
| 前端     | npm            | 16.14      |
| 前端     | Vue3           | 3.3        |
| Web UI  | ElementPlus     | 2.10.4        |
| 移动端  | Uni App         | 3.0.0       |
| App UI  | Wot Design Uni  | 1.9.1        |
| 数据库   | MySQL           | 8.0 （推荐使用最新版）|
| 中间件   | Redis           | 7.0 （推荐使用最新版）|

### 获取代码

```sh
# 克隆代码到本地
git clone https://gitee.com/tao__tao/FastapiAdmin.git
或
git clone https://github.com/1014TaoTao/FastapiAdmin.git
```

### 本地后端启动

```sh
#  进入后端工程目录
cd backend
# 安装依赖
pip3 install -r requirements.txt
# 启动后端服务
python3 main.py run
或
python3 main.py run--env=dev
# 生成迁移文件
python3 main.py revision "初始化迁移" --env=dev(不加默认为dev)
# 应用迁移
python3 main.py upgrade --env=dev(不加默认为dev)
```

---

### 本地前端启动

```sh
# 进入前端工程目录
cd frontend
# 安装依赖
pnpm install
# 启动前端服务
pnpm run dev
# 构建前端, 生成 `frontend/dist` 目录
pnpm run build
```

---

### 本地小程序h5启动

```sh
# 进入前端工程目录
cd fastapp
# 安装依赖
pnpm install
# 启动前端服务
pnpm run dev:h5
# 构建前端, 生成 `frontend/dist/build/h5` 目录
pnpm run build:h5
```

### 本地项目官网启动

```sh
# 进入前端工程目录
cd fastdocs
# 安装依赖
pnpm install
# 运行文档工程
pnpm run docs:dev
# 构建文档工程, 生成 `fastdocs/dist` 目录
pnpm run docs:build
```

---

### 本地访问地址

- 前端地址: <http://127.0.0.1:5180>
- 接口地址: <http://127.0.0.1:8001/api/v1/docs>
- 管理员账号：`admin` 密码：`123456`
- 演示账号：`demo` 密码：`123456`

### docker 部署

```sh
# 复制脚本 `FastapiAdmin/start.sh` 脚本文件到服务器, 并赋予执行权限
chmod +x start.sh
# 执行脚本
./start.sh
# 查看镜像:
docker images -a
# 查看容器:
docker compose ps
# 查看日志
docker logs -f <容器名>
# 服务停止
docker compose down
# 删除镜像
docker rmi <镜像名>
# 删除容器
docker rm <容器名>
# 后端配置文件目录
FastapiAdmin/backend/env/.env.prod.py
# 前端配置文件目录
FastapiAdmin/frontend/vite.config.ts
和
FastapiAdmin/frontend/.env.production
# 部署文件目录
FastapiAdmin/docker-compose.yaml
和
FastapiAdmin/devops/devops/nginx/nginx.conf

```

## 🔧模块展示

### web 端

| 模块名 <div style="width:60px"/>  | 截图 |
|----------|------|
| 登录      | ![登录](/login.png) |
| 仪表盘    | ![仪表盘](/dashboard.png) |
| 分析页    | ![分析页](/analysis.png) |
| 菜单管理  | ![菜单管理](/menu.png) |
| 部门管理  | ![部门管理](/dept.png) |
| 岗位管理  | ![岗位管理](/position.png) |
| 角色管理  | ![角色管理](/role.png) |
| 用户管理  | ![用户管理](/user.png) |
| 日志管理  | ![日志管理](/log.png) |
| 配置管理  | ![配置管理](/config.png) |
| 在线用户  | ![在线用户](/online.png) |
| 服务器监控 | ![服务器监控](/service.png) |
| 缓存监控  | ![缓存监控](/cache.png) |
| 任务管理  | ![任务管理](/job.png) |
| 字典管理  | ![字典管理](/dict.png) |
| 接口管理  | ![接口管理](/docs.png) |
| 系统主题  | ![系统主题](/theme.png) |
| 在线文档  | ![在线文档](/help.png) |
| 系统锁屏  | ![系统锁屏](/lock.png) |
| 表单构建  | ![表单构建](/form.png) |
| 代码生成  | ![代码生成](/gencode.png) |
| 流程管理  | ![流程管理](/workflow.png) |
| 文件管理  | ![文件管理](/file.png) |
| 我的应用  | ![我的应用](/myapp.png) |
| 配置中心  | ![配置中心](/setting.png) |
| 智能助手  | ![智能助手](/ai.png) |

### 移动端

| 模块 <div style="width:60px"/> | 详情 | 模块 <div style="width:60px"/> | 详情 | 模块 <div style="width:60px"/> | 详情 |
|----------|------|----------|------|----------|------|
| 登录    | ![移动端登录](/app_login.png) | 首页      | ![移动端首页](/app_home.png) | 我的      | ![移动端个人中心](/app_mine.png) |
| 个人  | ![移动端个人信息](/app_profile.png) | 设置   | ![移动端设置](/app_setting.png) | 工作台      | ![移动端工作台](/app_work.png) |

## 🚀二开教程

### 后端部分

1. **编写实体类层**：在 `backend/app/api/v1/models/demo/example_model.py` 中创建 example 的 ORM 模型（对应 Spring Boot 中的实体类层）
2. **编写数据模型层**：在 `backend/app/api/v1/schemas/demo/example_schema.py` 中创建 example 数据模型（对应 Spring Boot 中的 DTO 层）
3. **编写查询参数模型层**：在 `backend/app/api/v1/params/demo/example_param.py` 中创建 example 的查询参数模型（对应 Spring Boot 中的 DTO 层）
4. **编写持久化层**：在 `backend/app/api/v1/cruds/demo/example_crud.py` 中创建 example 数据层（对应 Spring Boot 中的 Mapper 或 DAO 层）
5. **编写业务层**：在 `backend/app/api/v1/services/demo/example_service.py` 中创建 example 数据层（对应 Spring Boot 中的 Service 层）
6. **编写接口层**：在 `backend/app/api/v1/controllers/demo/example_controller.py` 中创建 example 数据层（对应 Spring Boot 中的 Controller 层）
7. **注册后端路由**：在 `backend/app/api/v1/urls/demo/example_url.py` 中注册 example 路由
8. **注册路由到 FastAPI 服务中**：在 `backend/plugin/init_app.py` 中注册路由
9. **将 demo 模块添加至系统初始化脚本**：在 `backend/app/scripts/initialize.py` 中添加（如果需要可以把 demo 的菜单权限，配置到 `backend/app/scripts/data/system_menu.json` 和 `backend/app/scripts/data/system_role_menus.json` 或从前端页面菜单中新增）
10. **将 demo 模块添加至数据库迁移脚本中**：在 `backend/app/alembic/env.py` 中添加

### 前端部分

1. **前端接入后端接口地址**：在 `frontend/src/api/demo/example.ts` 中配置
2. **编写前端页面**：在 `frontend/src/views/demo/example/index.vue` 中编写

### 移动端部分

1. **移动端接入后端接口地址**：在 `fastapp/src/api` 中编写
2. **编写移动端页面**：在 `fastapp/src/pages` 中编写
