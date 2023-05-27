
# ThawornAp เว็บแอปพลิเคชันสำหรับแจ้งปัญหาในหอขนาดเล็ก
เป็นแอปพลิเคชันที่พัฒนาด้วย React-Typescript

## โครงสร้างโฟลเดอร์

```bash
├── public
├── src
│   ├── components
│   │   ├── confirm_modal
│   │   ├── date_picker
│   │   ├── enums
│   │   └── form_admin_register
│   ├── dataService
│   │   ├── api_@branchManagement_tabAll_lineChart
│   │   ├── api_@branchManagement_tabAll_privatePieChart
│   │   ├── api_@branchManagement_tabAll_publicPieChart
│   │   ├── api_@branchManagement_tab_barChart
│   │   ├── api_@branchManagement_tab_lineChart
│   │   ├── api_@branchManagement_tab_pieChart
│   │   ├── api_@branchManagement_values
│   │   ├── api_@customerId_report
│   │   ├── api_@listReportId_description
│   │   ├── api_@personnelManagement_adminData
│   │   ├── api_@personnelManagement_edit
│   │   ├── api_@personnelManagement_register
│   │   ├── api_@placeId_typefix
│   │   ├── api_@typeReportId_typePlace
│   │   ├── api_branch
│   │   ├── api_information
│   │   ├── api_listReport_@reportId_changeState
│   │   ├── api_listReport_@reportId_changetime
│   │   ├── api_listReport_@reportId_timeSlot
│   │   ├── api_listReport_@timeId_timeSlot
│   │   ├── api_list_report
│   │   ├── confirm_modal
│   │   ├── api_login
│   │   ├── api_menu
│   │   ├── api_register
│   │   ├── api_step
│   │   └── api_user_profile
│   ├── hook/persistanceData
│   ├── pages
│   │   ├── thaworn-ap
│   │   │   ├── branch-management
│   │   │   │   ├── components
│   │   │   │   │   ├── tab-all-branch-description
│   │   │   │   │   │   ├── charts
│   │   │   │   │   │   │   ├── line-charts
│   │   │   │   │   │   │   ├── private-pie-chart
│   │   │   │   │   │   │   └── public-pie-chart
│   │   │   │   │   │   └── index.tsx
│   │   │   │   │   └── tab-branch-description
│   │   │   │   │   │   ├── charts
│   │   │   │   │   │   │   ├── bar-charts
│   │   │   │   │   │   │   ├── line-chart
│   │   │   │   │   │   │   └── pie-chart
│   │   │   │   │   │   └── index.tsx
│   │   │   │   └── index.tsx
│   │   │   ├── home
│   │   │   │   ├── components/cards
│   │   │   │   │   └── card.tsx
│   │   │   │   ├── edit
│   │   │   │   ├── post
│   │   │   │   └── index.tsx
│   │   │   ├── list-report
│   │   │   │   ├── components
│   │   │   │   │   ├── card_progressive
│   │   │   │   │   ├── config_time_slot
│   │   │   │   │   ├── confirm_edit
│   │   │   │   │   ├── delete_time_slot
│   │   │   │   │   ├── form_manage_state
│   │   │   │   │   ├── modal
│   │   │   │   │   ├── select_time
│   │   │   │   │   └── select_time_admin
│   │   │   │   ├── description
│   │   │   │   ├── edit-report
│   │   │   │   └── index.tsx
│   │   │   ├── login
│   │   │   │   └── index.tsx
│   │   │   ├── personnel-management
│   │   │   │   ├── components/modal
│   │   │   │   │   └── index.tsx
│   │   │   │   ├── edit
│   │   │   │   ├── register-admin
│   │   │   │   └── index.tsx
│   │   │   ├── profile
│   │   │   │   └── [login_id].tsx
│   │   │   ├── register
│   │   │   │   ├── components/modals
│   │   │   │   └── index.tsx
│   │   │   └── report
│   │   │   │   ├── components/modal
│   │   │   │   └── index.tsx
│   │   ├── _app.tsx
│   │   └── hook.tsx
│   └── styles
│   │   ├── global.css
│   │   ├── vars.css
│   │   └── wave.png
├── .gitignore
├── README.md
├── next-env.d.ts
├── next.config.js
├── package-lock.json
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
└── yarn.lock
```

## ขั้นตอนในการติดตั้ง
1. ติดตั้ง node version 14.18.1 ที่นี่ https://nodejs.org/en/blog/release/v14.18.1

2. ติดตั้ง git ผ่าน Command Prompt หรือ Powershell ผ่านคำสั่ง
```
winget install --id Git.Git -e --source winget
```
3. ใช้คำสั่ง git clone เพื่อทำการคัดลอกโปรเจกต์
```
git clone https://github.com/Final-Project-Peerawit/ThawornAp-frontend.git
```
4. ติดตั้ง node module ผ่านคำสั่ง
```
npm install
```
## วิธีใช้งาน
เมื่อทำการติดตั้งตามขั้นตอนทั้งหมดแล้ว สามารถ run ตามคำสั่งด้านล่างได้เลย
```
npm run dev
```
