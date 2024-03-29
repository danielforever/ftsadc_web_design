export const links = [
  {
    name: "Activities",
    ch_name:"各方活動",
    submenu: true,
    link: "/activities",
    sublinks: [
      {
        Head: "FTSA Activities",
        ch_Head:"FTSA活動",
        link: "/ftsaactivities",
        sublink: [
          { name: "Recent Coming", ch_name: "最近活動", link: "/ftsaactivities" },
          { name: "All Activities", ch_name: "所有活動", link: "/ftsaactivities" },
        ],
      },
/*       {
        Head: "All School Activities",
        ch_Head:"各校活動",
        link: "/schoolactivities",
        sublink: [
          { name: "School Recent Activities", ch_name: "最近各校活動", link: "/schoolactivities" },
          { name: "All Activities", ch_name: "所有活動", link: "/schoolactivities" },
        ],
      }, */
/*       {
        Head: "All Area Activities",
        ch_Head:"各地區活動",
        link: "/areaactivities",
        sublink: [
          { name: "Area Recent Activities", ch_name: "各地區活動", link: "/areaactivities" },
          { name: "All Activities", ch_name: "所有活動", link: "/areaactivities" },
        ],
      }, */
    ],
  },
  {
    name: "About Us",
    ch_name:"關於我們",
    submenu: true,
    link: "/aboutus",
    sublinks: [
      {
        Head: "Our Story",
        ch_Head:"我們的故事",
        link: "/aboutus",
        sublink: [
          { name: "Welcome", ch_name: "歡迎", link: "/welcome" },
        
        ],
      },
      {
        Head: "All Members",
        ch_Head:"學聯會成員",
        link: "/aboutus/#ourMember",
        sublink: [
/*           { name: "President & Vice-President", ch_name: "正副會長", link: "/" },
          { name: "Secretary", ch_name: "秘書組", link: "/" },
          { name: "Treasury", ch_name: "財務組", link: "/" },
          { name: "Event Planning Officer", ch_name: "活動組", link: "/" },
          { name: "Campus Public Relation", ch_name: "校學公關組", link: "/" },
          { name: "Cooperate Public Relation", ch_name: "企業公關組", link: "/" },
          { name: "Tech & Web Engineer", ch_name: "行銷資訊組", link: "/" }, */
        ],
      },
    ],
  },
  {
    name: "Handbook",
    ch_name:"新生手冊",
    submenu: true,
    link: "/handbook",
    sublinks: [
      {
        Head: "Before Arriving",
        ch_Head:"行前注意",
        link: "/handbook",
        sublink: [
          { name: "Pre-departure documents", ch_name: "行前證件", link: "/" },
        ],
      },
      {
        Head: "After Arriving",
        ch_Head:"到達須知",
        link: "/handbook",
        sublink: [
          { name: "Bank", ch_name: "銀行", link: "/bank" },
          { name: "Mobile", ch_name: "手機門號", link: "/Phone" },
          { name: "Driver's License", ch_name: "駕照", link: "/Driver" },
        ],
      },
      {
        Head: "Recommend FB Group",
        ch_Head:"臉書社團",
        link: "/group",
        sublink: [
        ],
      },
    ],
  },
  {
    name: "ALL TSA",
    ch_name:"各校 TSA",
    submenu: true,
    link: "/alltsa",
    sublinks: [
      {
        Head: "All Area",
        ch_Head:"各地區TSA",
        link: "/TSA",
        sublink: [
          { name: "DC", ch_name: "華府特區", link: "/DC" },
          { name: "MD", ch_name: "馬里蘭", link: "/MD" },
          { name: "VA", ch_name: "維吉尼亞", link: "/VA" },
          { name: "NC", ch_name: "北卡羅來納", link: "/NC" },
          { name: "SC", ch_name: "南卡羅來納", link: "/SC" },
          
        ],
      },
    ],
  },
];
