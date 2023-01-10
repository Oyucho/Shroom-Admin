import React from 'react';
import { AiOutlineCalendar, AiOutlineAreaChart, AiOutlineBarChart, AiOutlineStock } from 'react-icons/ai';
import { FiEdit, FiPieChart, FiBarChart, FiCreditCard, FiStar, FiShoppingCart } from 'react-icons/fi';
import { BsKanban, BsBarChart, BsBoxSeam, BsCurrencyDollar, BsShield, BsChatLeft } from 'react-icons/bs';
import { BiColorFill } from 'react-icons/bi';
import { RiContactsLine } from 'react-icons/ri';
import { MdOutlineSupervisorAccount, MdSupportAgent } from 'react-icons/md';
import { HiOutlineRefresh } from 'react-icons/hi';
import { GrLocation, GrOverview, GrTicket } from 'react-icons/gr';
import avatar from './avatar.jpg';
import avatar2 from './avatar2.jpg';
import avatar3 from './avatar3.png';
import avatar4 from './avatar4.jpg';
import product5 from './product5.jpg';
import product6 from './product6.jpg';
import product7 from './product7.jpg';

export const gridOrderImage = (props) => (
  <div>
    <img
      className="rounded-xl h-20 md:ml-3"
      src={props.ProductImage}
      alt="order-item"
    />
  </div>
);
export const gridOrderStatus = (props) => (
  <button
    type="button"
    style={{ background: props.StatusBg }}
    className="text-white py-1 px-2 capitalize rounded-2xl text-md"
  >
    {props.Status}
  </button>
);

export const kanbanGrid = [
  { headerText: 'To Do',
    keyField: 'Open',
    allowToggle: true },

  { headerText: 'In Progress',
    keyField: 'InProgress',
    allowToggle: true },

  { headerText: 'Testing',
    keyField: 'Testing',
    allowToggle: true,
    isExpanded: false },

  { headerText: 'Done',
    keyField: 'Close',
    allowToggle: true },
];
const gridEmployeeProfile = (props) => (
  <div className="flex items-center gap-2">
    <img
      className="rounded-full w-10 h-10"
      src={props.EmployeeImage}
      alt="employee"
    />
    <p>{props.Name}</p>
  </div>
);

const gridEmployeeCountry = (props) => (
  <div className="flex items-center justify-center gap-2">
    <GrLocation />
    <span>{props.Country}</span>
  </div>
);
export const EditorData = () => (
  <div>
    <h3>
      Try React
      React has been designed from the start for gradual adoption, and you can use as little or as much React as you need. Whether you want to get a taste of React, add some interactivity to a simple HTML page, or start a complex React-powered app, the links in this section will help you get started.

      Online Playgrounds
      If you’re interested in playing around with React, you can use an online code playground. Try a Hello World template on CodePen, CodeSandbox, or Stackblitz.

      If you prefer to use your own text editor, you can also download this HTML file, edit it, and open it from the local filesystem in your browser. It does a slow runtime code transformation, so we’d only recommend using this for simple demos.

      Add React to a Website
      You can add React to an HTML page in one minute. You can then either gradually expand its presence, or keep it contained to a few dynamic widgets.

      Create a New React App
      When starting a React project, a simple HTML page with script tags might still be the best option. It only takes a minute to set up!

      As your application grows, you might want to consider a more integrated setup. There are several JavaScript toolchains we recommend for larger applications. Each of them can work with little to no configuration and lets you take full advantage of the rich React ecosystem. Learn how.

      Learn React
      People come to React from different backgrounds and with different learning styles. Whether you prefer a more theoretical or a practical approach, we hope you’ll find this section helpful.

      If you prefer to learn by doing, start with our practical tutorial.
      If you prefer to learn concepts step by step, start with our guide to main concepts.
      Like any unfamiliar technology, React does have a learning curve. With practice and some patience, you will get the hang of it.

      First Examples
      The React homepage contains a few small React examples with a live editor. Even if you don’t know anything about React yet, try changing their code and see how it affects the result.

      React for Beginners
      If you feel that the React documentation goes at a faster pace than you’re comfortable with, check out this overview of React by Tania Rascia. It introduces the most important React concepts in a detailed, beginner-friendly way. Once you’re done, give the documentation another try!

      React for Designers
      If you’re coming from a design background, these resources are a great place to get started.

      JavaScript Resources
      The React documentation assumes some familiarity with programming in the JavaScript language. You don’t have to be an expert, but it’s harder to learn both React and JavaScript at the same time.

      We recommend going through this JavaScript overview to check your knowledge level. It will take you between 30 minutes and an hour but you will feel more confident learning React.
    </h3>
  </div>
);
const customerGridImage = (props) => (
  <div className="image flex gap-4">
    <img
      className="rounded-full w-10 h-10"
      src={props.CustomerImage}
      alt="employee"
    />
    <div>
      <p>{props.CustomerName}</p>
      <p>{props.CustomerEmail}</p>
    </div>
  </div>
);

const customerGridStatus = (props) => (
  <div className="flex gap-2 justify-center items-center text-gray-700 capitalize">
    <p style={{ background: props.StatusBg }} className="rounded-full h-3 w-3" />
    <p>{props.Status}</p>
  </div>
);
export const areaPrimaryXAxis = {
  valueType: 'DateTime',
  labelFormat: 'y',
  majorGridLines: { width: 0 },
  intervalType: 'Years',
  edgeLabelPlacement: 'Shift',
  labelStyle: { color: 'gray' },
};

export const areaPrimaryYAxis = {
  labelFormat: '{value}%',
  lineStyle: { width: 0 },
  maximum: 4,
  interval: 1,
  majorTickLines: { width: 0 },
  minorTickLines: { width: 0 },
  labelStyle: { color: 'gray' },

};
export const barPrimaryXAxis = {
  valueType: 'Category',
  interval: 1,
  majorGridLines: { width: 0 },
};
export const barPrimaryYAxis = {
  majorGridLines: { width: 0 },
  majorTickLines: { width: 0 },
  lineStyle: { width: 0 },
  labelStyle: { color: 'transparent' },
};
const areaChartData = [
  [
    { x: new Date(2002, 0, 1), y: 2.2 },
    { x: new Date(2003, 0, 1), y: 3.4 },
    { x: new Date(2004, 0, 1), y: 2.8 },
    { x: new Date(2005, 0, 1), y: 1.6 },
    { x: new Date(2006, 0, 1), y: 2.3 },
    { x: new Date(2007, 0, 1), y: 2.5 },
    { x: new Date(2008, 0, 1), y: 2.9 },
    { x: new Date(2009, 0, 1), y: 3.8 },
    { x: new Date(2010, 0, 1), y: 1.4 },
    { x: new Date(2011, 0, 1), y: 3.1 },
  ],
  [
    { x: new Date(2002, 0, 1), y: 2 },
    { x: new Date(2003, 0, 1), y: 1.7 },
    { x: new Date(2004, 0, 1), y: 1.8 },
    { x: new Date(2005, 0, 1), y: 2.1 },
    { x: new Date(2006, 0, 1), y: 2.3 },
    { x: new Date(2007, 0, 1), y: 1.7 },
    { x: new Date(2008, 0, 1), y: 1.5 },
    { x: new Date(2009, 0, 1), y: 2.8 },
    { x: new Date(2010, 0, 1), y: 1.5 },
    { x: new Date(2011, 0, 1), y: 2.3 },
  ],
  [
    { x: new Date(2002, 0, 1), y: 0.8 },
    { x: new Date(2003, 0, 1), y: 1.3 },
    { x: new Date(2004, 0, 1), y: 1.1 },
    { x: new Date(2005, 0, 1), y: 1.6 },
    { x: new Date(2006, 0, 1), y: 2 },
    { x: new Date(2007, 0, 1), y: 1.7 },
    { x: new Date(2008, 0, 1), y: 2.3 },
    { x: new Date(2009, 0, 1), y: 2.7 },
    { x: new Date(2010, 0, 1), y: 1.1 },
    { x: new Date(2011, 0, 1), y: 2.3 },
  ],
];

export const areaCustomSeries = [
  {
    dataSource: areaChartData[0],
    xName: 'x',
    yName: 'y',
    name: 'USA',
    opacity: '0.8',
    type: 'SplineArea',
    width: '2',

  },
  {
    dataSource: areaChartData[1],
    xName: 'x',
    yName: 'y',
    name: 'France',
    opacity: '0.8',
    type: 'SplineArea',
    width: '2',
  },
  {
    dataSource: areaChartData[2],
    xName: 'x',
    yName: 'y',
    name: 'Germany',
    opacity: '0.8',
    type: 'SplineArea',
    width: '2',
  },
];

export const colorMappingData = [
  [
    { x: 'Jan', y: 6.96 },
    { x: 'Feb', y: 8.9 },
    { x: 'Mar', y: 12 },
    { x: 'Apr', y: 17.5 },
    { x: 'May', y: 22.1 },
    { x: 'June', y: 25 },
    { x: 'July', y: 29.4 },
    { x: 'Aug', y: 29.6 },
    { x: 'Sep', y: 25.8 },
    { x: 'Oct', y: 21.1 },
    { x: 'Nov', y: 15.5 },
    { x: 'Dec', y: 9.9 },
  ],
  ['#FFFF99'],
  ['#FFA500'],
  ['#FF4040'],
];

export const rangeColorMapping = [
  { label: '1% to 10%',
    start: '1',
    end: '10',
    colors: colorMappingData[1] },

  { label: '11% to 20%',
    start: '11',
    end: '20',
    colors: colorMappingData[2] },

  { label: '215 to 30%',
    start: '21',
    end: '30',
    colors: colorMappingData[3] },

];

export const ColorMappingPrimaryXAxis = {
  valueType: 'Category',
  majorGridLines: { width: 0 },
  title: 'Months',
};

export const ColorMappingPrimaryYAxis = {
  lineStyle: { width: 0 },
  majorTickLines: { width: 0 },
  minorTickLines: { width: 0 },
  labelFormat: '{value}%',
  title: 'Percentage',
};

export const LinePrimaryXAxis = {
  valueType: 'DateTime',
  labelFormat: 'y',
  intervalType: 'Years',
  edgeLabelPlacement: 'Shift',
  majorGridLines: { width: 0 },
  background: 'white',
};

export const LinePrimaryYAxis = {
  labelFormat: '{value}%',
  rangePadding: 'None',
  minimum: 0,
  maximum: 100,
  interval: 20,
  lineStyle: { width: 0 },
  majorTickLines: { width: 0 },
  minorTickLines: { width: 0 },
};

export const customersGrid = [
  { type: 'checkbox', width: '50' },
  { headerText: 'Name',
    width: '150',
    template: customerGridImage,
    textAlign: 'Center' },
  { field: 'Status',
    headerText: 'Status',
    width: '130',
    format: 'yMd',
    textAlign: 'Center',
    template: customerGridStatus },
  { field: 'Date',
    headerText: 'Date',
    width: '100',
    format: 'yMd',
    textAlign: 'Center' },
  { field: 'CustomerID',
    headerText: 'Customer ID',
    width: '120',
    textAlign: 'Center',
    isPrimaryKey: true,
  },

];

export const employeesGrid = [
  { headerText: 'Employee',
    width: '150',
    template: gridEmployeeProfile,
    textAlign: 'Center' },
  { field: 'Name',
    headerText: '',
    width: '0',
    textAlign: 'Center',
  },
  { field: 'Title',
    headerText: 'Designation',
    width: '170',
    textAlign: 'Center',
  },
  { headerText: 'Country',
    width: '120',
    textAlign: 'Center',
    template: gridEmployeeCountry },

  { field: 'HireDate',
    headerText: 'Hire Date',
    width: '135',
    format: 'yMd',
    textAlign: 'Center' },

  { field: 'ReportsTo',
    headerText: 'Reports To',
    width: '120',
    textAlign: 'Center' },
  { field: 'EmployeeID',
    headerText: 'Employee ID',
    width: '125',
    textAlign: 'Center' },
];

export const links = [
  {
    title: 'Dashboard',
    links: [
      {
        name: 'Overview',
        icon: <GrOverview />,
      },
    ],
  },

  {
    title: 'Pages',
    links: [
      {
        name: 'Tickets',
        icon: <GrTicket />,
      },
      {
        name: 'Agents',
        icon: <MdSupportAgent />,
      },
      {
        name: 'Contacts',
        icon: <RiContactsLine />,
      },
    ],
  },
  {
    title: 'Apps',
    links: [
      {
        name: 'calendar',
        icon: <AiOutlineCalendar />,
      },
      {
        name: 'kanban',
        icon: <BsKanban />,
      },
      {
        name: 'editor',
        icon: <FiEdit />,
      },
      {
        name: 'color-picker',
        icon: <BiColorFill />,
      },
    ],
  },
  {
    title: 'Charts',
    links: [
      {
        name: 'line',
        icon: <AiOutlineStock />,
      },
      {
        name: 'area',
        icon: <AiOutlineAreaChart />,
      },

      {
        name: 'pie',
        icon: <FiPieChart />,
      },
      {
        name: 'color-mapping',
        icon: <BsBarChart />,
      },
      {
        name: 'stacked',
        icon: <AiOutlineBarChart />,
      },
    ],
  },
];

export const cartData = [
  {
    image:
      product5,
    name: 'butterscotch ice-cream',
    category: 'Milk product',
    price: '$250',
  },
  {
    image:
      product6,
    name: 'Supreme fresh tomato',
    category: 'Vegetable Item',
    price: '$450',
  },
  {
    image:
      product7,
    name: 'Red color candy',
    category: 'Food Item',
    price: '$190',
  },
];

export const chatData = [
  {
    image:
      avatar2,
    message: 'Roman Joined the Team!',
    desc: 'Congratulate him',
    time: '9:08 AM',
  },
  {
    image:
      avatar3,
    message: 'New message received',
    desc: 'Salma sent you new message',
    time: '11:56 AM',
  },
  {
    image:
      avatar4,
    message: 'New Task received',
    desc: 'Can I get another task',
    time: '4:39 AM',
  },
  {
    image:
      avatar,
    message: 'Jolly completed tasks',
    desc: 'Assign her new tasks',
    time: '1:12 AM',
  },
];

export const earningData = [
  {
    icon: <MdOutlineSupervisorAccount />,
    amount: '354',
    percentage: '-4%',
    title: 'Unresolved',
    iconColor: '#03C9D7',
    iconBg: '#E5FAFB',
    pcColor: 'red-600',
  },
  {
    icon: <BsBoxSeam />,
    amount: '496',
    percentage: '+23%',
    title: 'Resolved',
    iconColor: 'rgb(255, 244, 229)',
    iconBg: 'rgb(254, 201, 15)',
    pcColor: 'green-600',
  },
  {
    icon: <FiBarChart />,
    amount: '239',
    percentage: '-38%',
    title: 'On Hold',
    iconColor: 'rgb(228, 106, 118)',
    iconBg: 'rgb(255, 244, 229)',

    pcColor: 'green-600',
  },
  {
    icon: <HiOutlineRefresh />,
    amount: '394',
    percentage: '+12%',
    title: 'Response Rate Time',
    iconColor: 'rgb(0, 194, 146)',
    iconBg: 'rgb(235, 250, 242)',
    pcColor: 'red-600',
  },
];

export const weeklyStats = [
  {
    icon: <FiShoppingCart />,
    amount: '560',
    title: 'Top Responder',
    desc: 'Kamau Njoroge',
    iconBg: '#FB9678',
    pcColor: 'red-600',
  },
  {
    icon: <FiStar />,
    amount: '560',
    title: 'Best Feedback',
    desc: 'Raymond Reddington',
    iconBg: 'rgb(254, 201, 15)',
    pcColor: 'red-600',
  },
  {
    icon: <BsChatLeft />,
    amount: '560',
    title: 'Most Commented',
    desc: 'Elizabeth Keen',
    iconBg: '#00C292',
    pcColor: 'green-600',
  },
];

export const themeColors = [
  {
    name: 'blue-theme',
    color: '#1A97F5',
  },
  {
    name: 'green-theme',
    color: '#03C9D7',
  },
  {
    name: 'purple-theme',
    color: '#7352FF',
  },
  {
    name: 'red-theme',
    color: '#FF5C8E',
  },
  {
    name: 'indigo-theme',
    color: '#1E4DB7',
  },
  {
    color: '#FB9678',
    name: 'orange-theme',
  },
];

export const userProfileData = [
  {
    icon: <BsCurrencyDollar />,
    title: 'My Profile',
    desc: 'Account Settings',
    iconColor: '#03C9D7',
    iconBg: '#E5FAFB',
  },
  {
    icon: <BsShield />,
    title: 'My Inbox',
    desc: 'Messages & Emails',
    iconColor: 'rgb(0, 194, 146)',
    iconBg: 'rgb(235, 250, 242)',
  },
  {
    icon: <FiCreditCard />,
    title: 'My Tasks',
    desc: 'To-do and Daily Tasks',
    iconColor: 'rgb(255, 244, 229)',
    iconBg: 'rgb(254, 201, 15)',
  },
];

export const ordersGrid = [
  { field: 'CustomerName',
    headerText: 'Customer Name',
    width: '150',
    textAlign: 'Center',
  },
  {
    field: 'Ticket',
    headerText: 'Ticket',
    width: '150',
    editType: 'dropdownedit',
    textAlign: 'Center',
  },
  {
    field: 'Time',
    headerText: 'Time',
    format: 'C2',
    textAlign: 'Center',
    editType: 'numericedit',
    width: '150',
  },
  {
    headerText: 'Status',
    template: gridOrderStatus,
    field: 'OrderItems',
    textAlign: 'Center',
    width: '120',
  },
];

export const contactsData = [
  {
    CustomerID: 1001,
    CustomerName: 'Navabi Hassan',
    CustomerEmail: 'navabi@gmail.com',
    Ticket: 'Contact email not linked',
    Time: '08:00',
    Status: 'Active',
    StatusBg: '#8BE78B',
  },
  {
    CustomerID: 1002,
    CustomerName: 'Sunil Joshi',
    CustomerEmail: 'sunil@gmail.com',
    Ticket: 'Contact email not linked',
    Time: '08:00',
    Status: 'Active',
    StatusBg: '#8BE78B',
  },
  {
    CustomerID: 1003,
    CustomerName: 'Andrew McDownland',
    CustomerEmail: 'andrew@gmail.com',
    Ticket: 'Contact email not linked',
    Time: '08:00',
    Status: 'Pending',
    StatusBg: '#FEC90F',
  },
  {
    CustomerID: 1004,
    CustomerName: 'Christopher Jamil',
    CustomerEmail: 'jamil@gmail.com',
    Ticket: 'Contact email not linked',
    Time: '08:00',
    Status: 'Completed',
    StatusBg: '#8BE78B',
  },
  {
    CustomerID: 1005,
    CustomerName: 'Michael',
    CustomerEmail: 'michael@gmail.com',
    Ticket: 'Contact email not linked',
    Time: '08:00',
    Status: 'Cancel',
    StatusBg: 'red',
  },
  {
    CustomerID: 1006,
    CustomerName: 'Nirav Joshi',
    CustomerEmail: 'nirav@gmail.com',
    Ticket: 'Contact email not linked',
    Time: '08:00',
    Status: 'Active',
    StatusBg: '#8BE78B',
  },
  {
    CustomerID: 1007,
    CustomerName: 'Sunil Joshi',
    CustomerEmail: 'sunil@gmail.com',
    Ticket: 'Contact email not linked',
    Time: '08:00',
    Status: 'Active',
    StatusBg: '#8BE78B',
  },
  {
    CustomerID: 1008,
    CustomerName: 'Andrew McDownland',
    CustomerEmail: 'andrew@gmail.com',
    Ticket: 'Contact email not linked',
    Time: '08:00',
    Status: 'Pending',
    StatusBg: '#FEC90F',
  },
  {
    CustomerID: 1009,
    CustomerName: 'Christopher Jamil',
    CustomerEmail: 'jamil@gmail.com',
    Ticket: 'Contact email not linked',
    Time: '08:00',
    Status: 'Completed',
    StatusBg: '#8BE78B',
  },
  {
    CustomerID: 1010,
    CustomerName: 'Michael',
    CustomerEmail: 'michael@gmail.com',
    Ticket: 'Contact email not linked',
    Time: '08:00',
    Status: 'Cancel',
    StatusBg: 'red',
  },
  {
    CustomerID: 1011,
    CustomerName: 'Nirav Joshi',
    CustomerEmail: 'nirav@gmail.com',
    Ticket: 'Contact email not linked',
    Time: '08:00',
    Status: 'Active',
    StatusBg: '#8BE78B',
  },
  {
    CustomerID: 1012,
    CustomerName: 'Sunil Joshi',
    CustomerEmail: 'sunil@gmail.com',
    Ticket: 'Contact email not linked',
    Time: '08:00',
    Status: 'Active',
    StatusBg: '#8BE78B',
  },
  {
    CustomerID: 1013,
    CustomerName: 'Andrew McDownland',
    CustomerEmail: 'andrew@gmail.com',
    Ticket: 'Contact email not linked',
    Time: '08:00',
    Status: 'Pending',
    StatusBg: '#FEC90F',
  },
  {
    CustomerID: 1014,
    CustomerName: 'Christopher Jamil',
    CustomerEmail: 'jamil@gmail.com',
    Ticket: 'Contact email not linked',
    Time: '08:00',
    Status: 'Completed',
    StatusBg: '#8BE78B',
  },
  {
    CustomerID: 1015,
    CustomerName: 'Michael',
    CustomerEmail: 'michael@gmail.com',
    Ticket: 'Contact email not linked',
    Time: '08:00',
    Status: 'Cancel',
    StatusBg: 'red',
  },
  {
    CustomerID: 1016,
    CustomerName: 'Nirav Joshi',
    CustomerEmail: 'nirav@gmail.com',
    Ticket: 'Contact email not linked',
    Time: '08:00',
    Status: 'Active',
    StatusBg: '#8BE78B',
  },
  {
    CustomerID: 1017,
    CustomerName: 'Sunil Joshi',
    CustomerEmail: 'sunil@gmail.com',
    Ticket: 'Contact email not linked',
    Time: '08:00',
    Status: 'Active',
    StatusBg: '#8BE78B',
  },
  {
    CustomerID: 1018,
    CustomerName: 'Andrew McDownland',
    CustomerEmail: 'andrew@gmail.com',
    Ticket: 'Contact email not linked',
    Time: '08:00',
    Status: 'Pending',
    StatusBg: '#FEC90F',
  },
  {
    CustomerID: 1019,
    CustomerName: 'Christopher Jamil',
    CustomerEmail: 'jamil@gmail.com',
    Ticket: 'Contact email not linked',
    Time: '08:00',
    Status: 'Completed',
    StatusBg: '#8BE78B',
  },
  {
    CustomerID: 1020,
    CustomerName: 'Michael',
    CustomerEmail: 'michael@gmail.com',
    Ticket: 'Contact email not linked',
    Time: '08:00',
    Status: 'Cancel',
    StatusBg: 'red',
  },
  {
    CustomerID: 1021,
    CustomerName: 'Michael',
    CustomerEmail: 'michael@gmail.com',
    Ticket: 'Contact email not linked',
    Time: '08:00',
    Status: 'Cancel',
    StatusBg: 'red',
  },
  {
    CustomerID: 1022,
    CustomerName: 'Michael',
    CustomerEmail: 'michael@gmail.com',
    Ticket: 'Contact email not linked',
    Time: '08:00',
    Status: 'Cancel',
    StatusBg: 'red',
  },
  {
    CustomerID: 1023,
    CustomerName: 'Michael',
    CustomerEmail: 'michael@gmail.com',
    Ticket: 'Contact email not linked',
    Time: '08:00',
    Status: 'Cancel',
    StatusBg: 'red',
  },
  {
    CustomerID: 1024,
    CustomerName: 'Michael',
    CustomerEmail: 'michael@gmail.com',
    Ticket: 'Contact email not linked',
    Time: '08:00',
    Status: 'Cancel',
    StatusBg: 'red',
  },
  {
    CustomerID: 1025,
    CustomerName: 'Michael',
    CustomerEmail: 'michael@gmail.com',
    Ticket: 'Contact email not linked',
    Time: '08:00',
    Status: 'Cancel',
    StatusBg: 'red',
  },
  {
    CustomerID: 1026,
    CustomerName: 'Michael',
    CustomerEmail: 'michael@gmail.com',
    Ticket: 'Contact email not linked',
    Time: '08:00',
    Status: 'Cancel',
    StatusBg: 'red',
  },
  {
    CustomerID: 1027,
    CustomerName: 'Michael',
    CustomerEmail: 'michael@gmail.com',
    Ticket: 'Contact email not linked',
    Time: '08:00',
    Status: 'Cancel',
    StatusBg: 'red',
  },
  {
    CustomerID: 1028,
    CustomerName: 'Michael',
    CustomerEmail: 'michael@gmail.com',
    Ticket: 'Contact email not linked',
    Time: '08:00',
    Status: 'Cancel',
    StatusBg: 'red',
  },
  {
    CustomerID: 1029,
    CustomerName: 'Michael',
    CustomerEmail: 'michael@gmail.com',
    Ticket: 'Contact email not linked',
    Time: '08:00',
    Status: 'Cancel',
    StatusBg: 'red',
  },
  {
    CustomerID: 1030,
    CustomerName: 'Michael',
    CustomerEmail: 'michael@gmail.com',
    Ticket: 'Contact email not linked',
    Time: '08:00',
    Status: 'Cancel',
    StatusBg: 'red',
  },
  {
    CustomerID: 1031,
    CustomerName: 'Michael',
    CustomerEmail: 'michael@gmail.com',
    Ticket: 'Contact email not linked',
    Time: '08:00',
    Status: 'Cancel',
    StatusBg: 'red',
  },
  {
    CustomerID: 1032,
    CustomerName: 'Michael',
    CustomerEmail: 'michael@gmail.com',
    Ticket: 'Contact email not linked',
    Time: '08:00',
    Status: 'Cancel',
    StatusBg: 'red',
  },
  {
    CustomerID: 1033,
    CustomerName: 'Michael',
    CustomerEmail: 'michael@gmail.com',
    Ticket: 'Contact email not linked',
    Time: '08:00',
    Status: 'Cancel',
    StatusBg: 'red',
  },
  {
    CustomerID: 1034,
    CustomerName: 'Michael',
    CustomerEmail: 'michael@gmail.com',
    Ticket: 'Contact email not linked',
    Time: '08:00',
    Status: 'Cancel',
    StatusBg: 'red',
  },
  {
    CustomerID: 1035,
    CustomerName: 'Michael',
    CustomerEmail: 'michael@gmail.com',
    Ticket: 'Contact email not linked',
    Time: '08:00',
    Status: 'Cancel',
    StatusBg: 'red',
  },
  {
    CustomerID: 1036,
    CustomerName: 'Michael',
    CustomerEmail: 'michael@gmail.com',
    Ticket: 'Contact email not linked',
    Time: '08:00',
    Status: 'Cancel',
    StatusBg: 'red',
  },
  {
    CustomerID: 1037,
    CustomerName: 'Michael',
    CustomerEmail: 'michael@gmail.com',
    Ticket: 'Contact email not linked',
    Time: '08:00',
    Status: 'Cancel',
    StatusBg: 'red',
  },
  {
    CustomerID: 1038,
    CustomerName: 'Michael',
    CustomerEmail: 'michael@gmail.com',
    Ticket: 'Contact email not linked',
    Time: '08:00',
    Status: 'Cancel',
    StatusBg: 'red',
  },
  {
    CustomerID: 1039,
    CustomerName: 'Michael',
    CustomerEmail: 'michael@gmail.com',
    Ticket: 'Contact email not linked',
    Time: '08:00',
    Status: 'Cancel',
    StatusBg: 'red',
  },
  {
    CustomerID: 1040,
    CustomerName: 'Michael',
    CustomerEmail: 'michael@gmail.com',
    Ticket: 'Contact email not linked',
    Time: '08:00',
    Status: 'Cancel',
    StatusBg: 'red',
  },
];

export const employeesData = [
  {
    EmployeeID: 1,
    Name: 'Nancy Davolio',
    Title: 'Sales Representative',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
    avatar3,
  },
  {
    EmployeeID: 2,
    Name: 'Nasimiyu Danai',
    Title: 'Marketing Head',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar3,
  },
  {
    EmployeeID: 3,
    Name: 'Iulia Albu',
    Title: 'HR',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar4,
  },
  {
    EmployeeID: 4,
    Name: 'Siegbert Gottfried',
    Title: 'Marketing Head',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar2,
  },
  {
    EmployeeID: 5,
    Name: 'Omar Darobe',
    Title: 'HR',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    EmployeeImage:
      avatar,
  },
];

export const ordersData = [
  {
    OrderID: 10248,
    CustomerName: 'Vinet',
    Ticket: 'Adding images to featured posts',
    Time: '0800hrs',
    Status: 'pending',
    StatusBg: '#FB9678',
  },
  {
    OrderID: 345653,
    CustomerName: 'Carson Darrin',
    Ticket: 'Payment not going through',
    Time :'1200hrs' ,
    Status: 'complete',
    StatusBg: '#8BE78B',
  },
  {
    OrderID: 390457,
    CustomerName: 'Fran Perez',
    Ticket: 'When will I be chargerd this month?',
    Time :'1700hrs',
    Status: 'active',
    StatusBg: '#03C9D7',
  },
  {
    OrderID: 390457,
    CustomerName: 'Fran Perez',
    Ticket: 'When will I be chargerd this month?',
    Time :'1700hrs',
    Status: 'active',
    StatusBg: '#03C9D7',
  },
  {
    OrderID: 390457,
    CustomerName: 'Fran Perez',
    Ticket: 'When will I be chargerd this month?',
    Time :'1700hrs',
    Status: 'active',
    StatusBg: '#03C9D7',
  },
  {
    OrderID: 390457,
    CustomerName: 'Fran Perez',
    Ticket: 'When will I be chargerd this month?',
    Time :'1700hrs',
    Status: 'active',
    StatusBg: '#03C9D7',
  },
  {
    OrderID: 390457,
    CustomerName: 'Fran Perez',
    Ticket: 'When will I be chargerd this month?',
    Time :'1700hrs',
    Status: 'active',
    StatusBg: '#03C9D7',
  },
  {
    OrderID: 390457,
    CustomerName: 'Fran Perez',
    Ticket: 'When will I be chargerd this month?',
    Time :'1700hrs',
    Status: 'active',
    StatusBg: '#03C9D7',
  },
  {
    OrderID: 390457,
    CustomerName: 'Fran Perez',
    Ticket: 'When will I be chargerd this month?',
    Time :'1700hrs',
    Status: 'active',
    StatusBg: '#03C9D7',
  },
  {
    OrderID: 390457,
    CustomerName: 'Fran Perez',
    Ticket: 'When will I be chargerd this month?',
    Time:'1700hrs',
    Status: 'active',
    StatusBg: '#03C9D7',
  },
  {
    OrderID: 390457,
    CustomerName: 'Fran Perez',
    Ticket: 'When will I be chargerd this month?',
    Time : '1700hrs',
    Status: 'active',
    StatusBg: '#03C9D7',
  },
  {
    OrderID: 390457,
    CustomerName: 'Fran Perez',
    Ticket: 'When will I be chargerd this month?',
    Time : '1700hrs',
    Status: 'active',
    StatusBg: '#03C9D7',
  },
  {
    OrderID: 390457,
    CustomerName: 'Fran Perez',
    Ticket: 'When will I be chargerd this month?',
    Time : '1700hrs',
    Status: 'active',
    StatusBg: '#03C9D7',
  },
  {
    OrderID: 390457,
    CustomerName: 'Fran Perez',
    Ticket: 'When will I be chargerd this month?',
    Time : '1700hrs',
    Status: 'active',
    StatusBg: '#03C9D7',
  },
  {
    OrderID: 390457,
    CustomerName: 'Fran Perez',
    Ticket: 'When will I be chargerd this month?',
    Time : '1700hrs',
    Status: 'active',
    StatusBg: '#03C9D7',
  },
  {
    OrderID: 390457,
    CustomerName: 'Fran Perez',
    Ticket: 'When will I be chargerd this month?',
    Time : '1700hrs',
    Status: 'active',
    StatusBg: '#03C9D7',
  },
  {
    OrderID: 390457,
    CustomerName: 'Fran Perez',
    Ticket: 'When will I be chargerd this month?',
    Time : '1700hrs',
    Status: 'active',
    StatusBg: '#03C9D7',
  },
  {
    OrderID: 390457,
    CustomerName: 'Fran Perez',
    Ticket: 'When will I be chargerd this month?',
    Time : '1700hrs',
    Status: 'active',
    StatusBg: '#03C9D7',
  },
  {
    OrderID: 390457,
    CustomerName: 'Fran Perez',
    Ticket: 'When will I be chargerd this month?',
    Time : '1700hrs',
    Status: 'active',
    StatusBg: '#03C9D7',
  },
  {
    OrderID: 390457,
    CustomerName: 'Fran Perez',
    Ticket: 'When will I be chargerd this month?',
    Time : '1700hrs',
    Status: 'active',
    StatusBg: '#03C9D7',
  },
  {
    OrderID: 390457,
    CustomerName: 'Fran Perez',
    Ticket: 'When will I be chargerd this month?',
    Time : '1700hrs',
    Status: 'active',
    StatusBg: '#03C9D7',
  },
  {
    OrderID: 390457,
    CustomerName: 'Fran Perez',
    Ticket: 'When will I be chargerd this month?',
    Time : '1700hrs',
    Status: 'active',
    StatusBg: '#03C9D7',
  },
  {
    OrderID: 390457,
    CustomerName: 'Fran Perez',
    Ticket: 'When will I be chargerd this month?',
    Time : '1700hrs',
    Status: 'active',
    StatusBg: '#03C9D7',
  },
  {
    OrderID: 390457,
    CustomerName: 'Fran Perez',
    Ticket: 'When will I be chargerd this month?',
    Time : '1700hrs',
    Status: 'active',
    StatusBg: '#03C9D7',
  },
  {
    OrderID: 390457,
    CustomerName: 'Fran Perez',
    Ticket: 'When will I be chargerd this month?',
    Time : '1700hrs',
    Status: 'active',
    StatusBg: '#03C9D7',
  },
  {
    OrderID: 390457,
    CustomerName: 'Fran Perez',
    Ticket: 'When will I be chargerd this month?',
    Time : '1700hrs',
    Status: 'active',
    StatusBg: '#03C9D7',
  },
  {
    OrderID: 390457,
    CustomerName: 'Fran Perez',
    Ticket: 'When will I be chargerd this month?',
    Time : '1700hrs',
    Status: 'active',
    StatusBg: '#03C9D7',
  },
  {
    OrderID: 390457,
    CustomerName: 'Fran Perez',
    Ticket: 'When will I be chargerd this month?',
    Time : '1700hrs',
    Status: 'active',
    StatusBg: '#03C9D7',
  },
  {
    OrderID: 390457,
    CustomerName: 'Fran Perez',
    Ticket: 'When will I be chargerd this month?',
    Time : '1700hrs',
    Status: 'active',
    StatusBg: '#03C9D7',
  },
  {
    OrderID: 390457,
    CustomerName: 'Fran Perez',
    Ticket: 'When will I be chargerd this month?',
    Time : '1700hrs',
    Status: 'active',
    StatusBg: '#03C9D7',
  },
  {
    OrderID: 390457,
    CustomerName: 'Fran Perez',
    Ticket: 'When will I be chargerd this month?',
    Time : '1700hrs',
    Status: 'active',
    StatusBg: '#03C9D7',
  },
  {
    OrderID: 390457,
    CustomerName: 'Fran Perez',
    Ticket: 'When will I be chargerd this month?',
    Time : '1700hrs',
    Status: 'active',
    StatusBg: '#03C9D7',
  },
  {
    OrderID: 390457,
    CustomerName: 'Fran Perez',
    Ticket: 'When will I be chargerd this month?',
    Time : '1700hrs',
    Status: 'active',
    StatusBg: '#03C9D7',
  },
  {
    OrderID: 390457,
    CustomerName: 'Fran Perez',
    Ticket: 'When will I be chargerd this month?',
    Time : '1700hrs',
    Status: 'active',
    StatusBg: '#03C9D7',
  },
];

export const scheduleData = [
  {
    Id: 1,
    Subject: 'Make payment',
    Location: 'KCB Bank',
    StartTime: '2021-01-10T04:00:00.000Z',
    EndTime: '2021-01-10T05:30:00.000Z',
    CategoryColor: '#1aaa55',
  },
  {
    Id: 2,
    Subject: 'Payment Report',
    Location: 'Kisumu City',
    StartTime: '2021-01-11T06:30:00.000Z',
    EndTime: '2021-01-11T08:30:00.000Z',
    CategoryColor: '#357cd2',
  },
  {
    Id: 3,
    Subject: 'Blue Moon Eclipse',
    Location: 'Kajiado',
    StartTime: '2021-01-12T04:00:00.000Z',
    EndTime: '2021-01-12T05:30:00.000Z',
    CategoryColor: '#7fa900',
  },
  {
    Id: 4,
    Subject: 'Allocate tasks',
    Location: 'Roysambu',
    StartTime: '2021-01-13T07:30:00.000Z',
    EndTime: '2021-01-13T09:00:00.000Z',
    CategoryColor: '#ea7a57',
  },
  {
    Id: 5,
    Subject: 'Milky Way as Melting pot',
    Location: 'Kakamega',
    StartTime: '2021-01-14T06:30:00.000Z',
    EndTime: '2021-01-14T08:30:00.000Z',
    CategoryColor: '#00bdae',
  },
  {
    Id: 6,
    Subject: 'Mysteries of Bermuda Triangle',
    Location: 'Bermuda',
    StartTime: '2021-01-14T04:00:00.000Z',
    EndTime: '2021-01-14T05:30:00.000Z',
    CategoryColor: '#f57f17',
  },
  {
    Id: 7,
    Subject: 'Glaciers and Snowflakes',
    Location: 'Himalayas',
    StartTime: '2021-01-15T05:30:00.000Z',
    EndTime: '2021-01-15T07:00:00.000Z',
    CategoryColor: '#1aaa55',
  },
  {
    Id: 8,
    Subject: 'Life on Mars',
    Location: 'Mars',
    StartTime: '2021-01-16T03:30:00.000Z',
    EndTime: '2021-01-16T04:30:00.000Z',
    CategoryColor: '#357cd2',
  },
  {
    Id: 9,
    Subject: 'Alien Civilization',
    Location: 'Jupiter',
    StartTime: '2021-01-18T05:30:00.000Z',
    EndTime: '2021-01-18T07:30:00.000Z',
    CategoryColor: '#7fa900',
  },
  {
    Id: 10,
    Subject: 'Wildlife Galleries',
    Location: 'Africa',
    StartTime: '2021-01-20T05:30:00.000Z',
    EndTime: '2021-01-20T07:30:00.000Z',
    CategoryColor: '#ea7a57',
  },
  {
    Id: 11,
    Subject: 'Photography',
    Location: 'Cyber',
    StartTime: '2021-01-21T04:00:00.000Z',
    EndTime: '2021-01-21T05:30:00.000Z',
    CategoryColor: '#00bdae',
  },
];

export const lineChartData = [
  [
    { x: new Date(2005, 0, 1), y: 21 },
    { x: new Date(2006, 0, 1), y: 24 },
    { x: new Date(2007, 0, 1), y: 36 },
    { x: new Date(2008, 0, 1), y: 38 },
    { x: new Date(2009, 0, 1), y: 54 },
    { x: new Date(2010, 0, 1), y: 57 },
    { x: new Date(2011, 0, 1), y: 70 },
  ],
  [
    { x: new Date(2005, 0, 1), y: 28 },
    { x: new Date(2006, 0, 1), y: 44 },
    { x: new Date(2007, 0, 1), y: 48 },
    { x: new Date(2008, 0, 1), y: 50 },
    { x: new Date(2009, 0, 1), y: 66 },
    { x: new Date(2010, 0, 1), y: 78 },
    { x: new Date(2011, 0, 1), y: 84 },
  ],
  [
    { x: new Date(2005, 0, 1), y: 10 },
    { x: new Date(2006, 0, 1), y: 20 },
    { x: new Date(2007, 0, 1), y: 30 },
    { x: new Date(2008, 0, 1), y: 39 },
    { x: new Date(2009, 0, 1), y: 50 },
    { x: new Date(2010, 0, 1), y: 70 },
    { x: new Date(2011, 0, 1), y: 100 },
  ],
];
export const dropdownData = [
  {
    Id: '1',
    Time: 'March 2021',
  },
  {
    Id: '2',
    Time: 'April 2021',
  }, {
    Id: '3',
    Time: 'May 2021',
  },
];
export const SparklineAreaData = [
  { x: 1, yval: 2 },
  { x: 2, yval: 6 },
  { x: 3, yval: 8 },
  { x: 4, yval: 5 },
  { x: 5, yval: 10 },
];

export const lineCustomSeries = [
  { dataSource: lineChartData[0],
    xName: 'x',
    yName: 'y',
    name: 'Facebook',
    width: '2',
    marker: { visible: true, width: 10, height: 10 },
    type: 'Line' },
  { dataSource: lineChartData[1],
    xName: 'x',
    yName: 'y',
    name: 'Instagram',
    width: '2',
    marker: { visible: true, width: 10, height: 10 },
    type: 'Line' },

  { dataSource: lineChartData[2],
    xName: 'x',
    yName: 'y',
    name: 'Twitter',
    width: '2',
    marker: { visible: true, width: 10, height: 10 },
    type: 'Line' },
];

export const pieChartData = [
  { x: 'Facebook', y: 18, text: '18%' },
  { x: 'Instagram', y: 8, text: '8%' },
  { x: 'Twitter', y: 15, text: '15%' },
  { x: 'Email', y: 11, text: '11%' },
  { x: 'Tictok', y: 18, text: '18%' },
  { x: 'Telegram', y: 14, text: '14%' },
  { x: 'WhatsApp', y: 16, text: '16%' },
];

export const contextMenuItems = [
  'AutoFit',
  'AutoFitAll',
  'SortAscending',
  'SortDescending',
  'Copy',
  'Edit',
  'Delete',
  'Save',
  'Cancel',
  'PdfExport',
  'ExcelExport',
  'CsvExport',
  'FirstPage',
  'PrevPage',
  'LastPage',
  'NextPage',
];

export const ecomPieChartData = [
  { x: '2018', y: 18, text: '35%' },
  { x: '2019', y: 18, text: '15%' },
  { x: '2020', y: 18, text: '25%' },
  { x: '2021', y: 18, text: '25%' },
];

export const stackedChartData = [
  [
    { x: 'Jan', y: 111.1 },
    { x: 'Feb', y: 127.3 },
    { x: 'Mar', y: 143.4 },
    { x: 'Apr', y: 159.9 },
    { x: 'May', y: 159.9 },
    { x: 'Jun', y: 159.9 },
    { x: 'July', y: 159.9 },
  ],
  [
    { x: 'Jan', y: 111.1 },
    { x: 'Feb', y: 127.3 },
    { x: 'Mar', y: 143.4 },
    { x: 'Apr', y: 159.9 },
    { x: 'May', y: 159.9 },
    { x: 'Jun', y: 159.9 },
    { x: 'July', y: 159.9 },
  ],
];

export const stackedCustomSeries = [

  { dataSource: stackedChartData[0],
    xName: 'x',
    yName: 'y',
    name: 'New Followers',
    type: 'StackingColumn',
    background: 'blue',

  },

  { dataSource: stackedChartData[1],
    xName: 'x',
    yName: 'y',
    name: 'Engagement',
    type: 'StackingColumn',
    background: 'red',

  },

];

export const stackedPrimaryXAxis = {
  majorGridLines: { width: 0 },
  minorGridLines: { width: 0 },
  majorTickLines: { width: 0 },
  minorTickLines: { width: 0 },
  interval: 1,
  lineStyle: { width: 0 },
  labelIntersectAction: 'Rotate45',
  valueType: 'Category',
};

export const stackedPrimaryYAxis = {
  lineStyle: { width: 0 },
  minimum: 100,
  maximum: 400,
  interval: 100,
  majorTickLines: { width: 0 },
  majorGridLines: { width: 1 },
  minorGridLines: { width: 1 },
  minorTickLines: { width: 0 },
  labelFormat: '{value}',
};

export const kanbanData = [
  {
    Id: 'Task 1',
    Title: 'Task - 29001',
    Status: 'Open',
    Summary: 'Analyze the new requirements gathered from the customer.',
    Type: 'Story',
    Priority: 'Low',
    Tags: 'Analyze,Customer',
    Estimate: 3.5,
    Assignee: 'Nancy Davloio',
    RankId: 1,
    Color: '#02897B',
    ClassName: 'e-story, e-low, e-nancy-davloio',
  },
  {
    Id: 'Task 2',
    Title: 'Task - 29002',
    Status: 'InProgress',
    Summary: 'Improve application performance',
    Type: 'Improvement',
    Priority: 'Normal',
    Tags: 'Improvement',
    Estimate: 6,
    Assignee: 'Andrew Fuller',
    RankId: 1,
    Color: '#673AB8',
    ClassName: 'e-improvement, e-normal, e-andrew-fuller',
  },
  {
    Id: 'Task 3',
    Title: 'Task - 29003',
    Status: 'Open',
    Summary: 'Arrange a web meeting with the customer to get new requirements.',
    Type: 'Others',
    Priority: 'Critical',
    Tags: 'Meeting',
    Estimate: 5.5,
    Assignee: 'Janet Leverling',
    RankId: 2,
    Color: '#1F88E5',
    ClassName: 'e-others, e-critical, e-janet-leverling',
  },
  {
    Id: 'Task 4',
    Title: 'Task - 29004',
    Status: 'InProgress',
    Summary: 'Fix the issues reported in the IE browser.',
    Type: 'Bug',
    Priority: 'Critical',
    Tags: 'IE',
    Estimate: 2.5,
    Assignee: 'Janet Leverling',
    RankId: 2,
    Color: '#E64A19',
    ClassName: 'e-bug, e-release, e-janet-leverling',
  },
  {
    Id: 'Task 5',
    Title: 'Task - 29005',
    Status: 'Review',
    Summary: 'Fix the issues reported by the customer.',
    Type: 'Bug',
    Priority: 'Low',
    Tags: 'Customer',
    Estimate: '3.5',
    Assignee: 'Steven walker',
    RankId: 1,
    Color: '#E64A19',
    ClassName: 'e-bug, e-low, e-steven-walker',
  },
  {
    Id: 'Task 6',
    Title: 'Task - 29007',
    Status: 'Validate',
    Summary: 'Validate new requirements',
    Type: 'Improvement',
    Priority: 'Low',
    Tags: 'Validation',
    Estimate: 1.5,
    Assignee: 'Robert King',
    RankId: 1,
    Color: '#673AB8',
    ClassName: 'e-improvement, e-low, e-robert-king',
  },
  {
    Id: 'Task 7',
    Title: 'Task - 29009',
    Status: 'Review',
    Summary: 'Fix the issues reported in Safari browser.',
    Type: 'Bug',
    Priority: 'Critical',
    Tags: 'Fix,Safari',
    Estimate: 1.5,
    Assignee: 'Nancy Davloio',
    RankId: 2,
    Color: '#E64A19',
    ClassName: 'e-bug, e-release, e-nancy-davloio',
  },
  {
    Id: 'Task 8',
    Title: 'Task - 29010',
    Status: 'Close',
    Summary: 'Test the application in the IE browser.',
    Type: 'Story',
    Priority: 'Low',
    Tags: 'Review,IE',
    Estimate: 5.5,
    Assignee: 'Margaret hamilt',
    RankId: 3,
    Color: '#02897B',
    ClassName: 'e-story, e-low, e-margaret-hamilt',
  },
  {
    Id: 'Task 9',
    Title: 'Task - 29011',
    Status: 'Validate',
    Summary: 'Validate the issues reported by the customer.',
    Type: 'Story',
    Priority: 'High',
    Tags: 'Validation,Fix',
    Estimate: 1,
    Assignee: 'Steven walker',
    RankId: 1,
    Color: '#02897B',
    ClassName: 'e-story, e-high, e-steven-walker',
  },
  {
    Id: 'Task 10',
    Title: 'Task - 29015',
    Status: 'Open',
    Summary: 'Show the retrieved data from the server in grid control.',
    Type: 'Story',
    Priority: 'High',
    Tags: 'Database,SQL',
    Estimate: 5.5,
    Assignee: 'Margaret hamilt',
    RankId: 4,
    Color: '#02897B',
    ClassName: 'e-story, e-high, e-margaret-hamilt',
  },
  {
    Id: 'Task 11',
    Title: 'Task - 29016',
    Status: 'InProgress',
    Summary: 'Fix cannot open user’s default database SQL error.',
    Priority: 'Critical',
    Type: 'Bug',
    Tags: 'Database,Sql2008',
    Estimate: 2.5,
    Assignee: 'Janet Leverling',
    RankId: 4,
    Color: '#E64A19',
    ClassName: 'e-bug, e-critical, e-janet-leverling',
  },
  {
    Id: 'Task 12',
    Title: 'Task - 29017',
    Status: 'Review',
    Summary: 'Fix the issues reported in data binding.',
    Type: 'Story',
    Priority: 'Normal',
    Tags: 'Databinding',
    Estimate: '3.5',
    Assignee: 'Janet Leverling',
    RankId: 4,
    Color: '#02897B',
    ClassName: 'e-story, e-normal, e-janet-leverling',
  },
  {
    Id: 'Task 13',
    Title: 'Task - 29018',
    Status: 'Close',
    Summary: 'Analyze SQL server 2008 connection.',
    Type: 'Story',
    Priority: 'Critical',
    Tags: 'Grid,Sql',
    Estimate: 2,
    Assignee: 'Andrew Fuller',
    RankId: 4,
    Color: '#02897B',
    ClassName: 'e-story, e-release, e-andrew-fuller',
  },
  {
    Id: 'Task 14',
    Title: 'Task - 29019',
    Status: 'Validate',
    Summary: 'Validate databinding issues.',
    Type: 'Story',
    Priority: 'Low',
    Tags: 'Validation',
    Estimate: 1.5,
    Assignee: 'Margaret hamilt',
    RankId: 1,
    Color: '#02897B',
    ClassName: 'e-story, e-low, e-margaret-hamilt',
  },
  {
    Id: 'Task 15',
    Title: 'Task - 29020',
    Status: 'Close',
    Summary: 'Analyze grid control.',
    Type: 'Story',
    Priority: 'High',
    Tags: 'Analyze',
    Estimate: 2.5,
    Assignee: 'Margaret hamilt',
    RankId: 5,
    Color: '#02897B',
    ClassName: 'e-story, e-high, e-margaret-hamilt',
  },
  {
    Id: 'Task 16',
    Title: 'Task - 29021',
    Status: 'Close',
    Summary: 'Stored procedure for initial data binding of the grid.',
    Type: 'Others',
    Priority: 'Critical',
    Tags: 'Databinding',
    Estimate: 1.5,
    Assignee: 'Steven walker',
    RankId: 6,
    Color: '#1F88E5',
    ClassName: 'e-others, e-release, e-steven-walker',
  },
  {
    Id: 'Task 17',
    Title: 'Task - 29022',
    Status: 'Close',
    Summary: 'Analyze stored procedures.',
    Type: 'Story',
    Priority: 'Critical',
    Tags: 'Procedures',
    Estimate: 5.5,
    Assignee: 'Janet Leverling',
    RankId: 7,
    Color: '#02897B',
    ClassName: 'e-story, e-release, e-janet-leverling',
  },
  {
    Id: 'Task 18',
    Title: 'Task - 29023',
    Status: 'Validate',
    Summary: 'Validate editing issues.',
    Type: 'Story',
    Priority: 'Critical',
    Tags: 'Editing',
    Estimate: 1,
    Assignee: 'Nancy Davloio',
    RankId: 1,
    Color: '#02897B',
    ClassName: 'e-story, e-critical, e-nancy-davloio',
  },
  {
    Id: 'Task 19',
    Title: 'Task - 29024',
    Status: 'Review',
    Summary: 'Test editing functionality.',
    Type: 'Story',
    Priority: 'Normal',
    Tags: 'Editing,Test',
    Estimate: 0.5,
    Assignee: 'Nancy Davloio',
    RankId: 5,
    Color: '#02897B',
    ClassName: 'e-story, e-normal, e-nancy-davloio',
  },
  {
    Id: 'Task 20',
    Title: 'Task - 29025',
    Status: 'Open',
    Summary: 'Enhance editing functionality.',
    Type: 'Improvement',
    Priority: 'Low',
    Tags: 'Editing',
    Estimate: 3.5,
    Assignee: 'Andrew Fuller',
    RankId: 5,
    Color: '#673AB8',
    ClassName: 'e-improvement, e-low, e-andrew-fuller',
  },
  {
    Id: 'Task 21',
    Title: 'Task - 29026',
    Status: 'InProgress',
    Summary: 'Improve the performance of the editing functionality.',
    Type: 'Epic',
    Priority: 'High',
    Tags: 'Performance',
    Estimate: 6,
    Assignee: 'Nancy Davloio',
    RankId: 5,
    Color: '#e91e64',
    ClassName: 'e-epic, e-high, e-nancy-davloio',
  },
  {
    Id: 'Task 22',
    Title: 'Task - 29027',
    Status: 'Open',
    Summary: 'Arrange web meeting with the customer to show editing demo.',
    Type: 'Others',
    Priority: 'High',
    Tags: 'Meeting,Editing',
    Estimate: 5.5,
    Assignee: 'Steven walker',
    RankId: 6,
    Color: '#1F88E5',
    ClassName: 'e-others, e-high, e-steven-walker',
  },
  {
    Id: 'Task 23',
    Title: 'Task - 29029',
    Status: 'Review',
    Summary: 'Fix the editing issues reported by the customer.',
    Type: 'Bug',
    Priority: 'Low',
    Tags: 'Editing,Fix',
    Estimate: '3.5',
    Assignee: 'Janet Leverling',
    RankId: 6,
    Color: '#E64A19',
    ClassName: 'e-bug, e-low, e-janet-leverling',
  },
  {
    Id: 'Task 24',
    Title: 'Task - 29030',
    Status: 'Testing',
    Summary: 'Fix the issues reported by the customer.',
    Type: 'Bug',
    Priority: 'Critical',
    Tags: 'Customer',
    Estimate: '3.5',
    Assignee: 'Steven walker',
    RankId: 1,
    Color: '#E64A19',
    ClassName: 'e-bug, e-critical, e-steven-walker',
  },
  {
    Id: 'Task 25',
    Title: 'Task - 29031',
    Status: 'Testing',
    Summary: 'Fix the issues reported in Safari browser.',
    Type: 'Bug',
    Priority: 'Critical',
    Tags: 'Fix,Safari',
    Estimate: 1.5,
    Assignee: 'Nancy Davloio',
    RankId: 2,
    Color: '#E64A19',
    ClassName: 'e-bug, e-release, e-nancy-davloio',
  },
];
